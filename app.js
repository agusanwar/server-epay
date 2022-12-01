const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');


const app = express();

// Router
const catogoriesRouter = require('./app/api/v1/categories/routes');
const themperateRouter = require('./app/api/v1/themperate/router');

const v1 = '/api/v1/cms';

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Welcome to Api'
    });
});

// 
app.use(v1, catogoriesRouter);
app.use(v1, themperateRouter);

module.exports = app;
