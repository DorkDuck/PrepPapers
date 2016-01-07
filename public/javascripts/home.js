
 var socket = io.connect("http://preppapers.com/");
    socket.on('connect', function () {
      socket.on('current_users', function(data) {
        $('.son').html(data.value)
        $('.tv').html(data.tviews)
        $('.pd').html(data.downloads)
      })
    })