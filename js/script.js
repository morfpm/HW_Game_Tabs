"use strict";

var btns = document.querySelectorAll('.js-btn'),
    items = document.querySelectorAll('.js-item'),
    activeClass = 'is-active';

var rate = +document.querySelector('.cover__rating-list').dataset.rating,
    rateStars = document.querySelectorAll('.rating-item');

// ------------ change tab start
for (var i = 0; i < btns.length; i++) {

    btns[i].addEventListener('click', function(event) {
        var currentId = this.dataset.tab;

        console.log(currentId);

        for (var j = 0; j < btns.length; j++) {
            btns[j].classList.remove(activeClass);
        }

        for (var j = 0; j < items.length; j++) {
            items[j].classList.remove(activeClass);
        }

        items[currentId - 1].classList.add(activeClass);
        this.classList.add(activeClass);
    });
}
// ---------------- change tab END
// ---------------- process rate start
if (rate > 5){ rate = 5; }

for (var i = 0; i < rate; i++){
    rateStars[i].classList.add('star-on');
}
// ----------------- process rate end