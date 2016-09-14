/**
 * Created by student on 9/2/16.
 */
function scrollNav() {
    $('.slow-scroll a').click(function(){
        //Toggle Class
        $(".active-scroll").removeClass("active-scroll");
        $(this).closest('li').addClass("active-scroll");
        var theClass = $(this).attr("class");
        $('.'+theClass).parent('li').addClass('active-scroll');
        //Animate
        $('html, body').stop().animate({
            scrollTop: $( $(this).attr('href') ).offset().top - 160
        }, 800);
        return false;
    });
    $('.scrollTop a').scrollTop();
}
scrollNav();