"use strict";const collapsableButtonDesign=document.querySelector(".js_collapsable_design_button"),collapsableCardDesign=document.querySelector(".js_collapsable_design"),collapsableArrowDesign=document.querySelector(".js_arrow_design");function handleCollapsableDesign(){collapsableCardDesign.classList.toggle("hide"),collapsableArrowDesign.classList.toggle("arrow"),collapsableCardFill.classList.add("hide"),collapsableCardShare.classList.add("hide")}collapsableButtonDesign.addEventListener("click",handleCollapsableDesign);const collapsableButtonFill=document.querySelector(".js_collapsable_fill_button"),collapsableCardFill=document.querySelector(".js_collapsable_fill"),collapsableArrowFill=document.querySelector(".js_arrow_fill");function handleCollapsableFill(){collapsableCardFill.classList.toggle("hide"),collapsableArrowFill.classList.toggle("arrow"),collapsableCardDesign.classList.add("hide"),collapsableCardShare.classList.add("hide")}collapsableButtonFill.addEventListener("click",handleCollapsableFill);const collapsableButtonShare=document.querySelector(".js_collapsable_share_button"),collapsableCardShare=document.querySelector(".js_collapsable_share"),collapsableArrowShare=document.querySelector(".js_arrow_share");function handleCollapsableShare(){collapsableCardShare.classList.toggle("hide"),collapsableArrowShare.classList.toggle("arrow"),collapsableCardDesign.classList.add("hide"),collapsableCardFill.classList.add("hide")}collapsableButtonShare.addEventListener("click",handleCollapsableShare);const formPreviewName=document.querySelector(".js_preview_name"),formPreviewJob=document.querySelector(".js_preview_job"),previewLinkedin=document.querySelector(".js_preview_linkedin"),previewPhone=document.querySelector(".js_preview_phone"),previewEmail=document.querySelector(".js_preview_email"),previewGithub=document.querySelector(".js_preview_github"),nameChangeColor=document.querySelector(".js_preview_name"),bulletChangeColor=document.querySelector(".js_bullet"),iconChangeColor=document.querySelectorAll(".js_icon"),itemChangeColor=document.querySelectorAll(".js_item"),formObject={palette:"",name:"Nombre Apellido",job:"Front-end developer",phone:"",email:"",linkedin:"",github:"",photo:""},formEl=document.querySelector(".js_form");function handleInput(e){switch(e){case"1":nameChangeColor.classList.add("palette_1_text_color"),bulletChangeColor.classList.add("palette_1_bullet_color");for(const e of iconChangeColor)e.classList.add("palette_1_icons_color"),e.classList.remove("palette_2_icons_color"),e.classList.remove("palette_3_icons_color");for(const e of itemChangeColor)e.classList.add("palette_1_item_color"),e.classList.remove("palette_2_item_color"),e.classList.remove("palette_3_item_color");bulletChangeColor.classList.remove("palette_2_bullet_color"),nameChangeColor.classList.remove("palette_2_text_color"),nameChangeColor.classList.remove("palette_3_text_color"),bulletChangeColor.classList.remove("palette_3_bullet_color");break;case"2":bulletChangeColor.classList.add("palette_2_bullet_color"),nameChangeColor.classList.add("palette_2_text_color");for(const e of iconChangeColor)e.classList.add("palette_2_icons_color"),e.classList.remove("palette_1_icons_color"),e.classList.remove("palette_3_icons_color");for(const e of itemChangeColor)e.classList.add("palette_2_item_color"),e.classList.remove("palette_1_item_color"),e.classList.remove("palette_3_item_color");bulletChangeColor.classList.remove("palette_3_bullet_color"),nameChangeColor.classList.remove("palette_3_text_color"),nameChangeColor.classList.remove("palette_1_text_color"),bulletChangeColor.classList.remove("palette_1_bullet_color");break;case"3":bulletChangeColor.classList.add("palette_3_bullet_color"),nameChangeColor.classList.add("palette_3_text_color");for(const e of iconChangeColor)e.classList.add("palette_3_icons_color"),e.classList.remove("palette_2_icons_color"),e.classList.remove("palette_1_icons_color");for(const e of itemChangeColor)e.classList.add("palette_3_item_color"),e.classList.remove("palette_2_item_color"),e.classList.remove("palette_1_item_color");bulletChangeColor.classList.remove("palette_2_bullet_color"),nameChangeColor.classList.remove("palette_2_text_color"),nameChangeColor.classList.remove("palette_1_text_color"),bulletChangeColor.classList.remove("palette_1_bullet_color")}}function handledFormElUpdate(e){const l=e.target.name,t=e.target.value;formObject[l]=t,"palette"===l.toString()&&handleInput(t),handleInput(),formPreviewName.innerHTML=formObject.name,formPreviewJob.innerHTML=formObject.job,previewEmail.href="mailto:"+formObject.email,previewPhone.href="+34"+formObject.phone,previewLinkedin.href="https://linkedin.com/in/"+formObject.linkedin,previewGithub.href="https://github.com/"+formObject.github}function validateEmail(e){return/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e)}function validatePhone(e){return/^([9,8,7,6]{1})+([0-9]{8})$/.test(e)}formEl.addEventListener("change",handledFormElUpdate);const fr=new FileReader,fileField=document.querySelector(".js__profile-upload-btn"),profileImage=document.querySelector(".js__profile-image"),profilePreview=document.querySelector(".js__profile-preview");function getImage(e){const l=e.currentTarget.files[0];fr.addEventListener("load",writeImage),fr.readAsDataURL(l)}function writeImage(){profileImage.style.backgroundImage=`url(${fr.result})`,profilePreview.style.backgroundImage=`url(${fr.result})`,formObject.photo=fr.result}function fakeFileClick(){fileField.click()}fileField.addEventListener("change",getImage);const btnReset=document.querySelector(".js-preview__button");function resetValue(){location.reload()}btnReset.addEventListener("click",resetValue);const cardDoneCollapsable=document.querySelector(".js_card--done"),shareBtn=document.querySelector(".js_share--btn"),urlShare=document.querySelector(".js_url"),undoneShare=document.querySelector(".js_undone"),undoneTwitter=document.querySelector(".js_undone2"),twitterLink=document.querySelector(".js_twitter_link");function handleShareBtn(e){e.preventDefault(),fetch("https://awesome-profile-cards.herokuapp.com/card",{method:"POST",body:JSON.stringify(formObject),headers:{"Content-Type":"application/json"}}).then(e=>e.json()).then(e=>{if(console.log(formObject),urlShare.innerHTML=e.cardURL,urlShare.href=e.cardURL,e.success){undoneTwitter.classList.remove("hidden"),cardDoneCollapsable.classList.remove("hidden");const l="Mira mi tarjeta profesional 👩🏻‍💻 y contáctame para colaborar 🤳🏻 &hashtags=Adalabers,JavaScript,PromoNerea,teamUndefined";twitterLink.href=`https://twitter.com/intent/tweet?text=${l}&url=${e.cardURL}`}else cardDoneCollapsable.classList.remove("hidden"),undoneShare.classList.add("hidden"),undoneTwitter.classList.add("hidden"),""===formObject.name?urlShare.innerHTML="Ups❕ 😓, debes rellenar tu nombre":""===formObject.job?urlShare.innerHTML="Ups❕ 😓, debes rellenar tu profesión":""===formObject.photo?urlShare.innerHTML="Ups❕ 😓, debes rellenar tu foto":""===formObject.email?urlShare.innerHTML="Ups❕ 😓, debes rellenar tu email":validateEmail(formObject.email)?""===formObject.phone?urlShare.innerHTML="Ups❕ 😓, debes rellenar tu móvil":validatePhone(formObject.phone)?""===formObject.linkedin?urlShare.innerHTML="Ups❕ 😓, debes rellenar tu linkedin":""===formObject.github?urlShare.innerHTML="Ups❕ 😓, debes rellenar tu github":""===formObject.palette&&(urlShare.innerHTML="Ups❕ 😓, debes escojer una paleta de colores 🌈"):urlShare.innerHTML="Ups❕ 😓, debes rellenar completo tu móvil, falta algo 😉":urlShare.innerHTML="Ups❕ 😓, debes rellenar correctamente tu email, falta un @ o algo más 😉"})}shareBtn.addEventListener("click",handleShareBtn);