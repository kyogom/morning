const service = require('./service').service;

var tsToDate = (ts) => {
    return new Date(ts * 1000).getFullYear()
        + '-' +
        new Date(ts * 1000).getMonth() + 1
        + '-' +
        new Date(ts * 1000).getDate();
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
                    'MinutesCountFrom0400': tsToDate(message.ts)
                });
            });
            return records;
        })();
    }

};