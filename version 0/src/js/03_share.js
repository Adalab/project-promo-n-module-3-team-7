/* eslint-disable no-console */
/* eslint-disable no-undef */
/* eslint-disable strict */
const cardDoneCollapsable = document.querySelector('.js_card--done');
const shareBtn = document.querySelector('.js_share--btn');
const urlShare = document.querySelector('.js_url');
const undoneShare = document.querySelector('.js_undone');
const undoneTwitter = document.querySelector('.js_undone2');
const twitterLink = document.querySelector('.js_twitter_link');


function handleShareBtn(event) {
  event.preventDefault();

  fetch('https://awesome-profile-cards.herokuapp.com/card', {
    method: 'POST',
    body: JSON.stringify(formObject),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(formObject);
      urlShare.innerHTML = data.cardURL;
      urlShare.href = data.cardURL;

      if (data.success) {
        undoneTwitter.classList.remove('hidden');
        cardDoneCollapsable.classList.remove('hidden');
        const textCard = 'Mira mi tarjeta profesional 👩🏻‍💻 y contáctame para colaborar 🤳🏻 &hashtags=Adalabers,JavaScript,PromoNerea,teamUndefined';
        twitterLink.href = `https://twitter.com/intent/tweet?text=${textCard}&url=${data.cardURL}`;

      } else {
        cardDoneCollapsable.classList.remove('hidden');
        undoneShare.classList.add('hidden');
        undoneTwitter.classList.add('hidden');

        if (formObject.name === '') {
          urlShare.innerHTML = 'Ups❕ 😓, debes rellenar tu nombre';
        } else if (formObject.job === '') {
          urlShare.innerHTML = 'Ups❕ 😓, debes rellenar tu profesión';
        } else if (formObject.photo === '') {
          urlShare.innerHTML = 'Ups❕ 😓, debes rellenar tu foto';
        } else if (formObject.email === '') {
          urlShare.innerHTML = 'Ups❕ 😓, debes rellenar tu email';
        } else if (!validateEmail(formObject.email)) {
          urlShare.innerHTML = 'Ups❕ 😓, debes rellenar correctamente tu email, falta un @ o algo más 😉';
        } else if (formObject.phone === '') {
          urlShare.innerHTML = 'Ups❕ 😓, debes rellenar tu móvil';
        } else if (!validatePhone(formObject.phone)) {
          urlShare.innerHTML = 'Ups❕ 😓, debes rellenar completo tu móvil, falta algo 😉';
        } else if (formObject.linkedin === '') {
          urlShare.innerHTML = 'Ups❕ 😓, debes rellenar tu linkedin';
        } else if (formObject.github === '') {
          urlShare.innerHTML = 'Ups❕ 😓, debes rellenar tu github';
        } else if (formObject.palette === '') {
          urlShare.innerHTML = 'Ups❕ 😓, debes escojer una paleta de colores 🌈';
        }
      }
    });
}


shareBtn.addEventListener('click', handleShareBtn);
