const path = require('path');
const fs = require('fs');
const express = require("express");
const app = express();

const port = process.env.PORT || 3000;


app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
})

app.listen(port, () => {
    console.log(`Server is up on port ${port}.`);
});
  