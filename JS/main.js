const responsive = {
    0:{
    items:1
    },
    320:{
        items:1
    },
    600:{
        items:2
    },
    960:{
        items:3
    }
}

$(document).ready(function () {

    $nav = $('.nav');
    $toggleCollapse = $('.toggle-collapse');


    // click event on toggle 
    $toggleCollapse.click(function () {
        $nav.toggleClass('collapse');
    })

    // owl-carousel for blog
    $('.owl-carousel').owlCarousel({
        responsive: responsive
    });



    // click to scroll top
    $('.move-up span').click(function(){
        $('html,body').animate({
            scrollTop: 0
        }, 1000);
    })

    //AOS instance
    AOS.init();


});