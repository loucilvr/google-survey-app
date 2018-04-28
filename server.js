const authorize = require('./authorization');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const {google} = require('googleapis');
const SPREADSHEET_ID = '15xDqFfRh28l_zmsPyIFOmC4LT-K6AIc03VJwePSGs5Q';
const fs = require('fs');
const readline = require('readline');
var entry = {};

app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true}));

app.get('/', function (req, res) {
    res.render('index')
});

app.post('/', function (req, res) {
    res.render('index');
    if(req !== null || req !== undefined) {
        entry = {
            name: req.body.name,
            favCity: req.body.city
        }
        fs.readFile('client_secret.json', (err, content) => {
            if (err) return console.log('Error loading client secret file:', err);
            authorize(JSON.parse(content), sendSurveyEntries);
        });
    } else {
        console.log('Something went wrong. Please try again!')
    }

})

app.listen(3000, function () {
    console.log('Survey app listening on port 3000!')
});


function sendSurveyEntries(auth) {
    const sheets = google.sheets({version: 'v4', auth});
    sheets.spreadsheets.values.append({
        spreadsheetId: SPREADSHEET_ID,
        range: 'Sheet1!A2:B',
        valueInputOption: 'USER_ENTERED',
        resource: {
            values: [[entry.name, entry.favCity, new Date()]]
        }
    }, (err, response) => {
        if (err) {
            return console.log('The API returned an error: ' + err);
        }
        else {
            console.log('Appended :)');
        }
    });
}
