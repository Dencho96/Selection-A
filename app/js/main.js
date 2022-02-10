$('.faq__btn').on('click', function() {
    $(this.nextElementSibling.children[1]).slideToggle();
    $(this).toggleClass('active');
  });