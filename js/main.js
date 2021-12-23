$('.slaid').slick({
    dots: false
    , infinite: true
    , speed: 600
    , slidesToShow: 6
    , slidesToScroll: 1
    , arrows: false
    , autoplay: true
    , autoplaySpeed: 2000
    , responsive: [
        {
            breakpoint: 1024
            , settings: {
                slidesToShow: 6
                , slidesToScroll: 1
                , infinite: true
                , dots: false
            , }
    }
        , {
            breakpoint: 600
            , settings: {
                slidesToShow: 3
                , slidesToScroll: 1
                , dots: false
            , }
    }
        , {
            breakpoint: 480
            , settings: {
                slidesToShow: 2
                , slidesToScroll: 1
            , }
    }
  ]
});
//typewriter part js
$('.type-it').typeIt({
    speed: 10
    , lifeLike: false
    , autoStart: false
    , cursor: false
})