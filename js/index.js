const borrar = document.getElementById("cancelar");
const enviar = document.getElementById("enviar");
const contenedor = document.getElementById("contenedor");
const form = document.getElementById("form");

//informacion del formulario
const numeroT = document.getElementById("numeroT");
const nombre = document.getElementById("nombre");
const fecha = document.getElementById("fecha");
const cvs = document.getElementById("cvs");

borrar.addEventListener("click", (e) => {
  e.preventDefault();
  const formContenedor = document.getElementById("formContenedor");
  if (formContenedor) {
    formContenedor.remove();
    contenedor.insertAdjacentHTML("beforeend", agregarRojo());
    borrar.classList.add("botonRojo");
  }
});

enviar.addEventListener("click", (e) => {
  e.preventDefault();
  const formContenedor = document.getElementById("formContenedor");
  let validacion = validaciones(
    numeroT.value,
    nombre.value,
    fecha.value,
    cvs.value
  );
  if (formContenedor) {
    if (validacion) {
      formContenedor.remove();
      contenedor.insertAdjacentHTML("beforeend", agregarAzul());
      enviar.classList.add("botonAzul");
    } else {
      alert("todos los campos deben llenarse");
    }
  }
});

function agregarRojo() {
  const html = `
    <div id="color__rojo" class="color__rojo ">
    <img
      src="assets/img/equis.png"
      class="color__rojo__icon"
      alt=""
    />
  </div>`;
  return html;
}

function agregarAzul() {
  const html = `
    <div id="color__blue" class="color__blue">
    <img
      src="assets/img/check.png"
      class="color__rojo__icon"
      alt=""
    />
  </div>`;
  return html;
}

function validaciones(numeroT, nombre, fecha, cvs) {
  if (numeroT && nombre && fecha && cvs) {
    return true;
  } else {
    return false;
  }
}
