var rp = require('request-promise');
// var slackApiToken = require('./token');

exports.service = {
    'getMessages': (req, res) => {
        // const today = new Date();
        // const today0000 = new Date(today.getFullYear(), today.getMonth(), today.getDate());
        // const fourWeeksAgoTs = today0000.getTime() - 1000 * 60 * 60 * 60 * 60 * 24 * 28;
        // var options = {
        //     uri: 'https://slack.com/api/channels.history',
        //     qs: {
        //         token: slackApiToken,
        //         channel: 'CDCNR3LUU',
        //         count: '1000',
        //         // Slack Api Handle Timestamp not millisecond but second
        //         oldest: fourWeeksAgoTs / 1000
        //     },
        //     headers: {
        //         'User-Agent': 'Request-Promise'
        //     },
        //     json: true,
        //     simple: false,
        //     resolveWithFullResponse: true
        // };

        // return rp(options)
        //     .then((repos) => {
        //         return repos;
        //     })
        //     .catch((err) => {
        //         return err;
        //     });
        return {
            body: {
                messages: [
                    {
                        user: 'UHE8LBMSB',
                        text: 'おはようございます!地震で起きれた...😂',
                        ts: new Date('2019 11/21 06:00').getTime() / 1000 - 9 * 60 * 60
                    },
                    {
                        user: 'UHE8LBMSB',
                        text: 'だいぶ早く起きれた',
                        ts: new Date('2019 11/20 05:12').getTime() / 1000 - 9 * 60 * 60
                    },
                    {
                        user: 'UHE8LBMSB',
                        text: 'おは！良いペース',
                        ts: new Date('2019 11/19 05:15').getTime() / 1000 - 9 * 60 * 60
                    },
                    {
                        user: 'UHE8LBMSB',
                        text: 'おはようございます。昨日夜ふかししてしまった',
                        ts: new Date('2019 11/18 06:10').getTime() / 1000 - 9 * 60 * 60
                    },
                    {
                        user: 'UHE8LBMSB',
                        text: 'おはようございます。安定の起床',
                        ts: new Date('2019 11/17 06:11').getTime() / 1000 - 9 * 60 * 60
                    },
                    {
                        user: 'UHE8LBMSB',
                        text: 'おはようございます!',
                        ts: new Date('2019 11/16 06:31').getTime() / 1000 - 9 * 60 * 60
                    },
                    {
                        user: 'UHE8LBMSB',
                        text: 'おはようございます!５時台に復帰成功。',
                        ts: new Date('2019 11/15 05:42').getTime() / 1000 - 9 * 60 * 60
                    },
                    {
                        user: 'UHE8LBMSC',
                        text: 'おはようございます!地震すごい😨😨😨',
                        ts: new Date('2019 11/21 05:16').getTime() / 1000 - 9 * 60 * 60
                    },
                    {
                        user: 'UHE8LBMSC',
                        text: 'おはよー！',
                        ts: new Date('2019 11/20 05:31').getTime() / 1000 - 9 * 60 * 60
                    },
                    {
                        user: 'UHE8LBMSC',
                        text: 'おはよー！',
                        ts: new Date('2019 11/19 05:45').getTime() / 1000 - 9 * 60 * 60
                    },
                    {
                        user: 'UHE8LBMSC',
                        text: 'おはよー！',
                        ts: new Date('2019 11/18 05:14').getTime() / 1000 - 9 * 60 * 60
                    },
                    {
                        user: 'UHE8LBMSC',
                        text: 'おはよー！',
                        ts: new Date('2019 11/17 05:00').getTime() / 1000 - 9 * 60 * 60
                    },
                    {
                        user: 'UHE8LBMSC',
                        text: 'おはよー！!',
                        ts: new Date('2019 11/16 05:20').getTime() / 1000 - 9 * 60 * 60
                    },
                    {
                        user: 'UHE8LBMSC',
                        text: 'おはよー！',
                        ts: new Date('2019 11/15 05:05').getTime() / 1000 - 9 * 60 * 60
                    },
                    {
                        user: 'UHE8LBMSD',
                        text: 'Good Morning!😏😏😏',
                        ts: new Date('2019 11/21 06:31').getTime() / 1000 - 9 * 60 * 60
                    },
                    {
                        user: 'UHE8LBMSD',
                        text: 'Good Morning!😏😏😏',
                        ts: new Date('2019 11/20 06:41').getTime() / 1000 - 9 * 60 * 60
                    },
                    {
                        user: 'UHE8LBMSD',
                        text: 'Good Morning!😏😏😏',
                        ts: new Date('2019 11/19 06:35').getTime() / 1000 - 9 * 60 * 60
                    },
                    {
                        user: 'UHE8LBMSD',
                        text: 'Good Morning!😏😏😏',
                        ts: new Date('2019 11/18 06:50').getTime() / 1000 - 9 * 60 * 60
                    },
                    {
                        user: 'UHE8LBMSD',
                        text: 'Good Morning!😏😏😏',
                        ts: new Date('2019 11/17 06:00').getTime() / 1000 - 9 * 60 * 60
                    },
                    {
                        user: 'UHE8LBMSD',
                        text: 'Good Morning!😏😏😏!',
                        ts: new Date('2019 11/16 06:12').getTime() / 1000 - 9 * 60 * 60
                    },
                    {
                        user: 'UHE8LBMSD',
                        text: 'Good Morning!😏😏😏',
                        ts: new Date('2019 11/15 06:22').getTime() / 1000 - 9 * 60 * 60
                    },
                ]
            }
        };
    },
    'getMembers': (req, res) => {
        // var options = {
        //     uri: 'https://slack.com/api/users.list',
        //     qs: {
        //         token: slackApiToken,
        //     },
        //     headers: {
        //         'User-Agent': 'Request-Promise'
        //     },
        //     json: true,
        //     simple: false,
        //     resolveWithFullResponse: true
        // };

        // return rp(options)
        //     .then((repos) => {
        //         return repos;
        //     })
        //     .catch((err) => {
        //         return err;
        //     });
        return {
            body: {
                members: [
                    {
                        id: 'UHE8LBMSB',
                        real_name: 'Kyogo',
                        profile : {
                            image_24: 'https://user-images.githubusercontent.com/23183700/69299607-54571200-0c54-11ea-9b40-08bdf5edf79c.png'
                        }
                    },
                    {
                        id: 'UHE8LBMSC',
                        real_name: 'Yama',
                        profile : {
                            image_24: 'https://user-images.githubusercontent.com/23183700/69299791-ce879680-0c54-11ea-8cec-186c19ac139c.jpg'
                        }
                    },
                    {
                        id: 'UHE8LBMSD',
                        real_name: 'Abe',
                        profile : {
                            image_24: 'https://user-images.githubusercontent.com/23183700/69299903-1ad2d680-0c55-11ea-9336-3933595f5ffd.png'
                        }
                    },
                    {
                        id: 'UHE8LBMSE',
                        real_name: 'John',
                        profile : {
                            image_24: 'https://user-images.githubusercontent.com/23183700/69299839-f545cd00-0c54-11ea-907c-68fc7a0a7233.png'
                        }
                    },
                    {
                        id: 'UHE8LBMSF',
                        real_name: 'Lucy',
                        profile : {
                            image_24: 'https://user-images.githubusercontent.com/23183700/69299853-0098f880-0c55-11ea-9ee4-edb4316642a6.jpg'
                        }
                    },
                    {
                        id: 'UHE8LBMSG',
                        real_name: 'Haruki',
                        profile : {
                            image_24: 'https://user-images.githubusercontent.com/23183700/69299893-13abc880-0c55-11ea-92e2-45e1cc3b8771.png'
                        }
                    },
                    {
                        id: 'UHE8LBMSH',
                        real_name: 'Aya',
                        profile : {
                            image_24: 'https://user-images.githubusercontent.com/23183700/69299903-1ad2d680-0c55-11ea-9336-3933595f5ffd.png'
                        }
                    },
                ]
            }
        };
    }
};