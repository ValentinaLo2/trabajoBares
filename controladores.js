let boton = document.getElementById("boton")

let nombres = document.getElementById("nombres")
let salario = document.getElementById("salario")
let horas = document.getElementById("horas")
let cargo = document.getElementById("cargo")
let experiencia = document.getElementById("experiencia")

//escuchamos el evento de hacerle clic al boton del formulario 
boton.addEventListener("click", function(evento){

    evento.preventDefault()

    nombreIngresado = nombres.value 
    salirioIngresado = salario.value
    horasIngresadas = horas.value
    cargoIngresado = cargo.value
    experienciaIgresada = experiencia.value

    let datos = JSON.stringify({
        nombresEmpleados:nombreIngresado,
        salarioEmpleado:salirioIngresado,
        horasEmpleado:horasIngresadas,
        cargoEmpleado:cargoIngresado,
        experienciaEmpleado:experienciaIgresada
    })

    Swal.fire({
        title: "Buen trabajo",
        text: "Exito registrando el empleado",
        icon: "success"
    });

})
