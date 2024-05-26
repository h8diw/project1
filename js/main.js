$(document).ready(function(){
    $(function(){
        var coverflow = $("#coverflow").flipster();
      });
      $(".owl-carousel").owlCarousel({
        rtl: true,
        margin: 10,
        nav: true,
        loop: true,
        responsive: {
          0: {
            items: 1
          },
          600: {
            items: 3
          },
          1000: {
            items: 5
          }
        }
      })
    $(window).scroll(function(){
        var meghdare_scroll = $(window).scrollTop();

        if(meghdare_scroll > 250){
            $('header').addClass('sticky');
        }else{
            $('header').removeClass('sticky');
        }
    })  
})
