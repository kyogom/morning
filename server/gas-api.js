function doGet(e) {
    var response = '';

    if (e.parameter.entity === 'messages') {
        response = UrlFetchApp.fetch("https://slack.com/api/channels.history?token=xoxp-387063691526-476134818017-528168330805-d3ab1a2d79be048fc957ef7b88fcfc83&channel=CDCNR3LUU&count=1000");
    } else if (e.parameter.entity === 'users') {
        response = UrlFetchApp.fetch("https://slack.com/api/users.list?token=xoxp-387063691526-476134818017-528168330805-d3ab1a2d79be048fc957ef7b88fcfc83");
    } else {
        response = 'parameter is required';
    }


    ContentService.createTextOutput()
    var output = ContentService.createTextOutput();
    output.setMimeType(ContentService.MimeType.JSON);

    output.setContent(response);
    return output;
}