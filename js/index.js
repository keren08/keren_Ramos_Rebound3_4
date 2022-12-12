const borrar = document.getElementById('cancelar');
const enviar = document.getElementById('enviar');
const contenedor = document.getElementById('contenedor');
const formContenedor = document.getElementById('formContenedor');



borrar.addEventListener('click',(e)=>{
    e.preventDefault();
    if(document.getElementById('formContenedor')){
    formContenedor.remove();
    contenedor.insertAdjacentHTML('beforeend',agregarRojo());
    borrar.classList.add('botonRojo');    
    }
});

enviar.addEventListener('submit',(e)=>{
    e.preventDefault();
    if(document.getElementById('formContenedor')){
    formContenedor.remove();
    contenedor.insertAdjacentHTML('beforeend',agregarAzul());
    enviar.classList.add('botonAzul');    
    
}
});

function agregarRojo(){
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

function agregarAzul(){
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