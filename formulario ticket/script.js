const Nombre = document.getElementById('nombre');
const Apellido = document.getElementById('apellido');
const Sexo = document.getElementById('sexo');
const Telefono = document.getElementById('telefono');
const Email = document.getElementById('e-mail');
const Direccion = document.getElementById('direccion');
const Comuna = document.getElementById('comuna');
const Caja = document.getElementById('caja');

var checkedValue = document.querySelector('.messageCheckbox:checked').value;

const Campos = {
    nombre: false,
    apellido: false,
    sexo: false,
    telefono: false,
    email: false,
    direccion: false,
    comuna: false,
    caja: false
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let regemail=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})+$/;
    let regtel=/^[9|6|7][0-9]{8}$/;
    let regnombre=/^[a-zA-Z]+$/;
    let regapellido=/^[a-zA-Z]+$/;
    let regdireccion=/^[a-zA-Z0-9\s]+$/;
    let regcomuna=/^[a-zA-Z]+$/;



        if (Nombre.value.length < 1) {
            tooltip.classList.add('tooltip-visible');
        }

        if (!regnombre.test(Nombre.value)) {
            warnings += "Nombre no es valido"
        }else{
            Campos.nombre = true
            tooltip.classList.remove('tooltip-activo')


// Nombre listo


        if (Apellido.value.length < 1) {
            warnings += "Apellido es requerido"
        }

        if (!regapellido.test(Apellido.value)) {
            warnings += "Apellido no es valido"
        }else{
            Campos.apellido = true
            tooltip.classList.remove('tooltip-activo')
// Apellido listo

        if (Sexo.value = "") {
            warnings += "Sexo es requerido"
        } else {
            Campos.sexo = true
            tooltip.classList.remove('tooltip-activo')
        }

// Sexo listo

        if (Telefono.value.length < 1) {
            warnings += "Telefono es requerido"
        }

        if (!regtel.test(Telefono.value)) {
            warnings += "Telefono no es valido"
        }else{
            Campos.telefono = true
            tooltip.classList.remove('tooltip-activo')
        }

//Telefono listo

        if (Email.value.length < 1) {
            warnings += "Email es requerido"
        }

        if(!regemail.test(Email.value)){
            warnings += "Email no es valido"
        }else{
            Campos.email = true
            tooltip.classList.remove('tooltip-activo')
        }

//Email listo

        if (Direccion.value.length < 1) {
            warnings += "Direccion es requerido"
        }
        if (!regdireccion.test(Direccion.value)) {
            warnings += "Direccion no es valido"
        }else{
            Campos.direccion = true
            tooltip.classList.remove('tooltip-activo')
        }

//Direccion listo

        if (Comuna.value.length < 1) {
            warnings += "Comuna es requerido"
        }
        if (!regcomuna.test(Comuna.value)) {
            warnings += "Comuna no es valido"
        }else {
            Campos.comuna = true
            tooltip.classList.remove('tooltip-activo')
        }

//Comuna listo


// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()



        }


    })
