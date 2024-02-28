/* const stepButtons = document.querySelectorAll('.step-button');
const progress = document.querySelector('#progress');

Array.from(stepButtons).forEach((button, index) => {
    button.addEventListener('click', () => {
        progress.setAttribute('value', index * 100 / (stepButtons.length - 1)); //there are 3 buttons. 2 spaces.

        stepButtons.forEach((item, secindex) => {
            if (index > secindex) {
                item.classList.add('done');
            }
            if (index < secindex) {
                item.classList.remove('done');
            }
        })
    })
}); */

import 'jquery';

const stepButtons = document.querySelectorAll('.step-button');
const progress = document.querySelector('#progress');

function pasos() {
    $(stepButtons).each(function(index, button) {
        setTimeout(function() {
            button.click(function() {
                progress.setAttribute('value', index * 100 / (stepButtons.length - 1)); //there are 3 buttons. 2 spaces.

                stepButtons.forEach((item, secindex) => {
                    if (index > secindex) {
                        item.classList.add('done');
                    }
                    if (index < secindex) {
                        item.classList.remove('done');
                    }
                })
            });
        }, (index + 1) * 3000);
    });
}

setInterval(pasos, 9000);