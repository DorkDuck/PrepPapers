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
var mongoose = require('mongoose')
mongoose.connect('mongodb://sarthak:yesmyyear@ds047865.mongolab.com:47865/preppapers')
var statModel = mongoose.model('stats', { 
                                                viewCount: Number,
                                                downCount: Number,
                                                realtimeCount: Number, 
                                                name: String
                                              });


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


io.sockets.on('connection', function (socket) {
  statModel.find({name: 'saru95'}, function(err,docs) {
  if (!err){
      var count = docs[0].realtimeCount
      var dcount = docs[0].downCount
      var tcount = docs[0].viewCount
      statModel.findOneAndUpdate({ name: 'saru95' }, { $inc: { viewCount: 1 }}, function(err, found){
        if (!err) {
          statModel.findOneAndUpdate({ name: 'saru95' }, { $inc: { downCount: 1 }}, function(err2, found2){
              if (!err2) {
                    statModel.findOneAndUpdate({name: 'saru95'}, { $inc: {realtimeCount: 1}}, function(err3, found3) {
                      if (!err3) {
                        socket.emit('current_users', {value: count, tviews: tcount, downloads: dcount})
                        socket.on('disconnect', function() {
                          statModel.findOneAndUpdate({name: 'saru95'}, { $inc: {realtimeCount: -1}}, function(err4, found4){})
                        })
                      }
                    })
              }
          })
        }
    })
  } 
})
})

module.exports = app
