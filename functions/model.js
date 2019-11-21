const service = require('./service').service;

var tsToDate = (ts) => {
    return new Date(new Date(ts * 1000).getFullYear(),
        (new Date(ts * 1000).getMonth()),
        new Date(ts * 1000).getDate());
};

// 4:00から8:00を早起きの時間と定義
var MORNING_HOUR_START = 4;
var MORNING_HOUR_END = 8;
var JP_TIME_ZONE = 9;

// メッセージ投稿日時を投稿日からの経過秒数に変換
var TsToMilliSecondPassFrom0000 = (ts) => {
    let milliSecondPassFrom0000 = ts % (24 * 60 * 60 * 1000);
    return parseInt(milliSecondPassFrom0000);
};

// １日の中で最早の投稿のみレスポンス
var filterByDateAndUser = (records) => {
    let removeList = [];
    records.forEach((r1) => {
        records.forEach((r2) => {
            if (r1.user === r2.user && r1.date.getTime() === r2.date.getTime() && r1.msPass !== r2.msPass) {
                const later = r1.msPass > r2.msPass ? r1.id : r2.id;
                if (removeList.indexOf(later) === -1) {
                    removeList.push(later);
                }
            }
        });
    });
    return records.filter(r => removeList.indexOf(r.id) === -1);
};

exports.morning = {
    getMorningRecord: function (req, res) {

        return (async () => {
            const resMessaage = await service.getMessages(req, res);
            const resMembers = await service.getMembers(req, res);
            const records = [];
            const messages = resMessaage.body.messages;
            const members = resMembers.body.members;
            var idx = 0;
            messages.forEach(message => {
                let memberInfo;
                members.forEach(member => {
                    if (message.user === member.id) {
                        memberInfo = member;
                    }
                });
                records.push({
                    'id': idx++,
                    'user': message.user,
                    'realName': memberInfo.real_name,
                    'image24': memberInfo.profile.image_24,
                    'text': message.text,
                    'msPass': TsToMilliSecondPassFrom0000(message.ts * 1000),
                    'date': tsToDate(message.ts)
                });
            });
            return records;
            // for DEMO
            // const timeFiltered = records.filter((r) =>
            //     (MORNING_HOUR_START + 24 - JP_TIME_ZONE) * 60 * 60 * 1000 <= r.msPass
            //     &&
            //     r.msPass <= (MORNING_HOUR_END + 24 - JP_TIME_ZONE) * 60 * 60 * 1000
            // );
            // const dateFiltered = filterByDateAndUser(timeFiltered);

            // return dateFiltered;
        })();
    }

};