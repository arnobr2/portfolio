$(document).ready(function(){var t=$(".cards,  .cards5"),e={element:"",cardImg:""},a=$(window).width(),i=!1;$(".cards--portfolio .tags").length&&$(".cards--portfolio .tags").matchHeight({byRow:!1}),t.each(function(){function t(){var t=$(".cards-item-link-image",$(this)).attr("data-background");e.element=$(".row-background--"+t),e.cardImg=$(this),$(".cards-item").not(this).addClass("inactive"),e.cardImg.addClass("active"),e.element.css({"z-index":2}).addClass("active")}function c(){var t=e.element,a=e.cardImg;setTimeout(function(t){return function(){t.removeClass("active")}}(a),0),setTimeout(function(t){return function(){t.css({"z-index":1}).removeClass("active"),$(".cards--page-main-2 .cards-item.active").length||$(".cards--page-main-2 .cards-item").removeClass("inactive")}}(t),400)}$(this).hasClass("cards--page-requirements-engineering-1")&&$(".cards-wrapper",$(this)).matchHeight({byRow:!0}),$(this).hasClass("cards--ruby-2")&&$(".cards-name",$(this)).matchHeight(),$(".cards-item",$(this)).matchHeight({byRow:!1}),$(".cards-text--top",$(this)).matchHeight({byRow:!1}),$(".cards5-item",$(this)).matchHeight({byRow:!0}),$(".cards--portfolio .cards-name h4").matchHeight({byRow:!1}),$(".cards--portfolio .cards-text").matchHeight({byRow:!1}),$(".cards--portfolio .cards-item, .cards--portfolio .cards-text").matchHeight({byRow:!1}),$(".cards--mobile-1 .cards-name h4").matchHeight({byRow:!1}),$(".cards--page-main-2 .cards-item").hoverIntent(t,c,400),$(window).resize(function(){if($(window).width()!=a){a=$(window).width();var e=$(".cards--page-main-2 .column").css("margin-bottom");"-1px"!==e?i||($(".cards--page-main-2 .cards-item").hoverIntent(t,c,400),i=!0):($(".cards--page-main-2 .cards-item").off(),i=!1)}})})}),$(document).ready(function(){$(".cards4-item").matchHeight({byRow:!1})}),$(document).ready(function(){$(".cards6-item").matchHeight({byRow:!1})}),$(document).ready(function(){$(".cards9-item").matchHeight({byRow:!1})}),$(document).ready(function(){$(".scheme-item").matchHeight({byRow:!1})}),$(document).ready(function(){$(".scheme1-item").matchHeight({byRow:!1})}),$(document).ready(function(){var t=$(".scheme3"),e=0,a=$(".heading",t),i=0,c=0,n=$(".tubes-circle",t),s=0;$(window).resize(function(r){a.length&&n.length&&(e=parseInt(t.css("padding-top").replace("px","")),i=a.height(),c=parseInt(a.css("margin-bottom").replace("px","")),s=e+i+c+5,n.css({top:s}))}).trigger("resize"),$(".scheme3-list li").matchHeight({byRow:!1})}),$(document).ready(function(){$(".scheme4-item").matchHeight({byRow:!1})}),$(document).ready(function(){$(".scheme5-item").matchHeight({byRow:!1})}),$(document).ready(function(){var t=$(".sphere");t.length&&t.each(function(t,e){var a=$(".sphere-item",$(this));a.matchHeight({byRow:!1})})});