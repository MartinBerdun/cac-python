let formulario = document.querySelector("#formulario")
let nombre = document.querySelector("#nombre")
let apellido = document.querySelector("#apellido")
let email = document.querySelector("#email")
let noacepta = document.querySelector("#noacepta")
let acepta = document.querySelector("#acepta")
let validarEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

formulario.addEventListener("submit", (e) => {
    e.preventDefault()
    if (nombre.value == "") {
        Swal.fire({
            title: 'Debes ingresar un nombre',
            icon: 'warning',
            confirmButtonText: 'Ok',
            timer: 3000,
            background: "#D6F5FF",
        })
    } else if (apellido.value == "") {
        Swal.fire({
            title: 'Debes ingresar un apellido',
            icon: 'warning',
            confirmButtonText: 'Ok',
            timer: 3000,
            background: "#D6F5FF",
        })
    } else if (!validarEmail.test(email.value)) {
        Swal.fire({
            title: 'Debes ingresar un email correcto',
            icon: 'warning',
            confirmButtonText: 'Ok',
            timer: 3000,
            background: "#D6F5FF",
        })
    } else if (noacepta.checked) {

        Swal.fire({
            title: 'Debes aceptar Terminos y Condiciones',
            icon: 'warning',
            confirmButtonText: 'Ok',
            timer: 3000,
            background: "#D6F5FF",
        })
    } else {
        Swal.fire({
            title: 'Listo',
            text: "En breve nos contactamos con vos!",
            icon: 'success',
            confirmButtonText: 'Ok',
            timer: 3000,
            background: "#D6F5FF",
        })

    }
})