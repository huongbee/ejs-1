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
    const _id = Math.ceil(Math.random() * 1000);
    const singer = new Singer(_id, name, link, avatar);
    arraySinger.push(singer);
    res.redirect('/')
})

app.post('/add', (req, res) => {
    const { name, link, avatar } = req.body;
    const _id = Math.ceil(Math.random() * 1000);
    const singer = new Singer(_id, name, link, avatar);
    arraySinger.push(singer);
    res.redirect('/')
})

app.get('/update/:id', (req, res) => {
    const id = req.params.id;
    const singer = arraySinger.find(s => s._id == id);
    if (!singer) {
        return res.send(404);
    }
    res.render('singer/update', { singer });
})

app.post('/update/:id', (req, res) => {
    const id = req.params.id;
    const { name, avatar, link } = req.body;
    const index = arraySinger.findIndex(s => s._id == id);
    if (index < 0) { // ko tim thay singer
        return res.send(404);
    }
    // const singer = new Singer(id, name, link, avatar);
    // arraySinger[index] = singer
    arraySinger[index].name = name;
    arraySinger[index].avatar = avatar;
    arraySinger[index].link = link;
    res.redirect('/')
})