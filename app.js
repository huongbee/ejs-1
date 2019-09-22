// npm init --y
// npm install express ejs
const express = require('express');
const app = express();
app.listen(3000, () => console.log('Server start!'))
app.set('view engine', 'ejs')
app.get('/', (req, res) => {
    let username = 'Admin'
    res.render('home', { username })
})