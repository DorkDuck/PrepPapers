
 var socket = io.connect("127.0.0.1:3000");
    socket.on('connect', function () {
      socket.on('current_users', function(data) {
        $('.son').html(data.value)
        $('.tv').html(data.tviews)
        $('.pd').html(data.downloads)
      })
    })