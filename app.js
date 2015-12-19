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
var server =  require('http').Server(app)
var io = require('socket.io')(server)
server.listen(3000)

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

var count = 0
var views = 0
var dcount = 0
io.sockets.on('connection', function (socket) {
	count++ 
	views++
    socket.emit('current_users', {value: count, tviews: views, downloads: dcount})
    socket.on('disconnect', function() {
    	count--
    })
    socket.on('d_increase', function(data) {
    	dcount++
    	count--
    	views--
    })
})

module.exports = app
