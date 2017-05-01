$( document ).ready(function() {
    $('ul.nav.navbar-nav').flexMenu();


    $(document).on("scroll",function(){
        if(screen.width >= 768) {
            if($(document).scrollTop()>200){
                $("nav").addClass("smoll");
            } else{
                $("nav").removeClass("smoll");
            }
        }
    });

});




