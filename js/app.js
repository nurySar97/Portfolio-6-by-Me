
$(function(){
    $('.slider').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:false
      });





      $('#slick-slide-control00').on('click',function(){
          $('#slick-slide-control00').css({'backgroundColor':'#27AE61'});
          $('#slick-slide-control01').css({'backgroundColor':'transparent'});
          $('#slick-slide-control02').css({'backgroundColor':'transparent'});
          $('#slick-slide-control03').css({'backgroundColor':'transparent'});
      })



      $('#slick-slide-control01').on('click',function(){
        $('#slick-slide-control01').css({'backgroundColor':'#27AE61'});
        $('#slick-slide-control00').css({'backgroundColor':'transparent'});
        $('#slick-slide-control02').css({'backgroundColor':'transparent'});
        $('#slick-slide-control03').css({'backgroundColor':'transparent'});
    })




    $('#slick-slide-control02').on('click',function(){
        $('#slick-slide-control02').css({'backgroundColor':'#27AE61'});
        $('#slick-slide-control01').css({'backgroundColor':'transparent'});
        $('#slick-slide-control00').css({'backgroundColor':'transparent'});
        $('#slick-slide-control03').css({'backgroundColor':'transparent'});
    })




    $('#slick-slide-control03').on('click',function(){
        $('#slick-slide-control03').css({'backgroundColor':'#27AE61'});
        $('#slick-slide-control01').css({'backgroundColor':'transparent'});
        $('#slick-slide-control02').css({'backgroundColor':'transparent'});
        $('#slick-slide-control00').css({'backgroundColor':'transparent'});
    })




// blog
    $('.blog__slider').slick({
        infinite: true,
        speed: 300,
        slidesToShow: 2,
        centerMode: true,
        variableWidth: true,
        slidesToScroll: 1
      });






      $('.slick-prev').html('<i class="fas fa-arrow-circle-left"></i>');
      $('.slick-next').html('<i class="fas fa-arrow-circle-right"></i>');

    //   Map

    let header = $('.header')
    let headerInner = $('.header__inner')

    $(window).on("scroll",function() {
        var a = $(window).scrollTop()

        if(a > 52){
            header.css({"position":"fixed"})
            headerInner.css({"marginTop":"0"})
            header.css({"backgroundColor":"#27AE61"})
        }else {
            header.css({"position":"absolute"})
            headerInner.css({"marginTop":"20"})
            header.css({"backgroundColor":"transparent"})
        }


    })



})


