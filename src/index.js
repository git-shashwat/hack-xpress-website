const path = require('path');
const express = require('express');

const port = process.env.PORT || 3000;
const publicDirPath = path.join(__dirname, '../public');

const app = express();
app.use(express.static(publicDirPath));

app.get('/', (req, res) => {
    res.sendFile('index.html');
});

app.listen(port, () => {
    console.log(`Server is up and running on port: ${port}`);
});