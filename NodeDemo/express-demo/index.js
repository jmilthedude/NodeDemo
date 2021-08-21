require('dotenv').config();
const debug = require('debug')('app:startup');
const config = require('config');
const morgan = require('morgan');
const helmet = require('helmet');

const courses = require("./routes/courses");
const home = require("./routes/home");
const express = require('express');
const log = require('./middleware/logger');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));
app.use(helmet());
app.use(log);
app.use('/api/courses', courses);
app.use('/', home);

if (app.get('env') === 'development') {
	app.use(morgan('tiny'));
	debug('Morgan Enabled...');
}

const port = process.env.PORT || 666;

app.listen(port, () => console.log(`Listening on port ${port}...`));