$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky"); 
        }else{
            $('.navbar').removeClass("sticky"); 
        }
        if(this.scrollY > 500){
            $('.scroll-up-button').addClass("show"); 
        }else{
            $('.scroll-up-button').removeClass("show"); 
        }
    });
    // Slide-up script

    $('.scroll-up-button').click(function(){
        $('html').animate({scrollTop: 0})
    });
    // Toggle btn navbar and menu script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass('active');
        $('.menu-btn i').toggleClass('active');
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }

    });
})

//cando Animation script
var typed = new Typed( " .candoo", {
    strings: ["an IT Support Manager","Blogger","Developer","Social Media Marketer","Freelancer"],
    typespeed: 100,
    backspeed: 60,
    loop: true
}); 

var typed = new Typed( " .candoo2", {
    strings: ["IT Support Manager","Blogger","Developer","Social Media Marketer","Freelancer"],
    typespeed: 100,
    backspeed: 60,
    loop: true
}); 