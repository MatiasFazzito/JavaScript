principal()

//Menu de opciones
function principal() {
    let productos = [
        { id: 1, nombre: "Medialuna de grasa", categoria: "dulce", subcategoria: "factura", stock: 100, precio: 266 },
        { id: 2, nombre: "Medialuna de manteca", categoria: "dulce", subcategoria: "factura", stock: 100, precio: 266 },
        { id: 3, nombre: "Tortita negra", categoria: "dulce", subcategoria: "factura", stock: 100, precio: 266 },
        { id: 4, nombre: "Vigilante", categoria: "dulce", subcategoria: "factura", stock: 100, precio: 266 },
        { id: 5, nombre: "Budin de pan", categoria: "dulce", subcategoria: "factura", stock: 100, precio: 266 },
        { id: 6, nombre: "Medialuna rellena de DDL", categoria: "dulce", subcategoria: "factura", stock: 100, precio: 266 },
        { id: 7, nombre: "Medialuna rellena de Pastelera", categoria: "dulce", subcategoria: "factura", stock: 100, precio: 266 },
        { id: 8, nombre: "Vigilante con pastelera", categoria: "dulce", subcategoria: "factura", stock: 100, precio: 266 },
        { id: 9, nombre: "Huevo frito", categoria: "dulce", subcategoria: "factura", stock: 100, precio: 266 },
        { id: 10, nombre: "Bola de fraile", categoria: "dulce", subcategoria: "factura", stock: 100, precio: 266 },
        { id: 11, nombre: "Bola de fraile rellena de DDL", categoria: "dulce", subcategoria: "factura", stock: 100, precio: 266 },
        { id: 12, nombre: "Bola de fraile rellena de crema", categoria: "dulce", subcategoria: "factura", stock: 100, precio: 266 },
        { id: 13, nombre: "Donas", categoria: "dulce", subcategoria: "factura", stock: 100, precio: 266 },
        { id: 14, nombre: "Budin de chocolate", categoria: "dulce", subcategoria: "factura", stock: 100, precio: 266 },
        { id: 15, nombre: "Churro", categoria: "dulce", subcategoria: "factura", stock: 100, precio: 266 },
        { id: 16, nombre: "Churro relleno", categoria: "dulce", subcategoria: "factura", stock: 100, precio: 266 },
        { id: 17, nombre: "Cañoncitos", categoria: "dulce", subcategoria: "factura", stock: 100, precio: 266 },
        { id: 18, nombre: "Boulevard", categoria: "dulce", subcategoria: "factura", stock: 100, precio: 266 },
        { id: 19, nombre: "Ferrocarril crema y manzana", categoria: "dulce", subcategoria: "factura", stock: 100, precio: 266 },
        { id: 20, nombre: "Ferrocarril membrillo y manzana", categoria: "dulce", subcategoria: "factura", stock: 100, precio: 266 },
        { id: 21, nombre: "Manzanita", categoria: "dulce", subcategoria: "factura", stock: 100, precio: 266 },
        { id: 22, nombre: "Palmerita", categoria: "dulce", subcategoria: "factura", stock: 100, precio: 266 },
        { id: 23, nombre: "Librito de grasa", categoria: "salado", subcategoria: "factura", stock: 100, precio: 266 },
        { id: 24, nombre: "Cuernito de grasa", categoria: "salado", subcategoria: "factura", stock: 100, precio: 266 },
        //facturas

        { id: 25, nombre: "Pastafrola de membrillo", categoria: "dulce", subcategoria: "tarta", stock: 100, precio: 6000 },
        { id: 26, nombre: "Tarta de batata", categoria: "dulce", subcategoria: "tarta", stock: 100, precio: 6000 },
        { id: 27, nombre: "Tarta de dulce de leche y chocolate", categoria: "dulce", subcategoria: "tarta", stock: 100, precio: 6000 },
        { id: 28, nombre: "Tarta de ricota", categoria: "dulce", subcategoria: "tarta", stock: 100, precio: 6000 },
        { id: 29, nombre: "Tarta de ricota y dulce de leche", categoria: "dulce", subcategoria: "tarta", stock: 100, precio: 6000 },
        { id: 30, nombre: "Tarta de manzana", categoria: "dulce", subcategoria: "tarta", stock: 100, precio: 6000 },
        { id: 31, nombre: "Tarta de coco y membrillo", categoria: "dulce", subcategoria: "tarta", stock: 100, precio: 6000 },
        { id: 32, nombre: "Tarta de coco y dulce de leche", categoria: "dulce", subcategoria: "tarta", stock: 100, precio: 6000 },
        { id: 33, nombre: "Tarta de frutilla con crema", categoria: "dulce", subcategoria: "tarta", stock: 100, precio: 6000 },
        { id: 34, nombre: "Tarta de frutilla con pastelera", categoria: "dulce", subcategoria: "tarta", stock: 100, precio: 6000 },
        { id: 35, nombre: "Milhojas con dulce de leche", categoria: "dulce", subcategoria: "tarta", stock: 100, precio: 6000 },
        //tartas dulces

        { id: 36, nombre: "Torta de DDL y crema", categoria: "dulce", subcategoria: "torta", stock: 100, precio: 8000 },
        { id: 37, nombre: "Torta de mousse de chocolate y DDL", categoria: "dulce", subcategoria: "torta", stock: 100, precio: 8000 },
        { id: 38, nombre: "Lemon pie", categoria: "dulce", subcategoria: "torta", stock: 100, precio: 8000 },
        //tortas

        { id: 39, nombre: "Alfajores de maicena x250g", categoria: "dulce", subcategoria: "alfajor", stock: 100, precio: 1500 },
        { id: 40, nombre: "Alfajores de chocolate x250g", categoria: "dulce", subcategoria: "alfajor", stock: 100, precio: 1500 },
        { id: 41, nombre: "Alfajores de impalpable x250g", categoria: "dulce", subcategoria: "alfajor", stock: 100, precio: 1500 },
        { id: 42, nombre: "Copitos DDL x250g", categoria: "dulce", subcategoria: "masitas", stock: 100, precio: 1500 },
        { id: 43, nombre: "Coquitos x250g", categoria: "dulce", subcategoria: "masitas", stock: 100, precio: 1500 },
        { id: 44, nombre: "Rosquitas impalpable x250g", categoria: "dulce", subcategoria: "masitas", stock: 100, precio: 1500 },
        { id: 45, nombre: "Rosquitas de chocolate x250g", categoria: "dulce", subcategoria: "masitas", stock: 100, precio: 1500 },
        { id: 46, nombre: "Rosquitas de limon x250g", categoria: "dulce", subcategoria: "masitas", stock: 100, precio: 1500 },
        { id: 47, nombre: "Rosquitas de naranja x250g", categoria: "dulce", subcategoria: "masitas", stock: 100, precio: 1500 },
        { id: 48, nombre: "Pepas x250g", categoria: "dulce", subcategoria: "masitas", stock: 100, precio: 1500 },
        { id: 49, nombre: "Mosaicos con membrillo x250g", categoria: "dulce", subcategoria: "masitas", stock: 100, precio: 1500 },
        { id: 50, nombre: "Mosaicos con azucar negra x250g", categoria: "dulce", subcategoria: "masitas", stock: 100, precio: 1500 },
        { id: 51, nombre: "Rosquitas combinadas x250g", categoria: "dulce", subcategoria: "masitas", stock: 100, precio: 1500 },
        { id: 52, nombre: "Alfajores de chocolate gde", categoria: "dulce", subcategoria: "alfajor", stock: 100, precio: 1500 },
        { id: 53, nombre: "Alfajores de maicena gde", categoria: "dulce", subcategoria: "alfajor", stock: 100, precio: 1500 },
        { id: 54, nombre: "Alfajores de milhojas", categoria: "dulce", subcategoria: "alfajor", stock: 100, precio: 1500 },
        //masitas

        { id: 55, nombre: "Budin de chocolate", categoria: "dulce", subcategoria: "budin", stock: 100, precio: 2500 },
        { id: 56, nombre: "Budin de vainilla", categoria: "dulce", subcategoria: "budin", stock: 100, precio: 2500 },
        { id: 57, nombre: "Budin de limon", categoria: "dulce", subcategoria: "budin", stock: 100, precio: 2500 },
        { id: 58, nombre: "Budin de naranja", categoria: "dulce", subcategoria: "budin", stock: 100, precio: 2500 },
        { id: 59, nombre: "Budin marmolado", categoria: "dulce", subcategoria: "budin", stock: 100, precio: 2500 },
        //budines

        { id: 60, nombre: "Pan dulce con frutos secos", categoria: "dulce", subcategoria: "pan dulce", stock: 100, precio: 6700 },
        { id: 61, nombre: "Pan dulce con fruta seca y abrillantada", categoria: "dulce", subcategoria: "pan dulce", stock: 100, precio: 6700 },
        { id: 62, nombre: "Pan dulce madrileño", categoria: "dulce", subcategoria: "pan dulce", stock: 100, precio: 6700 },
        { id: 63, nombre: "Rosca de pascua", categoria: "dulce", subcategoria: "pan dulce", stock: 100, precio: 7400 },
        //pan dulce

        { id: 64, nombre: "Pan frances x1kg", categoria: "panaderia", subcategoria: "pan", stock: 100, precio: 2200 },
        { id: 65, nombre: "Miñon casero x1kg", categoria: "panaderia", subcategoria: "pan", stock: 100, precio: 100 },
        { id: 66, nombre: "Fonda x1kg", categoria: "panaderia", subcategoria: "pan", stock: 100, precio: 2200 },
        { id: 67, nombre: "Flauta x1kg", categoria: "panaderia", subcategoria: "pan", stock: 100, precio: 2200 },
        { id: 68, nombre: "Figacitas de manteca x1kg", categoria: "panaderia", subcategoria: "pan", stock: 100, precio: 2200 },
        { id: 69, nombre: "Figasa comun x1kg", categoria: "panaderia", subcategoria: "pan", stock: 100, precio: 2200 },
        { id: 70, nombre: "Pan integral x1kg", categoria: "panaderia", subcategoria: "pan", stock: 100, precio: 2200 },
        { id: 71, nombre: "Pan integral sin sal x1kg", categoria: "panaderia", subcategoria: "pan", stock: 100, precio: 2200 },
        { id: 72, nombre: "Pebete x1kg", categoria: "panaderia", subcategoria: "pan", stock: 100, precio: 2200 },
        { id: 73, nombre: "Pebete integral x1kg", categoria: "panaderia", subcategoria: "pan", stock: 100, precio: 2200 },
        { id: 74, nombre: "Pan arabe x1kg", categoria: "panaderia", subcategoria: "pan", stock: 100, precio: 2200 },
        { id: 75, nombre: "Pan de hamburguesa x1kg", categoria: "panaderia", subcategoria: "pan", stock: 100, precio: 2200 },
        { id: 76, nombre: "Pan de pancho x1kg", categoria: "panaderia", subcategoria: "pan", stock: 100, precio: 2200 },
        //pan

        { id: 77, nombre: "Sanguche de miga Jamon y Queso", categoria: "salado", subcategoria: "sanguche de miga", stock: 100, precio: 600 },//comun
        { id: 78, nombre: "Sanguche de miga Jamon y Tomate", categoria: "salado", subcategoria: "sanguche de miga", stock: 100, precio: 600 },//comun
        { id: 79, nombre: "Sanguche de miga Jamon y Huevo", categoria: "salado", subcategoria: "sanguche de miga", stock: 100, precio: 600 },//comun
        { id: 80, nombre: "Sanguche de miga Jamon y Lechuga", categoria: "salado", subcategoria: "sanguche de miga", stock: 100, precio: 600 },//comun
        { id: 81, nombre: "Sanguche de miga Jamon y Aceituna", categoria: "salado", subcategoria: "sanguche de miga", stock: 100, precio: 600 },//comun
        { id: 82, nombre: "Sanguche de miga Jamon y Atun", categoria: "salado", subcategoria: "sanguche de miga", stock: 100, precio: 800 },//especial
        { id: 83, nombre: "Sanguche de miga Jamon y Palmito", categoria: "salado", subcategoria: "sanguche de miga", stock: 100, precio: 800 },//especial
        { id: 84, nombre: "Sanguche de miga Jamon y Roquefort", categoria: "salado", subcategoria: "sanguche de miga", stock: 100, precio: 800 },//especial
        { id: 85, nombre: "Sanguche de miga Jamon y Anana", categoria: "salado", subcategoria: "sanguche de miga", stock: 100, precio: 800 },//especial
        { id: 86, nombre: "Sanguche de miga Crudo y Queso", categoria: "salado", subcategoria: "sanguche de miga", stock: 100, precio: 800 },//especial
        { id: 87, nombre: "Sanguche de miga Queso y atun", categoria: "salado", subcategoria: "sanguche de miga", stock: 100, precio: 800 },//base de queso
        { id: 88, nombre: "Sanguche de miga Queso y huevo", categoria: "salado", subcategoria: "sanguche de miga", stock: 100, precio: 800 },//base de queso
        { id: 89, nombre: "Sanguche de miga Queso y Tomate", categoria: "salado", subcategoria: "sanguche de miga", stock: 100, precio: 800 },//base de queso
        { id: 90, nombre: "Sanguche de miga Queso y Berenjena", categoria: "salado", subcategoria: "sanguche de miga", stock: 100, precio: 800 },//base de queso
        { id: 91, nombre: "Sanguche de miga Queso y choclo", categoria: "salado", subcategoria: "sanguche de miga", stock: 100, precio: 800 },//base de queso
        { id: 92, nombre: "Sanguche de miga Queso y Pickles", categoria: "salado", subcategoria: "sanguche de miga", stock: 100, precio: 800 },//base de queso
        { id: 93, nombre: "Sanguche de miga Queso y aceituna", categoria: "salado", subcategoria: "sanguche de miga", stock: 100, precio: 800 },//base de queso
        { id: 94, nombre: "Sanguche de miga Queso y morron", categoria: "salado", subcategoria: "sanguche de miga", stock: 100, precio: 800 },//base de queso
        //sanguche de miga

        { id: 95, nombre: "Bizcochitos de grasa x250g", categoria: "salado", subcategoria: "galletitas", stock: 100, precio: 1500 },
        { id: 96, nombre: "Cuernitos x250g", categoria: "salado", subcategoria: "galletitas", stock: 100, precio: 1500 },
        { id: 97, nombre: "Voladoras x250g", categoria: "salado", subcategoria: "galletitas", stock: 100, precio: 1500 },
        { id: 98, nombre: "Grisines x250g", categoria: "salado", subcategoria: "galletitas", stock: 100, precio: 1500 },
        { id: 99, nombre: "Grisines de salvado x250g", categoria: "salado", subcategoria: "galletitas", stock: 100, precio: 1500 },
        { id: 100, nombre: "Rosquita de anis x250g", categoria: "salado", subcategoria: "galletitas", stock: 100, precio: 1500 },
        { id: 101, nombre: "Coquito de anis x250g", categoria: "salado", subcategoria: "galletitas", stock: 100, precio: 1500 },
        { id: 102, nombre: "Palitos de anis x250g", categoria: "salado", subcategoria: "galletitas", stock: 100, precio: 1500 },
        { id: 103, nombre: "Galletitas sin sal x250g", categoria: "salado", subcategoria: "galletitas", stock: 100, precio: 1500 },
        { id: 104, nombre: "Marineras x250g", categoria: "salado", subcategoria: "galletitas", stock: 100, precio: 1500 },
        { id: 105, nombre: "Galletitas de salvado x250g", categoria: "salado", subcategoria: "galletitas", stock: 100, precio: 1500 },
        { id: 106, nombre: "Galletitas de semola x250g", categoria: "salado", subcategoria: "galletitas", stock: 100, precio: 1500 },
        //galletitas

        { id: 107, nombre: "Tarta de Jamon y Queso x porcion", categoria: "salado", subcategoria: "tarta salada", stock: 100, precio: 1500 },
        { id: 108, nombre: "Tarta de Acelga x porcion", categoria: "salado", subcategoria: "tarta salada", stock: 100, precio: 1500 },
        //tartas

        { id: 109, nombre: "Sanguche de carne", categoria: "salado", subcategoria: "sanguche", stock: 100, precio: 2200 },
        { id: 110, nombre: "Sanguche de pollo", categoria: "salado", subcategoria: "sanguche", stock: 100, precio: 2200 },
        { id: 111, nombre: "Sanguche de milanesa", categoria: "salado", subcategoria: "sanguche", stock: 100, precio: 2200 },
        { id: 112, nombre: "Hamburguesa", categoria: "salado", subcategoria: "sanguche", stock: 100, precio: 2200 },
        { id: 113, nombre: "Sanguches de fiambre", categoria: "salado", subcategoria: "sanguche", stock: 100, precio: 600 }, //flauta pebete figaza //jyq salame y queso cantimpalo y queso matambrede pollo y queso crudo y queso pastron y queso
        { id: 114, nombre: "Medialunas de Jamon y Queso", categoria: "salado", subcategoria: "sanguche", stock: 100, precio: 600 },
        { id: 115, nombre: "Pletzale", categoria: "salado", subcategoria: "sanguche", stock: 100, precio: 600 }, //jyq pastron y pepino
        { id: 116, nombre: "Locateli", categoria: "salado", subcategoria: "sanguche", stock: 100, precio: 600 }, //roque y queso queso y tomate
        { id: 117, nombre: "Fosforito de Jamon y Queso", categoria: "salado", subcategoria: "sanguche", stock: 100, precio: 600 },
        { id: 118, nombre: "Chips", categoria: "salado", subcategoria: "sanguche", stock: 100, precio: 600 }, //jyq matambre y queso matambre y tomate
        { id: 119, nombre: "Sacramento", categoria: "salado", subcategoria: "sanguche", stock: 100, precio: 600 }, //salame y queso matambre y queso cantimpalo y queso
        { id: 120, nombre: "Salvado", categoria: "salado", subcategoria: "sanguche", stock: 100, precio: 600 }, //crudo y queso crudo y tomate
        { id: 121, nombre: "Arabe completo", categoria: "salado", subcategoria: "sanguche", stock: 100, precio: 600 },
        { id: 122, nombre: "Arabe de atun", categoria: "salado", subcategoria: "sanguche", stock: 100, precio: 600 },
        //sanguches

        { id: 123, nombre: "Prepizza de Tomate", categoria: "salado", subcategoria: "prepizza", stock: 100, precio: 1500 },
        { id: 124, nombre: "Prepizza de Cebolla", categoria: "salado", subcategoria: "prepizza", stock: 100, precio: 1500 },
        { id: 125, nombre: "Chipa x250g", categoria: "salado", subcategoria: "chipa", stock: 100, precio: 2400 },
        //otros
    ]

    let carrito = []
    let opcion
    do {
        opcion = Number(prompt("Ingrese una opcion \n 1 - Ver listado de productos completo \n 2 - filtrar productos por categoria\n 0- Finalizar compra\n Su compra lleva acumulado: $" + carrito.reduce((acum, producto) => acum + producto.subtotal, 0)))
        if (opcion == 1) {
            agregarProductoCarrito(productos, carrito)
        } else if (opcion == 2) {
            filtrar(productos, carrito)
        } else if (opcion !== 0) {
            alert("Opcion no valida")
        }
    } while (opcion !== 0);
    alert("Valor total de la compra: $" + carrito.reduce((acum, el) => acum + el.subtotal, 0) + "\nSu carrito:\n" + listar(carrito, "id", "nombre", "unidades") + "\nGracias por elegirnos")
}

