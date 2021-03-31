"use strict"

$("#toggler").click(function () {
    $(this).toggleClass("active");
    $("#main-nav").toggleClass("active");
});

$(".header-nav .nav-item").click(() => {
    $("#toggler").toggleClass("active");
    $("#main-nav").toggleClass("active");
});

//Scroll reveal

const scroll = ScrollReveal();

scroll.reveal(".animation-top", {
    distance: "20em",
    origin: "top",
    opacity: 0,
    duration: 1000,
    delay: 500
});

scroll.reveal(".animation-bottom", {
    distance: "20em",
    origin: "bottom",
    opacity: 0,
    duration: 1000,
    delay: 500
});

scroll.reveal(".animation-left", {
    distance: "20em",
    origin: "left",
    opacity: 0,
    duration: 1000,
});

scroll.reveal(".animation-right", {
    distance: "20em",
    origin: "right",
    opacity: 0,
    duration: 1000,
});