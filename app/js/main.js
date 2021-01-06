$(function () {
  /* Старт Slick-slider на странице about */
  $('.about-slider').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: '<button type="button" class="about-slider__arrow about-slider__arrow-prev"><svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.2582 1.76668L2.02487 5.00002L5.2582 8.23335C5.5832 8.55835 5.5832 9.08335 5.2582 9.40835C4.9332 9.73335 4.4082 9.73335 4.0832 9.40835L0.258203 5.58335C-0.0667969 5.25835 -0.0667968 4.73335 0.258203 4.40835L4.0832 0.58335C4.4082 0.25835 4.9332 0.25835 5.2582 0.58335C5.57487 0.90835 5.5832 1.44168 5.2582 1.76668Z" fill="black"/></svg></button>',
    nextArrow: '<button type="button" class="about-slider__arrow about-slider__arrow-next"><svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.741797 8.23332L3.97513 4.99998L0.741797 1.76665C0.416797 1.44165 0.416797 0.91665 0.741797 0.59165C1.0668 0.26665 1.5918 0.26665 1.9168 0.59165L5.7418 4.41665C6.0668 4.74165 6.0668 5.26665 5.7418 5.59165L1.9168 9.41665C1.5918 9.74165 1.0668 9.74165 0.741797 9.41665C0.42513 9.09165 0.416797 8.55832 0.741797 8.23332Z" fill="black"/></svg></button>',
    dots: false,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
          arrows: false,
          dots: true,
          fade: true,
        }
      },
    ]
  });
  /* Конец Slick-slider на странице about */
  /* Задаем стили кнопкам-переключателям */
  document.querySelectorAll(".catalogue-tabs-panel__control .catalogue-tabs-panel-btn").forEach(btn => {
    btn.addEventListener('click', function () {
      $(btn).siblings().removeClass('catalogue-tabs-panel-btn--active');/*Убираем со всех кнопок активное состояние*/
      btn.classList.add('catalogue-tabs-panel-btn--active');/*Добавляем для нажатой кнопки активное состояние*/

      let tabsPanelBtnText = $(btn).text();/* Берем текст нажатой кнопки */
      $(btn).parents('.catalogue-tabs-panel').children('.catalogue-tabs-panel-btn--select').html(tabsPanelBtnText +
        '<svg class="catalogue-tabs-panel-btn__arrow-icon" width="9" height="5" viewBox="0 0 9 5" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.0729 1.71L3.77082 4.3C4.17707 4.69 4.83332 4.69 5.23957 4.3L7.93748 1.71C8.59373 1.08 8.12498 0 7.1979 0H1.80207C0.874982 0 0.416649 1.08 1.0729 1.71Z" fill="white" /></svg>'
      );/* Берем текст нажатой кнопки */

      $(btn).parent('.catalogue-tabs-panel__control').slideUp();
    });

  });

  /* Старт плагин formstyler */
  $('select.order-form__select').styler();

  /*Конец плагин formstyler */
  /* Старт Slick-slider на странице product */
  $('.product-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    fade: true,
    asNavFor: '.product-slider-navigation',
    responsive: [
      {
        breakpoint: 769,
        settings: {
          dots: true,
        }
      },
    ]
  });

  $('.product-slider-navigation').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.product-slider',
    dots: false,
    arrows: false,
    centerMode: true,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 769,
        settings: "unslick"
      }
    ]
  });
  /* Конец Slick-slider на странице product */
});

function toggleCatalogueTabsBtn(button) {
  $('.catalogue-tabs-panel-btn').removeClass('catalogue-tabs-panel-btn--active');
  $(button).siblings('.catalogue-tabs-panel__control').slideToggle();
}

function openHeaderMobileMenu() {
  $('.header-mobile-menu').addClass('header-mobile-menu--active');
}

function closeHeaderMobileMenu() {
  $('.header-mobile-menu').removeClass('header-mobile-menu--active');
}

function openModalOrder() {
  $('#modalOrder').addClass('active');
}

function closeModalOrder() {
  $('#modalOrder').removeClass('active');
}

function openModalNumber() {
  $('#modalNumber').addClass('active');
}

function closeModalNumber() {
  $('#modalNumber').removeClass('active');
}

function submitModalForm() {
  $('#modalNumber').removeClass('active');
  $('.info-message').addClass('info-message--active');
  setTimeout(() => {
    $('.info-message').removeClass('info-message--active');
  }, 3000);
}


function toggleDropdownHeaderMenu(button, listToggle) {
  button.classList.toggle('active');
  button.parentNode.querySelector(listToggle).classList.toggle('active');

  $('.header__control-box').each(function () {
    $(document).on('click', function (e) {
      if ($(document).width() < 751 || $(e.target).closest(listToggle).length || $(e.target).closest('.header__control-box button').length) {
        return;
      }

      $(document).off('click');
      button.parentNode.querySelector(listToggle).classList.remove('active');
    });
  });
}

function smoothScroll(elem) {
  let target = $(elem).attr('href').split('#');/*Значение атрибута href разделяем на значения до знака "#" и после него и помещаем значения в массив target*/
  let targetAnchor = "#" + target[1];/*Значение якоря к которому должна вести ссылка*/

  $('html, body').animate({/*Делаем плавный скролл к якорной ссылке с отступом от верха страницы в размере высоты шапки*/
    scrollTop: $(targetAnchor).offset().top
  }, 1000);
}
