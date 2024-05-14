async function principal() {

    const response = await fetch("../json/data.json")
    const listadoProductos = await  response.json()

    let botonCarrito = document.getElementById("mostrarCarrito")
    botonCarrito.addEventListener("click", verOcultarCarrito)

    let botonCompra = document.getElementById("finalizarCompra")
    botonCompra.addEventListener("click", finalizarCompra)

    renderProduct(listadoProductos)
    filters(listadoProductos)
    renderCarrito()
}

function filters(productos) {

    let botonesFiltro = document.querySelectorAll(".botonFiltro")
    botonesFiltro.forEach(boton => {
        boton.addEventListener("click", () => filtrarProductos(productos, boton.value))
    })

    function filtrarProductos(productos, categoria) {
        let productosMostrados = productos.filter(el => el.subcategoria === categoria)

        productosMostrados != "" ? renderProduct(productosMostrados) : renderProduct(productos)
    }
}

function renderProduct(productos) {

    let contenedorProductos = document.getElementById("objetos")
    contenedorProductos.innerHTML = ""

    productos.forEach(el => {
        let tarjetaProducto = document.createElement("div")
        tarjetaProducto.className = "productos"
        tarjetaProducto.innerHTML = `
        <h2>${el.nombre}</h2>
        <img src="../multi/${el.rutaimg}"/>
        <h3>Precio: $${el.precio} </h3>
        <p>Stock: ${el.stock} </p>
        <button id="${el.id}">Agregar al carrito</button>
        `
        contenedorProductos.appendChild(tarjetaProducto)

        let botonAdd = document.getElementById(`${el.id}`)
        botonAdd.addEventListener("click", (boton) => agregarAlCarrito(boton, productos))
    })
}

function agregarAlCarrito(boton, productos) {

    let carrito = getCarritoLS()
    let productid = Number(boton.target.id)
    let productoEnCarrito = carrito.findIndex(el => el.id === productid)
    let productoBuscado = productos.find(el => el.id === productid)

    if (productoEnCarrito !== -1) {
        carrito[productoEnCarrito].unidades++
        carrito[productoEnCarrito].subtotal = carrito[productoEnCarrito].precio * carrito[productoEnCarrito].unidades
    } else {
        carrito.push({
            id: productoBuscado.id,
            nombre: productoBuscado.nombre,
            precio: productoBuscado.precio,
            unidades: 1,
            subtotal: productoBuscado.precio
        })
    }

    dispararTostada("Producto agregado", "top", 2000)

    localStorage.setItem("carrito", JSON.stringify(carrito))
    renderCarrito()
}

function renderCarrito() {

    let carrito = getCarritoLS()
    let contenedorCarrito = document.getElementById("objetosCarrito")
    contenedorCarrito.innerHTML = ""

    carrito.forEach(el => {
        let tarjetaProductoCarrito = document.createElement("div")
        tarjetaProductoCarrito.className = "productoEnCarrito"
        tarjetaProductoCarrito.innerHTML = `
            <p>${el.nombre}</p>
            <p>Precio unitario: $${el.precio}</p>
            <button class="unidades" id="dec${el.id}"> -1 </button>
            <p>${el.unidades}</p>
            <button class="unidades" id="inc${el.id}"> +1 </button>
            <p>Subtotal: $${el.subtotal}</p>
            <button id="eliminar${el.id}" > X </button>
        `
        contenedorCarrito.appendChild(tarjetaProductoCarrito)

        let botonResta = document.getElementById(`dec${el.id}`)
        botonResta.addEventListener("click", decrementarUnidad)

        let botonSuma = document.getElementById(`inc${el.id}`)
        botonSuma.addEventListener("click", incrementarUnidad)

        let botonEliminar = document.getElementById(`eliminar${el.id}`)
        botonEliminar.addEventListener("click", eliminarDeCarrito)
    })
}

function decrementarUnidad(e) {

    let carrito = getCarritoLS()
    let id = Number(e.target.id.substring(3))
    let posCarrito = carrito.findIndex(el => el.id === id)

    carrito[posCarrito].unidades--

    if (carrito[posCarrito].unidades === 0) {
        carrito = carrito.filter(el => el.id !== id)
        localStorage.setItem("carrito", JSON.stringify(carrito))
        e.target.parentElement.remove()
        dispararTostada("Producto eliminado", "bottom", 2000)
    } else {
        carrito[posCarrito].subtotal = carrito[posCarrito].unidades * carrito[posCarrito].precio
        localStorage.setItem("carrito", JSON.stringify(carrito))
        renderCarrito()
        dispararTostada("Producto eliminado", "bottom", 2000)
    }
}

function incrementarUnidad(e) {

    let carrito = getCarritoLS()
    let id = Number(e.target.id.substring(3))
    let posCarrito = carrito.findIndex(el => el.id === id)

    carrito[posCarrito].unidades++
    carrito[posCarrito].subtotal = carrito[posCarrito].unidades * carrito[posCarrito].precio
    localStorage.setItem("carrito", JSON.stringify(carrito))
    renderCarrito()
    dispararTostada("Producto agregado", "bottom", 2000)
}

function eliminarDeCarrito(e) {

    let carrito = getCarritoLS()
    let id = Number(e.target.id.substring(8))

    dispararTostada("Producto eliminado", "bottom", 2000)

    carrito = carrito.filter(el => el.id !== id)
    localStorage.setItem("carrito", JSON.stringify(carrito))
    e.target.parentElement.remove()
}

function verOcultarCarrito() {
    let contenedorCarrito = document.getElementById("contenedorCarrito")
    contenedorCarrito.classList.toggle("oculto")
}

function finalizarCompra() {

    let carrito = getCarritoLS()
    let total = carrito.reduce((acc, el) => acc + el.subtotal, 0)

    if (total !== 0) {
        dispararAlert("success", "Gracias por su compra!", "Podra pasar a retirarla en 15 minutos por el local! \n El total de la compra es: $" + total)
        localStorage.removeItem("carrito")
        renderCarrito([])
    } else {
        dispararAlert("error", "Para finalizar la compra necesitas seleccionar algun producto!")
    }
}

function dispararAlert(icon, title, text) {
    Swal.fire({
        icon,
        title,
        text,
        timer: 5000,
        timerProgressBar: true,
        showConfirmButton: false
    })
}

function dispararTostada(text, gravity, duration) {
    Toastify({
        text,
        gravity,
        duration,
        className: "tostada"
    }).showToast()
}

const getCarritoLS = () => JSON.parse(localStorage.getItem("carrito")) || []

principal()