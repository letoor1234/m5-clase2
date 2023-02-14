// Obtenemos el boton de mostrar contraseña y el input de contraseña
const showPasswordButton = document.getElementById("show-password");
const passwordInput = document.querySelector("input#password");

// Obtenemos los iconos del boton
const openEye = document.getElementById("open-eye");
const closeEye = document.getElementById("close-eye");

// En el evento de click, manejamos segun el caso
showPasswordButton.addEventListener("click", (e) => {
  // Detenemos la propagacion de nuestro click
  e.stopPropagation();
  // Si el tipo anterior del input es "password"
  if (passwordInput.type === "password") {
    // escondemos el icono de ojito abierto
    openEye.className = "icon hidden";
    // mostramos el ojito tapado
    closeEye.className = "icon";
    //  y cambiamos el type en el input
    passwordInput.type = "text";
  } else {
    // caso contrario, lo contrario, ndeah
    openEye.className = "icon";
    closeEye.className = "icon hidden";
    passwordInput.type = "password";
  }
});

// FORM
const inputs = document.getElementsByTagName("input");

const passwordError = document.getElementById("password-error");

const validatePassword = (value) => {
  var length = new RegExp("^(?=.{8,})");
  var elements = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])");

  let message = "";

  if (!length.test(value)) {
    message = "La contraseña es muy corta";
  } else {
    if (!elements.test(value)) {
      message = "La contraseña debe tener mayúsculas, minúscilas y números";
    } else {
      message = "";
    }
  }

  return message;
};

for (const input of inputs) {
  input.addEventListener("input", (evt) => {
    const { name, value } = evt.target;

    if (name === "password") {
      passwordError.innerHTML = validatePassword(value);
    }
  });
}
