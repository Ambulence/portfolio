var portfolio = $("#portfolio");

portfolio.slick({
    arrows: false,
    dots: true,
    speed: 800,
    slidesToShow: 2,
    slidesToScroll: 2,
});

$("#arrow-prev").on("click", function(event) {
    event.preventDefault();

    portfolio.slick('slickPrev');
});

$("#arrow-next").on("click", function(event) {
    event.preventDefault();

    portfolio.slick('slickNext');
});
