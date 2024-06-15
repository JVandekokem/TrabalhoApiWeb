require('dotenv').config();
const express = require('express')
const router = require('./routes/routes')


const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(router);

const port = process.env.PORT;
app.listen(port, () => {
    console.log("Server running on port " + port);
})