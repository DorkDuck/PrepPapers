var express = require('express')
var path = require('path')
var home = require('./routes/index')
var cbse = require('./routes/cbse')
var eng = require('./routes/engineering')
var man = require('./routes/management')
var law = require('./routes/law')
var medical = require('./routes/medical')
var upsc = require('./routes/upsc')
var seo = require('mean-seo')
var nseo  = require('seo')
var streamcount = require('streamcount')

var uniques = streamcount.createUniquesCounter(0.01);

var app = express()
var server =  require('http').Server(app)
var io = require('socket.io')(server)
server.listen(process.env.PORT || 3000)

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.use(express.static(path.join(__dirname, 'public')))
app.use(require('prerender-node').set('prerenderToken', '6Q4RyQXVRx9iTlpWpaur'))
app.use(seo({ cacheClient: 'disk' }))
app.use(new nseo({
  cacheDirectory: path.resolve(process.cwd(), '.seo-cache'),
  routes: require('./seo-routes'),
  requestURL: 'http://preppapers.com'
}).init())

function random(size) {
    return require("crypto").randomBytes(size).toString('hex')
}



app.use('/', home)
app.use('/cbse', cbse)
app.use('/engineering', eng)
app.use('/management', man)
app.use('/law', law)
app.use('/medical', medical)
app.use('/upsc', upsc)
app.get('/sitemap.xml', function(req, res) {
	res.header('Content-Type', 'application/xml')
	res.sendFile('./public/sitemap.xml')
})

var count = 0
var dcount = 0
io.sockets.on('connection', function (socket) {
	count++
    setTimeout(function() {    dcount++ },  2000)
    uniques.add(random(32))
    socket.emit('current_users', {value: count, tviews: Math.floor(uniques.count()), downloads: dcount})
    socket.on('disconnect', function() {
    	count--
    })
})

module.exports = app
