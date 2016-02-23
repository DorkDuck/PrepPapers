$(document).ready(function() {
	 var socket = io.connect(window.location.href);
    socket.on('connect', function () {
      socket.on('current_users', function(data) {
      	console.log('got it')
        $('.son').html(data.value)
        $('.tv').html(data.tviews)
        $('.pd').html(data.downloads)
      })
    })
})

