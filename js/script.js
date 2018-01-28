var link = document.querySelector(".feedback-btn");
var popup = document.querySelector(".modal-content");
var close = popup.querySelector(".modal-content-close");
var user = popup.querySelector("[name=user-name]");
var form = popup.querySelector(".feedback-form");
var email = popup.querySelector("[name=user-email]");
var message = popup.querySelector("[name=letter-content]");
var mail = localStorage.getItem("email");
var person = localStorage.getItem("user");


link.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.add("modal-content-show");
  user.focus();

  if (person) {
  user.value = person;
  } else {
  message.focus();
  }

  if (mail) {
  email.value = mail;
  } else {
  message.focus();
  }
  });

close.addEventListener("click", function(event) {
event.preventDefault();
popup.classList.remove("modal-content-show");
popup.classList.remove("modal-error");

});

form.addEventListener("submit", function(event) {
  if (!user.value || !email.value || !message.value) {
  event.preventDefault();
  popup.classList.add("modal-error");
  }  else {
  localStorage.setItem("email", email.value);
  localStorage.setItem("user", user.value);
  }
});

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
  if (popup.classList.contains("modal-content-show")) {
  popup.classList.remove("modal-content-show");
  }
 }
});

ymaps.ready(init);
var myMap;
function init () {

myMap = new ymaps.Map("map", {
  center: [59.939167313501486,30.321536952296356],
  zoom: 17,
  controls: ["smallMapDefaultSet"]
  }, {
  searchControlProvider: "yandex#search" });

myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
  hintContent: "Nerds"
  }, {
  iconLayout: "default#image",
  iconImageHref: "img/map-marker.png",
  iconImageSize: [233, 196],
  iconImageOffset: [100, -120]
  });
myMap.geoObjects.add(myPlacemark);
};







