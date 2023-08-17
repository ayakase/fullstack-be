// index.js
const express = require('express');
const app = express();
const PORT = 3000; // You can change the port number if needed
const cors = require('cors')
require('dotenv').config();

app.use(cors({
    origin: process.env.FEURL
}))
app.get('/', function (req, res) {
    res.send("Home")
})
app.get('/test', (req, res) => {
    res.send('Hello from Express!');
});
app.get('/click', (req, res) => {
    res.send('clicked from server')
})
// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT} and FE url is ${process.env.FEURL}`);
});