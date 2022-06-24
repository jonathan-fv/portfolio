$(document).ready(function(){
    // Nar slide Toggle
    $('i.icon').click(function(){
        $('.nav-list').slideToggle()
    });

    // Sticky NavBar
    $(window).scroll(function(){
        var sc= $(this).scrollTop();
        if(sc > 60){
            $('header').addClass('sticky')
        }
        else{
            $('header').removeClass('sticky')
        }
    })
})