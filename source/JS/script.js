'use strict';

var header = document.querySelector(".main-header");
var navigation = header.querySelector(".navigation");
var menuButton = navigation.querySelector(".navigation__toggle");

navigation.classList.remove("no-js");

menuButton.addEventListener("click", function (evt) {
    evt.preventDefault();
    if (navigation.classList.contains('navigation--open')) {
        header.classList.remove("main-header--open");
        navigation.classList.remove("navigation--open");
    } else {
        header.classList.add("main-header--open");
        navigation.classList.add("navigation--open");
    }
});

var popup = document.querySelector(".pop-up");
var popupContent = document.querySelector(".pop-up__content");
var mainForm = document.querySelector(".subscribe__form");
var subscribe = document.querySelector(".subscribe__button");
var subscribeInput = document.querySelector(".subscribe__input");

subscribeInput.addEventListener('invalid', function (evt) {
    if (evt === true) {
        evt.preventDefault();
    } else {
        mainForm.addEventListener("submit", function(evt) {
            evt.preventDefault();
        });
        subscribe.addEventListener("click", function (evt) {
            evt.preventDefault();
            if (subscribeInput.validity.valueMissing) {
                subscribeInput.setCustomValidity('Обязательное поле!');
            } else if (subscribeInput.checkValidity()) {
                popupContent.innerHTML = "Спасибо за подписку, " + subscribeInput.value + "!";
                popup.classList.add("pop-up--open");
            } else {
                subscribeInput.setCustomValidity('Введите правильный адрес!');
            }
        });
    }
});
