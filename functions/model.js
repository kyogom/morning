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

var TsToMilliSecondPassFrom0000 = (ts) => {
    let milliSecondPassFrom0000 = ts % (24 * 60 * 60 * 1000);
    return parseInt(milliSecondPassFrom0000);
};

exports.morning = {
    getMorningRecord: function (req, res) {

        return (async () => {
            const resMessaage = await service.getMessages(req, res);
            const resMembers = await service.getMembers(req, res);
            const records = [];
            const messages = resMessaage.body.messages;
            const members = resMembers.body.members;
            messages.forEach(message => {
                let memberInfo;
                members.forEach(member => {
                    if (message.user === member.id) {
                        memberInfo = member;
                    }
                });
                records.push({
                    'user': message.user,
                    'realName': memberInfo.real_name,
                    'image24': memberInfo.profile.image_24,
                    'text': message.text,
                    'msPass': TsToMilliSecondPassFrom0000(message.ts * 1000),
                    'date': tsToDate(message.ts)
                });
            });

            const timeFiltered = records.filter((r) =>
                (MORNING_HOUR_START + 24 - JP_TIME_ZONE) * 60 * 60 * 1000 <= r.msPass
                &&
                r.msPass <= (MORNING_HOUR_END + 24 - JP_TIME_ZONE) * 60 * 60 * 1000
            );
            return timeFiltered;
        })();
    }

};