//Filtro ok
function filtrar(productos, carrito) {
    let pedido = prompt("Ingrese categoria (0 - para volver al menu anterior) \n Factura - Tarta - Torta - Alfajor - Masitas - Budin - Pan dulce \n Pan - Sanguche de miga - Galletitas - Tarta salada \n Sanguche - Prepizza - Chipa").toLowerCase()
    let validacion = productos.find(el => el.subcategoria === pedido)
    let productosFiltrados = productos.filter(el => el.subcategoria === pedido)
    if (validacion) {
        agregarProductoCarrito(productosFiltrados, carrito)
    } else {
        alert("Categoria no encontrada")
    }
}
//Agregar al carrito ok
function agregarProductoCarrito(productos, carrito) {
    let opcion
    do {
        opcion = Number(prompt("Elija el producto a agregar (Indique ID - 0 para volver al menu anterior)\n" + listar(productos, "id", "nombre", "precio")))
        let productoBuscado = productos.find(el => el.id === opcion)
        let productoEnCarrito = carrito.findIndex(el => el.id === opcion)
        if (productoBuscado) {
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
            alert("Producto agregado al carrito")
        } else if (opcion !== 0) {
            alert("Id no valido")
        }
    } while (opcion !== 0);
}
//listado de productos ok
function listar(listado, propiedad, propiedad1, propiedad2) {
    return listado.map(el => el[propiedad] + ": " + el[propiedad1] + " - " + el[propiedad2]).join("\n")
}
