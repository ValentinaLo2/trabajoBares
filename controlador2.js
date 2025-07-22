let boton = document.getElementById("botonD")

let nombresProductos = document.getElementById("nombresProducto")
let Precio = document.getElementById("Precio")
let UnidadesVendidas = document.getElementById("unidadesVendidas")
let DiaQueMasSeVende = document.getElementById("DiaMasVende")


//escuchamos el evento de hacerle clic al boton del formulario 
boton.addEventListener("click", function(evento){

    evento.preventDefault()

    nombreProductosIngresado = nombresProductos.value
    PrecioIngresado = Precio.value
    UnidadesVendidasIngresadas = UnidadesVendidas.value
    DiaQueMasSeVendeIngresado = DiaMasVende.value
    

    let datos = JSON.stringify({
        nombresProductosProducto:nombreProductosIngresado,
        PrecioProducto:PrecioIngresado,
        UnidadesVendidasProducto:UnidadesVendidasIngresadas,
        DiaMasVendeProducto:DiaQueMasSeVendeIngresado
       
    })

    Swal.fire({
        title: "Buen trabajo",
        text: "Exito registrando el empleado",
        icon: "success"
    });

})