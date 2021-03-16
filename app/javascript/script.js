document.addEventListener("turbolinks:load", function() {
  $(function(){
    $('.menu-btn').click(function() {
      $('.menu').addClass('is-active');
    });
    $('.close-btn').click(function() {
      $('.menu').removeClass('is-active');
    });
  });
})