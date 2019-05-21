"use strict";

var btns = $('.js-btn');
var items = $('.js-item');

var activeClass = 'is-active';

btns.click(function(event){
    var currentTab = $(this).data('tab');

    btns.removeClass(activeClass);
    $(this).addClass(activeClass);

    items.hide();
    $( items[currentTab - 1] ).show();
});

var rate = +document.querySelector('.cover__rating-list').dataset.rating,
    rateStars = $('.rating-item');

if (rate > 5){ rate = 5; }

for (var i = 0; i < rate; i++){
    rateStars[i].classList.add('star-on');
}
