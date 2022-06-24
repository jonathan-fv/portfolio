let hamburger = document.querySelector('.hamburger');
let close = document.querySelector('.close');
let mobileNav = document.querySelector('.mobile-nav');

hamburger.addEventListener('click', function(){
    mobileNav.classList.add('open');
})

close.addEventListener('click', function(){
    mobileNav.classList.remove('open');
});






jQuery(function(){
    $(function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 200 ) {
                $('#scrollUp').css('right','5px');
            } else {
                $('#scrollUp').removeAttr( 'style' );
            }
        });
    // Suppression de la classe 'open' du menu mobile
    // à l'activation d'un lien
    //
            $('.mobile-nav a').click(function() {
                $('.mobile-nav').removeClass('open');
            });
        });
    });