/* Habilitar animação */
const items = document.querySelectorAll("[data-anime]");

const animeScroll = () => {
  const windowTop = window.pageYOffset + window.innerHeight * 0.85;
  items.forEach((element) => {
    if (windowTop > element.offsetTop) {
      element.classList.add("animate");
    } else {
      element.classList.remove("animate");
    }
  });
};

animeScroll();

window.addEventListener("scroll", () => {
  animeScroll();
});

/* Validação do form */

const inputNome = document.querySelector("#nome");
const inputEmail = document.querySelector("#email");
const labelNome = document.querySelector("#labelNome");
const labelEmail = document.querySelector("#labelEmail");
const buttonEnviar = document.querySelector("#buttonEnviar");
let camposOK = false;

inputNome.addEventListener("keyup", () => {
  if (inputNome.value.length < 3) {
    labelNome.innerText = "Nome (Digite um nome válido)";
    labelNome.style.color = "red";
    camposOK = false;
  } else {
    labelNome.innerText = "Nome";
    labelNome.style.color = "#0071a5";
    camposOK = true;
  }
  validaButton();
});

inputEmail.addEventListener("keyup", () => {
  if (inputEmail.value.length == 0) {
    labelEmail.innerText = "Emal (Digite um email válido)";
    labelEmail.style.color = "red";
    camposOK = false;
  } else {
    labelEmail.innerText = "Email";
    labelEmail.style.color = "#0071a5";
    camposOK = true;
  }
  validaButton();
});

const validaButton = () => {
  if (camposOK == false) {
    buttonEnviar.setAttribute("disabled", "disabled");
    buttonEnviar.classList.add("buttonDisable");
  } else {
    buttonEnviar.removeAttribute("disabled", "disabled");
    buttonEnviar.classList.remove("buttonDisable");
  }
};

validaButton();

buttonEnviar.addEventListener("click", () => {
  alert("Formulário enviado com sucesso!");
});
