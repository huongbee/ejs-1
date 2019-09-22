// npm init --y
// npm install express ejs
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.listen(3000, () => console.log('Server start!'))
app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({ extended: false }))
app.get('/', (req, res) => {
    let username = 'Admin'
    res.render('home', { username })
})
app.get('/login', (req, res) => {
    res.render('login')
})

app.post('/login', (req, res) => {

})