// Budget API

const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());

const mongoose = require("mongoose");
const budgetModel = require("./models/pb_schema");

let url = 'mongodb://localhost:27017/assignment_08';

let chartData = {
    myBudget: []
};

/* const budget = {
    myBudget: [
        {
            title: 'Eat out',
            budget: 25
        },
        {
            title: 'Rent',
            budget: 275
        },
        {
            title: 'Grocery',
            budget: 110
        },
    ]
}; */

//app.use('/', express.static('public'));

/* app.get('/hello', (req, res) => {
    res.send('Hello World!');
}); */

mongoose.connect(url).then(() => {
    console.log("Connected to database");

    budgetModel.find().then((data) => {
        console.log(data);
        chartData.myBudget = data;
        mongoose.connection.close();
    }).catch((connectionError) => {
        console.log(connectionError);
    });

}).catch((connectionError) => {
    console.log(connectionError);
});

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/budget', (req, res) => {
    //const budget = require('./budget-data.json');

    //res.json(budget);
    res.send(chartData);
});

app.listen(port, () => {
    console.log(`API served at http://localhost:${port}`);
});