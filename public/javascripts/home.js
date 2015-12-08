 $(document).ready(function() {
    $('.dropdown').click(function() {
        var $this = $(this);
        $('.dropdown').not($this).removeClass('active')
        $('.dropdown-menu').not($this.find('.dropdown-menu')).removeClass('open');
        $this.toggleClass('active');
        $this.find('.dropdown-menu').toggleClass('open');
    });
   $(window).on('click', function(e){
     actionwindowclick(e , ".dropdown , .dropdown-menu" , function(){
         $('.dropdown').removeClass('active')
        $('.dropdown-menu').removeClass('open');
     });
   });
});


// hide some divs when click on window
function actionwindowclick(e , selector , action){
      if (!$(selector).is(e.target) // if the target of the click isn't the container...
            && $(selector).has(e.target).length === 0) // ... nor a descendant of the container
        {
      action();
    }
}

