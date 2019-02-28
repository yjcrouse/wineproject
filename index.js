require('dotenv').config();
const express = require('express');
const app = express();
const wines = require('./controllers/winecontroller');
const user = require('./controllers/usercontroller');
const sequelize = require('./db');
const bodyParser = require('body-parser');

sequelize.sync();
app.use(require('./middleware/headers'));
app.use(bodyParser.json());
app.use(require('./middleware/headers'));
app.use(express.static(__dirname + '/public'));

// app.get('/', (req, res) => res.render('index'));
app.use('/auth', user);
app.use('/wines', wines);

app.listen(process.env.PORT, () => console.log(`App is listening on ${process.env.PORT}`))