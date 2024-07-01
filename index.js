const express = require('express');

const app = express();
const port =  3000;

app.use('/static', express.static('static'));

app.get('/*', (_req, res) => {
    return res.sendFile(__dirname + '/static/index.html');
});

app.listen(port, () => {
    console.log(`App running on port ${port}.`);
});
