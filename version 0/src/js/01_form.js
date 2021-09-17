/* eslint-disable indent */
/* eslint-disable no-useless-escape */
/* eslint-disable no-unused-vars */
/* eslint-disable quotes */
/* eslint-disable strict */
//formulario rellena profile cards

// * preview card: escribimos las constantes, solo del preview (card)

const formPreviewName = document.querySelector(".js_preview_name");
const formPreviewJob = document.querySelector(".js_preview_job");
const previewLinkedin = document.querySelector(".js_preview_linkedin");
const previewPhone = document.querySelector(".js_preview_phone");
const previewEmail = document.querySelector(".js_preview_email");
const previewGithub = document.querySelector(".js_preview_github");
const nameChangeColor = document.querySelector(".js_preview_name");
const bulletChangeColor = document.querySelector(".js_bullet");
const iconChangeColor = document.querySelectorAll(".js_icon");
const itemChangeColor = document.querySelectorAll(".js_item");

// * hacemos el objeto que comprende todo el formulario: diseña y rellena
const formObject = {
  palette: "",
  name: "Nombre Apellido",
  job: "Front-end developer",
  phone: "",
  email: "",
  linkedin: "",
  github: "",
  photo: "",
};

// * seleccionamos todo el formulario para aplicarle el evento
const formEl = document.querySelector(".js_form");

function handleInput(value) {
  switch (value) {
    case "1":
      nameChangeColor.classList.add("palette_1_text_color");
      bulletChangeColor.classList.add("palette_1_bullet_color");
      for (const item of iconChangeColor) {
        item.classList.add("palette_1_icons_color");
        item.classList.remove("palette_2_icons_color");
        item.classList.remove("palette_3_icons_color");
      }
      for (const item of itemChangeColor) {
        item.classList.add("palette_1_item_color");
        item.classList.remove("palette_2_item_color");
        item.classList.remove("palette_3_item_color");
      }
      bulletChangeColor.classList.remove("palette_2_bullet_color");
      nameChangeColor.classList.remove("palette_2_text_color");
      nameChangeColor.classList.remove("palette_3_text_color");
      bulletChangeColor.classList.remove("palette_3_bullet_color");
      break;
    case "2":
      bulletChangeColor.classList.add("palette_2_bullet_color");
      nameChangeColor.classList.add("palette_2_text_color");
      for (const item of iconChangeColor) {
        item.classList.add("palette_2_icons_color");
        item.classList.remove("palette_1_icons_color");
        item.classList.remove("palette_3_icons_color");
      }
      for (const item of itemChangeColor) {
        item.classList.add("palette_2_item_color");
        item.classList.remove("palette_1_item_color");
        item.classList.remove("palette_3_item_color");
      }
      bulletChangeColor.classList.remove("palette_3_bullet_color");
      nameChangeColor.classList.remove("palette_3_text_color");
      nameChangeColor.classList.remove("palette_1_text_color");
      bulletChangeColor.classList.remove("palette_1_bullet_color");
      break;
    case "3":
      bulletChangeColor.classList.add("palette_3_bullet_color");
      nameChangeColor.classList.add("palette_3_text_color");
      for (const item of iconChangeColor) {
        item.classList.add("palette_3_icons_color");
        item.classList.remove("palette_2_icons_color");
        item.classList.remove("palette_1_icons_color");
      }
      for (const item of itemChangeColor) {
        item.classList.add("palette_3_item_color");
        item.classList.remove("palette_2_item_color");
        item.classList.remove("palette_1_item_color");
      }
      bulletChangeColor.classList.remove("palette_2_bullet_color");
      nameChangeColor.classList.remove("palette_2_text_color");
      nameChangeColor.classList.remove("palette_1_text_color");
      bulletChangeColor.classList.remove("palette_1_bullet_color");
      break;
  }
}
// * creamos la funcion del escuchador para escribir en la previsualización el valor de cada uno de los inputs del objeto
function handledFormElUpdate(event) {
  // nos devuelve el name del input
  const inputName = event.target.name;

  //nos devuelve el valor del input
  const inputValue = event.target.value;

  //asigna al ID de cada objeto un valor,
  //el ID del objeto y el ID del formulario tienen que coincidir
  formObject[inputName] = inputValue;

  //escribe en cada elemento html de la card el valor del input del objeto

  //1- Detectar si Event es de tipo radioButon
  if (inputName.toString() === `palette`) {
    handleInput(inputValue);
  }
  handleInput();
  //inputs innerHTML
  formPreviewName.innerHTML = formObject.name;
  formPreviewJob.innerHTML = formObject.job;
  // profileImage.value = `data:image/png;base64, ${formObject.photo}`;
  // console.log(formObject.photo)
  //inputs agregar href
  previewEmail.href = `mailto:${formObject.email}`;
  previewPhone.href = `+34${formObject.phone}`;
  previewLinkedin.href = `https://linkedin.com/in/${formObject.linkedin}`;
  previewGithub.href = `https://github.com/${formObject.github}`;

}

// * el evento (escuchador) sobre el formulario completo
formEl.addEventListener("change", handledFormElUpdate);

// ! importante saber cual es el target y el currentTarget de la función, en este caso el target=cada elemento del formulario que tiene el foco puesto y el currentTarget=el formulario entero


function validateEmail(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

function validatePhone(phone) {
  const ph = /^([9,8,7,6]{1})+([0-9]{8})$/;
  return ph.test(phone);
}