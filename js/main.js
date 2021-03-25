$(document).ready(function () {
    $(function () {
        $(document).scroll(function () {
          var $nav = $("nav");
          $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
        });
      });

      $(".links .link a").click(function (event) {
        event.preventDefault();
        var idScroll  = $(this).attr('href'),
        topScroll = $(idScroll).offset().top - $('.menu').outerHeight(true) - $('nav').outerHeight(true);
        $('body,html').animate({scrollTop: topScroll}, 800);
       
      });

      $('.bars').click(function () { 
          $('.links').slideToggle()
       })
});