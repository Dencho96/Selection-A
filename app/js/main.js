// $('.faq__btn').on('click', function() {
//     $(this.nextElementSibling.children[1]).slideToggle();
//     $(this).toggleClass('active');
//   });

$('.faq__btn').on('click', function () {
  $(this.parentElement.parentElement.children[1]).slideToggle();
  $(this).toggleClass('active');
});