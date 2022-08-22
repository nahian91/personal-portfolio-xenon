$(document).ready(function() {
    $('.project-popup').magnificPopup({
        type:'image',
        gallery:{
            enabled:true
        }
    });

    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
});