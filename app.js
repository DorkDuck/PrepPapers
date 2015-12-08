var express = require('express')
var path = require('path')
var home = require('./routes/index')
var cbse = require('./routes/cbse')
var eng = require('./routes/engineering')
var man = require('./routes/management')
var law = require('./routes/law')
var medical = require('./routes/medical')
var upsc = require('./routes/upsc')
var hm = require('./routes/hm')

var app = express()

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.use(express.static(path.join(__dirname, 'public')))

app.use('/', home)
app.use('/cbse', cbse)
app.use('/engineering', eng)
app.use('/management', man)
app.use('/law', law)
app.use('/medical', medical)
app.use('/upsc', upsc)
app.use('/hm', hm)


module.exports = app
