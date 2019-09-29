// npm init --y
// npm install express ejs
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const { Singer, profileLink, avatarLink, arraySinger } = require('./lib/Singer');

app.listen(3000, () => console.log('Server start!'))
app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/', (req, res) => {
    res.render('singer/index', { arraySinger, avatarLink, profileLink });
})
app.get('/add', (req, res) => {
    res.render('singer/add');
})
app.post('/add', (req, res) => {
    const { name, link, avatar } = req.body;
    const _id = Math.round(Math.random() * 1000);
    const singer = new Singer(_id, name, link, avatar);
    arraySinger.push(singer);
    res.redirect('/')
})