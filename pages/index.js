const config = require("../config");

module.exports = () => `<!DOCTYPE html5>
<html>
    <head>
        <meta charset="UTF-8"/>
        <link rel="stylesheet" href="${config.prependHost("index.css")}" />
    </head>
    <body>
        <div id="container">
            <p id="maintext">Coming soon ;)</p>
            <img id="mainimg" src="https://placekitten.com/g/200/300"/>
        </div>
    </body>`;
