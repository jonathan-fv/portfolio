$(function(){
        $('nav a[href^="#"]').click(function(){
            var the_id = $(this).attr("href");
            if(the_id === "#"){
                return
        }
        $('html, body').animate({
            scrollTop:$(the_id).offset().top
        }, 'slow');
        return false;
    });
})
