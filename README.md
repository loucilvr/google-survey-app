### Google Survey App

This simple app accepts user input and sends survey data to an authorized Google Spreadsheet.

This app was built using React, Node and Express, and was extended from a [Node.js/Express Tutorial](https://codeburst.io/build-a-weather-website-in-30-minutes-with-node-js-express-openweather-a317f904897b).

<br/>
<br/>

Installation Requirements:
- Node
- npm
- Express
- Create-React-App

<br/>

### Try it Out!

  
**Clone this project locally, open your terminal and run the following commands:**
<br/>
<br/>
 
This installs the dependencies needed to run the application
```
   npm install
```
<br/>

Now, run the node application:

```
   node server.js
```


Finally, to view the saved entries on the Google spreadsheet, navigate to the spreadsheet on your browser.
(Only authorized users can view this spreadsheet unless configured as a public spreadsheet) 
<br/>
<br/>

If I have not shared this with you personally and you would like to run the app and see the data saved to your own Google Sheet,
sign up for an API credentials through the central [Google Developers Site](https://console.developers.google.com/start/api?id=sheets.googleapis.com) and replace SPREADSHEET_ID as well as the credentials.json file.

<br/>
<br/>

**For more information on building a Node app with Google's Sheets API, follow this link:**

[Google Sheets API - Node.js Quickstart](https://developers.google.com/sheets/api/quickstart/nodejs#step_3_set_up_the_sample)
