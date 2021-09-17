/* eslint-disable indent */
'use strict';

const collapsableButtonDesign = document.querySelector('.js_collapsable_design_button');
const collapsableCardDesign = document.querySelector('.js_collapsable_design');
const collapsableArrowDesign = document.querySelector('.js_arrow_design');

function handleCollapsableDesign() {
    collapsableCardDesign.classList.toggle('hide');
    collapsableArrowDesign.classList.toggle('arrow');
    collapsableCardFill.classList.add('hide');
    collapsableCardShare.classList.add('hide');


}

collapsableButtonDesign.addEventListener('click', handleCollapsableDesign);

// // ! section fill
const collapsableButtonFill = document.querySelector('.js_collapsable_fill_button');
const collapsableCardFill = document.querySelector('.js_collapsable_fill');
const collapsableArrowFill = document.querySelector('.js_arrow_fill');


function handleCollapsableFill() {
    collapsableCardFill.classList.toggle('hide');
    collapsableArrowFill.classList.toggle('arrow');
    collapsableCardDesign.classList.add('hide');
    collapsableCardShare.classList.add('hide');

}

collapsableButtonFill.addEventListener('click', handleCollapsableFill);

// // ! section share
const collapsableButtonShare = document.querySelector('.js_collapsable_share_button');
const collapsableCardShare = document.querySelector('.js_collapsable_share');
const collapsableArrowShare = document.querySelector('.js_arrow_share');

function handleCollapsableShare() {
    collapsableCardShare.classList.toggle('hide');
    collapsableArrowShare.classList.toggle('arrow');
    collapsableCardDesign.classList.add('hide');
    collapsableCardFill.classList.add('hide');
}
collapsableButtonShare.addEventListener('click', handleCollapsableShare);




