$(function () {
  let mySwiper = new Swiper ('.swiper-container', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 10,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
    	el: '.swiper-pagination',
    	type: 'bullets',
    	clickable: true,
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 20,
      }
    }
  });

  function smoothScroll(block) {
    $(block).on("click", function(e){
      e.preventDefault();
      var anchor = $(this).attr('href');
      $('html, body').stop().animate({
        scrollTop: $(anchor).offset().top
        }, 1200);
    });
  }

  smoothScroll('a.header-link-mobile');
  smoothScroll('a.header-link');
  smoothScroll('a.footer-link');

  $('.container__header__button').on('click', function(e){
    e.preventDefault();
    $('.menu').fadeIn();
  });

  $('.header-link, .header-link-mobile, .menu__container-button__exitButtom').on('click', function(e){
    e.preventDefault();
    $('.menu').fadeOut();
  });

  $('.container__header__contacts__button, .container__footer-block__props__button, .container__header__button-mobile').on('click', function(){
    $('.popup').fadeIn();
    $('.popup').css('display', 'flex');
  });

  $('.popup__form-container__container-button__button-mobile').on('click', function(e){
    e.preventDefault();
    $('.popup').fadeOut();
  });

  $('.popup-easy__form-container__container-button__button-mobile').on('click', function(e){
    e.preventDefault();
    $('.popup-easy').fadeOut();
  });

  $('.order').on('click', function(){
    $('.popup-easy').fadeIn();
    $('.popup-easy').css('display', 'flex');
  });

  $('.popup, .popup-easy').click(function(event){
    if(event.target == this) {
      $(this).fadeOut();
    }
  });

  $('input[type="tel"]').inputmask({
    "mask": "+7 (999) 999-99-99"
  });


  $('#send-button').on('click', function() {

  let name = $('#name').val().trim();
  let phone = $('#phone').val().trim();
  let email = $('#email').val().trim();

  if (name == '') {
    $('#error-message').text('Введите имя.');
    return false;
  }
  else if (phone == '') {
    $('#error-message').text('Введите номер телефона.');
    return false;
  }
  else if (email == '') {
    $('#error-message').text('Введите email.');
    return false;
  }

  $('#error-message').text('');

  $.ajax({
    url: 'ajax/mail.php',
    type: 'POST',
    cache: false,
    data: {
      'name': name,
      'phone': phone,
      'email': email,
    },
    dataType: 'html',
    beforeSend: function() {
      $('#send-button').prop('disabled', true);
    },
    success: function(data) {
      if (!data) {
        alert('Что-то пошло не так. Заявка не оправилась. Попробуйте ещё раз');
      }
      else {
        $('#form').trigger('reset');
        $('#error-message').text('Заявка отправлена.');
      }

      $('#send-button').prop('disabled', true);
    }
  });
  });

  $('#send-button-easy').on('click', function() {

  let nameEasy = $('#name-easy').val().trim();
  let emailEasy = $('#email-easy').val().trim();

  if (nameEasy == '') {
    $('#error-message-easy').text('Введите имя.');
    return false;
  }
  else if (emailEasy == '') {
    $('#error-message-easy').text('Введите email.');
    return false;
  }

  $('#error-message-easy').text('');

  $.ajax({
    url: 'ajax/mail-easy.php',
    type: 'POST',
    cache: false,
    data: {
      'nameEasy': nameEasy,
      'emailEasy': emailEasy
    },
    dataType: 'html',
    beforeSend: function() {
      $('#send-button-easy').prop('disabled', true);
    },
    success: function(data) {
      if (!data) {
        alert('Что-то пошло не так. Заявка не оправилась. Попробуйте ещё раз');
      }
      else {
        $('#form-easy').trigger('reset');
        $('#error-message-easy').text('Заявка отправлена.');
      }

      $('#send-button').prop('disabled', true);
    }
  });
  });

});
