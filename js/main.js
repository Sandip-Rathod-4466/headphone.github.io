$(document).ready(function(){
    $(window).scroll(function(){
        let scroll = $(window).scrollTop();
        if(scroll > 10){
            $(".navbar").addClass("sticky-on");
        }
        else{
            $(".navbar").removeClass("sticky-on");
        }
    })
    $(".nav-link").click(function(){
        $("#navbarSupportedContent").removeClass('show');
    })
})