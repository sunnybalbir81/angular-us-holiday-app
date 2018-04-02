var express = require('express'),
    bodyParser = require('body-parser'),
    path = require('path'),
    http = require('http'),
    app = express(),
    HolidayAPI = require('node-holidayapi'),
    hapi = new HolidayAPI('c183a5f9-7876-47c4-b759-e3f8be498eb5').v1,
    port = process.env.PORT || '8080',
    parameters = {
        // Required
        country: 'US',
        year: 2015,
        // Optional
        // month:    7,
        // day:      4,
        // previous: true,
        // upcoming: true,
        // public:   true,
        // pretty:   true,
    };
app.set('port', port);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.get('/api/holidays', function (req, res) {
    hapi.holidays(parameters, function (err, data) {
        console.log(data)
        res.send(data);
    });
});
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});
const server = http.createServer(app);
server.listen(port, () => console.log(`App Running.... `));
