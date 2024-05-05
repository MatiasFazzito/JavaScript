function principal() {
    let listadoProductos = [
        { id: 1, nombre: "Medialuna de grasa", categoria: "dulce", subcategoria: "factura", stock: 100, precio: 266, rutaimg: "medialuna_grasa.jpg" },
        { id: 2, nombre: "Medialuna de manteca", categoria: "dulce", subcategoria: "factura", stock: 100, precio: 266, rutaimg: "medialuna_manteca.jpg" },
        { id: 3, nombre: "Tortita negra", categoria: "dulce", subcategoria: "factura", stock: 100, precio: 266, rutaimg: "tortitas_negras.jpg" },
        { id: 4, nombre: "Vigilante", categoria: "dulce", subcategoria: "factura", stock: 100, precio: 266, rutaimg: "vigilante.jpg" },
        { id: 5, nombre: "Budin de pan", categoria: "dulce", subcategoria: "factura", stock: 100, precio: 266, rutaimg: "budin_pan.jpg" },
        { id: 6, nombre: "Medialuna rellena de DDL", categoria: "dulce", subcategoria: "factura", stock: 100, precio: 266, rutaimg: "medialuna_ddl.jpg" },
        { id: 7, nombre: "Medialuna rellena de Pastelera", categoria: "dulce", subcategoria: "factura", stock: 100, precio: 266, rutaimg: "medialuna_pastelera.jpg" },
        { id: 8, nombre: "Vigilante con pastelera", categoria: "dulce", subcategoria: "factura", stock: 100, precio: 266, rutaimg: "vigilante_pastelera.jpg" },
        { id: 9, nombre: "Huevo frito", categoria: "dulce", subcategoria: "factura", stock: 100, precio: 266, rutaimg: "huevo_frito.jpg" },
        { id: 10, nombre: "Bola de fraile", categoria: "dulce", subcategoria: "factura", stock: 100, precio: 266, rutaimg: "bola_de_fraile.jpg" },
        { id: 11, nombre: "Bola de fraile rellena de DDL", categoria: "dulce", subcategoria: "factura", stock: 100, precio: 266, rutaimg: "bola_de_fraile_ddl.jpg" },
        { id: 12, nombre: "Bola de fraile rellena de crema", categoria: "dulce", subcategoria: "factura", stock: 100, precio: 266, rutaimg: "bola_de_fraile_pastelera.jpg" },
        { id: 13, nombre: "Donas", categoria: "dulce", subcategoria: "factura", stock: 100, precio: 266, rutaimg: "donas.jpg" },
        { id: 14, nombre: "Budin de chocolate", categoria: "dulce", subcategoria: "factura", stock: 100, precio: 266, rutaimg: "budin_chocolate.jpg" },
        { id: 15, nombre: "Churro", categoria: "dulce", subcategoria: "factura", stock: 100, precio: 266, rutaimg: "churro.jpg" },
        { id: 16, nombre: "Churro relleno", categoria: "dulce", subcategoria: "factura", stock: 100, precio: 266, rutaimg: "churro_relleno.jpg" },
        { id: 17, nombre: "Cañoncitos", categoria: "dulce", subcategoria: "factura", stock: 100, precio: 266, rutaimg: "canoncitos.jpg" },
        { id: 18, nombre: "Boulevard", categoria: "dulce", subcategoria: "factura", stock: 100, precio: 266, rutaimg: "image-placeholder.png" }, //no encuentro foto
        { id: 19, nombre: "Ferrocarril crema y manzana", categoria: "dulce", subcategoria: "factura", stock: 100, precio: 266, rutaimg: "ferrocarril_pastelera.jpg" },
        { id: 20, nombre: "Ferrocarril membrillo y manzana", categoria: "dulce", subcategoria: "factura", stock: 100, precio: 266, rutaimg: "image-placeholder.png" }, //no encuentro foto
        { id: 21, nombre: "Manzanita", categoria: "dulce", subcategoria: "factura", stock: 100, precio: 266, rutaimg: "image-placeholder.png" },//no encuentro foto
        { id: 22, nombre: "Palmerita", categoria: "dulce", subcategoria: "factura", stock: 100, precio: 266, rutaimg: "palmeritas.jpg" },
        { id: 23, nombre: "Librito de grasa", categoria: "salado", subcategoria: "factura", stock: 100, precio: 266, rutaimg: "libritos.jpg" },
        { id: 24, nombre: "Cuernito de grasa", categoria: "salado", subcategoria: "factura", stock: 100, precio: 266, rutaimg: "cuernitos.jpg" },
        //facturas

        { id: 25, nombre: "Pastafrola de membrillo", categoria: "dulce", subcategoria: "tarta", stock: 100, precio: 6000, rutaimg: "pastafrola.jpg" },
        { id: 26, nombre: "Tarta de batata", categoria: "dulce", subcategoria: "tarta", stock: 100, precio: 6000, rutaimg: "tarta_batata.jpg" },
        { id: 27, nombre: "Tarta de dulce de leche y chocolate", categoria: "dulce", subcategoria: "tarta", stock: 100, precio: 6000, rutaimg: "tarta_ddl_choco.jpg" },
        { id: 28, nombre: "Tarta de ricota", categoria: "dulce", subcategoria: "tarta", stock: 100, precio: 6000, rutaimg: "tarta_ricota.jpg" },
        { id: 29, nombre: "Tarta de ricota y dulce de leche", categoria: "dulce", subcategoria: "tarta", stock: 100, precio: 6000, rutaimg: "tarta_ricota_ddl.jpg" },
        { id: 30, nombre: "Tarta de manzana", categoria: "dulce", subcategoria: "tarta", stock: 100, precio: 6000, rutaimg: "tarta_manzana.jpg" },
        { id: 31, nombre: "Tarta de coco y membrillo", categoria: "dulce", subcategoria: "tarta", stock: 100, precio: 6000, rutaimg: "tarta_coco_membrillo.jpg" },
        { id: 32, nombre: "Tarta de coco y dulce de leche", categoria: "dulce", subcategoria: "tarta", stock: 100, precio: 6000, rutaimg: "tarta_coco_ddl.jpg" },
        { id: 33, nombre: "Tarta de frutilla con crema", categoria: "dulce", subcategoria: "tarta", stock: 100, precio: 6000, rutaimg: "tarta_frutilla_crema.jpg" },
        { id: 34, nombre: "Tarta de frutilla con pastelera", categoria: "dulce", subcategoria: "tarta", stock: 100, precio: 6000, rutaimg: "tarta_frutilla_pastelera.jpg" },
        { id: 35, nombre: "Milhojas con dulce de leche", categoria: "dulce", subcategoria: "tarta", stock: 100, precio: 6000, rutaimg: "milhojas.jpg" },
        //tartas dulces

        { id: 36, nombre: "Torta de DDL y crema", categoria: "dulce", subcategoria: "torta", stock: 100, precio: 8000, rutaimg: "torta_ddl.jpg" },
        { id: 37, nombre: "Torta de mousse de chocolate y DDL", categoria: "dulce", subcategoria: "torta", stock: 100, precio: 8000, rutaimg: "torta_ddl_chocolate.jpg" },
        { id: 38, nombre: "Lemon pie", categoria: "dulce", subcategoria: "torta", stock: 100, precio: 8000, rutaimg: "lemon_pie.jpg" },
        //tortas

        { id: 39, nombre: "Alfajores de maicena x250g", categoria: "dulce", subcategoria: "alfajor", stock: 100, precio: 1500, rutaimg: "alfajores_maicena.jpg" },
        { id: 40, nombre: "Alfajores de chocolate x250g", categoria: "dulce", subcategoria: "alfajor", stock: 100, precio: 1500, rutaimg: "alfajor_choco.jpg" },
        { id: 41, nombre: "Alfajores de impalpable x250g", categoria: "dulce", subcategoria: "alfajor", stock: 100, precio: 1500, rutaimg: "alfajores_impalpable.jpg" },
        { id: 42, nombre: "Copitos DDL x250g", categoria: "dulce", subcategoria: "masitas", stock: 100, precio: 1500, rutaimg: "copitos_ddl.jpg" },
        { id: 43, nombre: "Coquitos x250g", categoria: "dulce", subcategoria: "masitas", stock: 100, precio: 1500, rutaimg: "coquitos_ddl.jpg" },
        { id: 44, nombre: "Rosquitas impalpable x250g", categoria: "dulce", subcategoria: "masitas", stock: 100, precio: 1500, rutaimg: "rosquitas_impalpable.jpg" },
        { id: 45, nombre: "Rosquitas de chocolate x250g", categoria: "dulce", subcategoria: "masitas", stock: 100, precio: 1500, rutaimg: "rosquitas_chocolate.jpg" },
        { id: 46, nombre: "Rosquitas de limon x250g", categoria: "dulce", subcategoria: "masitas", stock: 100, precio: 1500, rutaimg: "rosquitas_limon.jpg" },
        { id: 47, nombre: "Rosquitas de naranja x250g", categoria: "dulce", subcategoria: "masitas", stock: 100, precio: 1500, rutaimg: "rosquitas_naranja.jpg" },
        { id: 48, nombre: "Pepas x250g", categoria: "dulce", subcategoria: "masitas", stock: 100, precio: 1500, rutaimg: "pepas.jpg" },
        { id: 49, nombre: "Mosaicos con membrillo x250g", categoria: "dulce", subcategoria: "masitas", stock: 100, precio: 1500, rutaimg: "mosaicos_membrillo.jpg" },
        { id: 50, nombre: "Mosaicos con azucar negra x250g", categoria: "dulce", subcategoria: "masitas", stock: 100, precio: 1500, rutaimg: "mosaicos_azucar_negr.jpg" },
        { id: 51, nombre: "Rosquitas combinadas x250g", categoria: "dulce", subcategoria: "masitas", stock: 100, precio: 1500, rutaimg: "rosquitas_chocolate.jpg" },
        { id: 52, nombre: "Alfajores de chocolate gde", categoria: "dulce", subcategoria: "alfajor", stock: 100, precio: 1500, rutaimg: "alfajor_choco.jpg" },
        { id: 53, nombre: "Alfajores de maicena gde", categoria: "dulce", subcategoria: "alfajor", stock: 100, precio: 1500, rutaimg: "alfajores_maicena.jpg" },
        { id: 54, nombre: "Alfajores de milhojas", categoria: "dulce", subcategoria: "alfajor", stock: 100, precio: 1500, rutaimg: "alfajor_milhojas.jpg" },
        //masitas

        { id: 55, nombre: "Budin de chocolate", categoria: "dulce", subcategoria: "budin", stock: 100, precio: 2500, rutaimg: "budin_choco.jpg" },
        { id: 56, nombre: "Budin de vainilla", categoria: "dulce", subcategoria: "budin", stock: 100, precio: 2500, rutaimg: "budin_vainilla.jpg" },
        { id: 57, nombre: "Budin de limon", categoria: "dulce", subcategoria: "budin", stock: 100, precio: 2500, rutaimg: "budin_limon.jpg" },
        { id: 58, nombre: "Budin de naranja", categoria: "dulce", subcategoria: "budin", stock: 100, precio: 2500, rutaimg: "budin_naranja.jpg" },
        { id: 59, nombre: "Budin marmolado", categoria: "dulce", subcategoria: "budin", stock: 100, precio: 2500, rutaimg: "budin_marmolado.jpg" },
        //budines

        { id: 60, nombre: "Pan dulce con frutos secos", categoria: "dulce", subcategoria: "panDulce", stock: 100, precio: 6700, rutaimg: "PD_frutos_secos.jpg" },
        { id: 61, nombre: "Pan dulce con fruta seca y abrillantada", categoria: "dulce", subcategoria: "panDulce", stock: 100, precio: 6700, rutaimg: "image-placeholder.png" },//Increiblemente no encuentro foto
        { id: 62, nombre: "Pan dulce madrileño", categoria: "dulce", subcategoria: "panDulce", stock: 100, precio: 6700, rutaimg: "PD_madrileño.jpg" },
        { id: 63, nombre: "Rosca de pascua", categoria: "dulce", subcategoria: "panDulce", stock: 100, precio: 7400, rutaimg: "rosca_pascua.jpg" },
        //pan dulce

        { id: 64, nombre: "Pan frances x1kg", categoria: "panaderia", subcategoria: "pan", stock: 100, precio: 2200, rutaimg: "pan_frances.jpg" },
        { id: 65, nombre: "Miñon casero x1kg", categoria: "panaderia", subcategoria: "pan", stock: 100, precio: 100, rutaimg: "minon.jpg" },
        { id: 66, nombre: "Fonda x1kg", categoria: "panaderia", subcategoria: "pan", stock: 100, precio: 2200, rutaimg: "pan_fonda.jpg" },
        { id: 67, nombre: "Flauta x1kg", categoria: "panaderia", subcategoria: "pan", stock: 100, precio: 2200, rutaimg: "pan_flauta.jpg" },
        { id: 68, nombre: "Figacitas de manteca x1kg", categoria: "panaderia", subcategoria: "pan", stock: 100, precio: 2200, rutaimg: "figacitas_manteca.jpg" },
        { id: 69, nombre: "Figasa comun x1kg", categoria: "panaderia", subcategoria: "pan", stock: 100, precio: 2200, rutaimg: "figasa_comun.jpg" },
        { id: 70, nombre: "Pan integral x1kg", categoria: "panaderia", subcategoria: "pan", stock: 100, precio: 2200, rutaimg: "pan_integral.jpg" },
        { id: 71, nombre: "Pan integral sin sal x1kg", categoria: "panaderia", subcategoria: "pan", stock: 100, precio: 2200, rutaimg: "pan_integral.jpg" },
        { id: 72, nombre: "Pebete x1kg", categoria: "panaderia", subcategoria: "pan", stock: 100, precio: 2200, rutaimg: "pebete.jpg" },
        { id: 73, nombre: "Pebete integral x1kg", categoria: "panaderia", subcategoria: "pan", stock: 100, precio: 2200, rutaimg: "pebete_integral.jpg" },
        { id: 74, nombre: "Pan arabe x1kg", categoria: "panaderia", subcategoria: "pan", stock: 100, precio: 2200, rutaimg: "pan_arabe.jpg" },
        { id: 75, nombre: "Pan de hamburguesa x1kg", categoria: "panaderia", subcategoria: "pan", stock: 100, precio: 2200, rutaimg: "pan_hamburguesa.jpg" },
        { id: 76, nombre: "Pan de pancho x1kg", categoria: "panaderia", subcategoria: "pan", stock: 100, precio: 2200, rutaimg: "pan_pancho.jpg" },
        //pan

        { id: 77, nombre: "Sanguche de miga Jamon y Queso", categoria: "salado", subcategoria: "sangucheDeMiga", stock: 100, precio: 600, rutaimg: "sanguche_miga_JyQ.jpg" },//comun
        { id: 78, nombre: "Sanguche de miga Jamon y Tomate", categoria: "salado", subcategoria: "sangucheDeMiga", stock: 100, precio: 600, rutaimg: "sanguche_miga_JyT.jpg" },//comun
        { id: 79, nombre: "Sanguche de miga Jamon y Huevo", categoria: "salado", subcategoria: "sangucheDeMiga", stock: 100, precio: 600, rutaimg: "sanguche_miga_JyH.jpg" },//comun
        { id: 80, nombre: "Sanguche de miga Jamon y Lechuga", categoria: "salado", subcategoria: "sangucheDeMiga", stock: 100, precio: 600, rutaimg: "sanguche_miga_JyL.jpg" },//comun
        { id: 81, nombre: "Sanguche de miga Jamon y Aceituna", categoria: "salado", subcategoria: "sangucheDeMiga", stock: 100, precio: 600, rutaimg: "sanguche_miga_JyA.jpg" },//comun
        { id: 82, nombre: "Sanguche de miga Jamon y Atun", categoria: "salado", subcategoria: "sangucheDeMiga", stock: 100, precio: 800, rutaimg: "sanguche_miga_JyAtun.jpg" },//especial
        { id: 83, nombre: "Sanguche de miga Jamon y Palmito", categoria: "salado", subcategoria: "sangucheDeMiga", stock: 100, precio: 800, rutaimg: "sanguche_miga_JyP.jpg" },//especial
        { id: 84, nombre: "Sanguche de miga Jamon y Roquefort", categoria: "salado", subcategoria: "sangucheDeMiga", stock: 100, precio: 800, rutaimg: "sanguche_miga_JyR.jpg" },//especial
        { id: 85, nombre: "Sanguche de miga Jamon y Anana", categoria: "salado", subcategoria: "sangucheDeMiga", stock: 100, precio: 800, rutaimg: "sanguche_miga_JyAnana.jpg" },//especial
        { id: 86, nombre: "Sanguche de miga Crudo y Queso", categoria: "salado", subcategoria: "sangucheDeMiga", stock: 100, precio: 800, rutaimg: "sanguche_miga_CyQ.jpg" },//especial
        { id: 87, nombre: "Sanguche de miga Queso y atun", categoria: "salado", subcategoria: "sangucheDeMiga", stock: 100, precio: 800, rutaimg: "sanguche_miga_QyA.jpg" },//base de queso
        { id: 88, nombre: "Sanguche de miga Queso y huevo", categoria: "salado", subcategoria: "sangucheDeMiga", stock: 100, precio: 800, rutaimg: "sanguche_miga_QyH.jpg" },//base de queso
        { id: 89, nombre: "Sanguche de miga Queso y Tomate", categoria: "salado", subcategoria: "sangucheDeMiga", stock: 100, precio: 800, rutaimg: "sanguche_miga_QyT.jpg" },//base de queso
        { id: 90, nombre: "Sanguche de miga Queso y Berenjena", categoria: "salado", subcategoria: "sangucheDeMiga", stock: 100, precio: 800, rutaimg: "sanguche_miga_QyB.jpg" },//base de queso
        { id: 91, nombre: "Sanguche de miga Queso y choclo", categoria: "salado", subcategoria: "sangucheDeMiga", stock: 100, precio: 800, rutaimg: "sanguche_miga_QyC.jpg" },//base de queso
        { id: 92, nombre: "Sanguche de miga Queso y Pickles", categoria: "salado", subcategoria: "sangucheDeMiga", stock: 100, precio: 800, rutaimg: "sanguche_miga_QyP.jpg" },//base de queso
        { id: 93, nombre: "Sanguche de miga Queso y aceituna", categoria: "salado", subcategoria: "sangucheDeMiga", stock: 100, precio: 800, rutaimg: "sanguche_miga_QyAceituna.jpg" },//base de queso
        { id: 94, nombre: "Sanguche de miga Queso y morron", categoria: "salado", subcategoria: "sangucheDeMiga", stock: 100, precio: 800, rutaimg: "sanguche_miga_QyM.jpg" },//base de queso
        //sanguche de miga

        { id: 95, nombre: "Bizcochitos de grasa x250g", categoria: "salado", subcategoria: "galletitas", stock: 100, precio: 1500, rutaimg: "bizcochitos_grasa.jpg" },
        { id: 96, nombre: "Cuernitos x250g", categoria: "salado", subcategoria: "galletitas", stock: 100, precio: 1500, rutaimg: "cuernitos.jpg" },
        { id: 97, nombre: "Voladoras x250g", categoria: "salado", subcategoria: "galletitas", stock: 100, precio: 1500, rutaimg: "voladoras.jpg" },
        { id: 98, nombre: "Grisines x250g", categoria: "salado", subcategoria: "galletitas", stock: 100, precio: 1500, rutaimg: "grisines.jpg" },
        { id: 99, nombre: "Grisines de salvado x250g", categoria: "salado", subcategoria: "galletitas", stock: 100, precio: 1500, rutaimg: "grisines_salvado.jpg" },
        { id: 100, nombre: "Rosquita de anis x250g", categoria: "salado", subcategoria: "galletitas", stock: 100, precio: 1500, rutaimg: "grisines_salvado.jpg" },
        { id: 101, nombre: "Coquito de anis x250g", categoria: "salado", subcategoria: "galletitas", stock: 100, precio: 1500, rutaimg: "coquitos_anis.jpg" },
        { id: 102, nombre: "Palitos de anis x250g", categoria: "salado", subcategoria: "galletitas", stock: 100, precio: 1500, rutaimg: "palitos_anis.jpg" },
        { id: 103, nombre: "Galletitas sin sal x250g", categoria: "salado", subcategoria: "galletitas", stock: 100, precio: 1500, rutaimg: "galletitas_sin_sal.jpg" },
        { id: 104, nombre: "Marineras x250g", categoria: "salado", subcategoria: "galletitas", stock: 100, precio: 1500, rutaimg: "marineras.jpg" },
        { id: 105, nombre: "Galletitas de salvado x250g", categoria: "salado", subcategoria: "galletitas", stock: 100, precio: 1500, rutaimg: "galletitas_salvado.jpg" },
        { id: 106, nombre: "Galletitas de semola x250g", categoria: "salado", subcategoria: "galletitas", stock: 100, precio: 1500, rutaimg: "galletitas_semola.jpg" },
        //galletitas

        { id: 107, nombre: "Tarta de Jamon y Queso x porcion", categoria: "salado", subcategoria: "tartaSalada", stock: 100, precio: 1500, rutaimg: "tarta_JyQ.jpg" },
        { id: 108, nombre: "Tarta de Acelga x porcion", categoria: "salado", subcategoria: "tartaSalada", stock: 100, precio: 1500, rutaimg: "tarta_acelga.jpg" },
        //tartas

        { id: 109, nombre: "Sanguche de carne", categoria: "salado", subcategoria: "sanguche", stock: 100, precio: 2200, rutaimg: "sanguche_carne.jpg" },
        { id: 110, nombre: "Sanguche de pollo", categoria: "salado", subcategoria: "sanguche", stock: 100, precio: 2200, rutaimg: "sanguche_pollo.jpg" },
        { id: 111, nombre: "Sanguche de milanesa", categoria: "salado", subcategoria: "sanguche", stock: 100, precio: 2200, rutaimg: "sanguche_milanesa.jpg" },
        { id: 112, nombre: "Hamburguesa", categoria: "salado", subcategoria: "sanguche", stock: 100, precio: 2200, rutaimg: "hamburguesa.jpg" },
        { id: 113, nombre: "Sanguches de fiambre", categoria: "salado", subcategoria: "sanguche", stock: 100, precio: 600, rutaimg: "sanguche_fiambre.jpg" }, //flauta pebete figaza //jyq salame y queso cantimpalo y queso matambrede pollo y queso crudo y queso pastron y queso
        { id: 114, nombre: "Medialunas de Jamon y Queso", categoria: "salado", subcategoria: "sanguche", stock: 100, precio: 600, rutaimg: "medialuna_JyQ.jpg" },
        { id: 115, nombre: "Pletzale", categoria: "salado", subcategoria: "sanguche", stock: 100, precio: 600, rutaimg: "pletsale.jpg" }, //jyq pastron y pepino
        { id: 116, nombre: "Locateli", categoria: "salado", subcategoria: "sanguche", stock: 100, precio: 600, rutaimg: "locateli.jpg" }, //roque y queso queso y tomate
        { id: 117, nombre: "Fosforito de Jamon y Queso", categoria: "salado", subcategoria: "sanguche", stock: 100, precio: 600, rutaimg: "fosforito_JyQ.jpg" },
        { id: 118, nombre: "Chips", categoria: "salado", subcategoria: "sanguche", stock: 100, precio: 600, rutaimg: "chips.jpg" }, //jyq matambre y queso matambre y tomate
        { id: 119, nombre: "Sacramento", categoria: "salado", subcategoria: "sanguche", stock: 100, precio: 600, rutaimg: "sacramento.jpg" }, //salame y queso matambre y queso cantimpalo y queso
        { id: 120, nombre: "Salvado", categoria: "salado", subcategoria: "sanguche", stock: 100, precio: 600, rutaimg: "salvado.jpg" }, //crudo y queso crudo y tomate
        { id: 121, nombre: "Arabe completo", categoria: "salado", subcategoria: "sanguche", stock: 100, precio: 600, rutaimg: "arabe_completo.jpg" },
        { id: 122, nombre: "Arabe de atun", categoria: "salado", subcategoria: "sanguche", stock: 100, precio: 600, rutaimg: "arabe_atun.jpg" },
        //sanguches

        { id: 123, nombre: "Prepizza de Tomate", categoria: "salado", subcategoria: "prepizza", stock: 100, precio: 1500, rutaimg: "prepizza_tomate.jpg" },
        { id: 124, nombre: "Prepizza de Cebolla", categoria: "salado", subcategoria: "prepizza", stock: 100, precio: 1500, rutaimg: "prepizza_cebolla.jpg" },
        { id: 125, nombre: "Chipa x250g", categoria: "salado", subcategoria: "chipa", stock: 100, precio: 2400, rutaimg: "chipa.jpg" }
        //otros
    ]

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
    } else {
        carrito[posCarrito].subtotal = carrito[posCarrito].unidades * carrito[posCarrito].precio
        localStorage.setItem("carrito", JSON.stringify(carrito))
        renderCarrito()
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
}

function eliminarDeCarrito(e) {
    let carrito = getCarritoLS()
    let id = Number(e.target.id.substring(8))
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
    alert("Gracias por su compra! \nPodra pasar a retirarla en 15 minutos por el local! \n El total de la compra es: $" + total)

    localStorage.removeItem("carrito")
    renderCarrito([])
}

const getCarritoLS = () => JSON.parse(localStorage.getItem("carrito")) || []

principal()