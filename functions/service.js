var rp = require('request-promise');
var slackApiToken = require('./token');

exports.service = {
    'getMessages': (req, res) => {
        const today = new Date();
        const today0000 = new Date(today.getFullYear(), today.getMonth(), today.getDate());
        const twoWeeksAgoTs = today0000.getTime() - 60 * 60 * 24 * 14;
        var options = {
            uri: 'https://slack.com/api/channels.history',
            qs: {
                token: slackApiToken,
                channel: 'CDCNR3LUU',
                count: '1000',
                latest: twoWeeksAgoTs
            },
            headers: {
                'User-Agent': 'Request-Promise'
            },
            json: true,
            simple: false,
            resolveWithFullResponse: true
        };

        return rp(options)
            .then((repos) => {
                return repos;
            })
            .catch((err) => {
                return err;
            });
    },
    'getMembers': (req, res) => {
        var options = {
            uri: 'https://slack.com/api/users.list',
            qs: {
                token: slackApiToken,
            },
            headers: {
                'User-Agent': 'Request-Promise'
            },
            json: true,
            simple: false,
            resolveWithFullResponse: true
        };

        return rp(options)
            .then((repos) => {
                return repos;
            })
            .catch((err) => {
                return err;
            });
    }
};