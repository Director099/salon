'use strict';

import Collapse from "../blocks/components/collapse/collapse";
import "../blocks/components/tabs/tabs";

$(".scrollto a").click(function () {
  var elementClick = $(this).attr("href")
  var destination = $(elementClick).offset().top;
  jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 800);
  return false;
});

Collapse();

new Swiper(".gallary__slider", {
  slidesPerView: 3,
  spaceBetween: 30,
  scrollbar: {
    dragSize: 15,
    draggable: true,
    el: ".swiper-scrollbar",
  },
});

const tabSlider = document.querySelector('.js-tab-slider');
const elemsTabSlider = tabSlider.querySelectorAll('.menu-line__link');

elemsTabSlider.forEach((item, i) => {
  item.addEventListener('click', (e) => {
    e.preventDefault();
    swiperTabs.slideTo(i);
  })
});

const swiperTabs = new Swiper(".swiper-tabs", {
  spaceBetween: 10,
  effect: "fade",
  fadeEffect: {
    crossFade: true
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  on: {
    slideChange: function() {
      elemsTabSlider.forEach((item) => item.classList.remove('active'));
      elemsTabSlider[swiperTabs.activeIndex].classList.add('active');
    }
  }
});

ymaps.ready(init);
var myMap,
  myPlacemark;
var yaCoordsOne = 60.718097;
var yaCoordsTwo = 28.761495;
var oxName = 'Standart 47';
var OXphone = '+79876543210';
var OXadres = 'г. Уфа, ул. Пушкина 19';

function init() {
  myMap = new ymaps.Map("map", {
    center: [yaCoordsOne, yaCoordsTwo],
    zoom: 16,
    controls: []
  });

  myPlacemark = new ymaps.Placemark([yaCoordsOne, yaCoordsTwo], {
    balloonContentBody: [
      '<address><strong>' + oxName + '</strong><br/>'+ OXphone +'<br/>' + OXadres + '</address>'
    ],
    hintContent: oxName,
  }, {
    preset: 'islands#redIcon',
    iconLayout: 'default#image',

    iconImageHref: 'img/logo_map.svg',
    iconImageSize: [64, 90],
    iconImageOffset: [-34, -73]
  });

  myMap.geoObjects.add(myPlacemark);
  myMap.behaviors.disable('scrollZoom')
  myMap.behaviors.disable('drag');
  myMap.controls.add(new ymaps.control.ZoomControl());
}
