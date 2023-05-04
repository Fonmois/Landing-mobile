$(document).ready(function(){
        // header-slider
    $(".owl-carousel").owlCarousel({
      items: 1, 
      loop:true,
      smartSpeed: 600,
      margin:5,
    //   autoplay:true,
    //   autoplayTimeout: 8000,
    });
        $('.slider-next').click(function() {
            $(".header-slider").trigger('prev.owl.carousel');
        });

        $('.slider-prev').click(function() {
            $(".header-slider").trigger('next.owl.carousel');
        });
          // portfolio-content-slider
        $('portfolio-content-slider').owlCarousel({
          items:1,
          loop:true,
          smartSpeed:600,
          stagePadding:40,
          margin:15,
});
       

        // fancybox
        Fancybox.bind("[data-fancybox]", {
            Thumbs: false,
            Toolbar: {
                display: {
                  left: [""],
                  middle: [

                  ],
                  right: ["close"],
                },
              },
          });
  });