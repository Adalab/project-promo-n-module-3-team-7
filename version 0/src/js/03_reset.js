/* eslint-disable indent */
'use strict';

const btnReset = document.querySelector('.js-preview__button');

function resetValue() {
	location.reload();
}

btnReset.addEventListener('click', resetValue);