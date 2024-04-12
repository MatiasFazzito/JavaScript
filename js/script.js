let productos = [
    /*    { id: 1, nombre: "Medialuna de grasa", categoria: "dulce", subcategoria: "facturas", stock: 100, precio: 100 },
        { id: 2, nombre: "Medialuna de manteca", categoria: "dulce", subcategoria: "facturas", stock: 100, precio: 100 },
        { id: 3, nombre: "Tortita negra", categoria: "dulce", subcategoria: "facturas", stock: 100, precio: 100 },
        { id: 4, nombre: "Vigilante", categoria: "dulce", subcategoria: "facturas", stock: 100, precio: 100 },
        { id: 5, nombre: "Budin de pan", categoria: "dulce", subcategoria: "facturas", stock: 100, precio: 100 },
        { id: 6, nombre: "Medialuna rellena de DDL", categoria: "dulce", subcategoria: "facturas", stock: 100, precio: 100 },
        { id: 7, nombre: "Medialuna rellena de Pastelera", categoria: "dulce", subcategoria: "facturas", stock: 100, precio: 100 },
        { id: 8, nombre: "Vigilante con pastelera", categoria: "dulce", subcategoria: "facturas", stock: 100, precio: 100 },
        { id: 9, nombre: "Huevo frito", categoria: "dulce", subcategoria: "facturas", stock: 100, precio: 100 },
        { id: 10, nombre: "Bola de fraile", categoria: "dulce", subcategoria: "facturas", stock: 100, precio: 100 },
        { id: 11, nombre: "Bola de fraile rellena de DDL", categoria: "dulce", subcategoria: "facturas", stock: 100, precio: 100 },
        { id: 12, nombre: "Bola de fraile rellena de crema", categoria: "dulce", subcategoria: "facturas", stock: 100, precio: 100 },
        { id: 13, nombre: "Donas", categoria: "dulce", subcategoria: "facturas", stock: 100, precio: 100 },
        { id: 14, nombre: "Budin de chocolate", categoria: "dulce", subcategoria: "facturas", stock: 100, precio: 100 },
        { id: 15, nombre: "Churro", categoria: "dulce", subcategoria: "facturas", stock: 100, precio: 100 },
        { id: 16, nombre: "Churro relleno", categoria: "dulce", subcategoria: "facturas", stock: 100, precio: 100 },
        { id: 17, nombre: "Cañoncitos", categoria: "dulce", subcategoria: "facturas", stock: 100, precio: 100 },
        { id: 18, nombre: "Boulevard", categoria: "dulce", subcategoria: "facturas", stock: 100, precio: 100 },
        { id: 19, nombre: "Ferrocarril crema y manzana", categoria: "dulce", subcategoria: "facturas", stock: 100, precio: 100 },
        { id: 20, nombre: "Ferrocarril membrillo y manzana", categoria: "dulce", subcategoria: "facturas", stock: 100, precio: 100 },
        { id: 21, nombre: "Manzanita", categoria: "dulce", subcategoria: "facturas", stock: 100, precio: 100 },
        { id: 22, nombre: "Palmerita", categoria: "dulce", subcategoria: "facturas", stock: 100, precio: 100 },
        { id: 23, nombre: "Librito de grasa", categoria: "salado", subcategoria: "facturas", stock: 100, precio: 100 },
        { id: 24, nombre: "Cuernito de grasa", categoria: "salado", subcategoria: "facturas", stock: 100, precio: 100 },
        //facturas
    
        { id: 25, nombre: "Pastafrola de membrillo", categoria: "dulce", subcategoria: "tarta", stock: 100, precio: 100 },
        { id: 26, nombre: "Tarta de batata", categoria: "dulce", subcategoria: "tarta", stock: 100, precio: 100 },
        { id: 27, nombre: "Tarta de dulce de leche y chocolate", categoria: "dulce", subcategoria: "tarta", stock: 100, precio: 100 },
        { id: 28, nombre: "Tarta de ricota", categoria: "dulce", subcategoria: "tarta", stock: 100, precio: 100 },
        { id: 29, nombre: "Tarta de ricota y dulce de leche", categoria: "dulce", subcategoria: "tarta", stock: 100, precio: 100 },
        { id: 30, nombre: "Tarta de manzana", categoria: "dulce", subcategoria: "tarta", stock: 100, precio: 100 },
        { id: 31, nombre: "Tarta de coco y membrillo", categoria: "dulce", subcategoria: "tarta", stock: 100, precio: 100 },
        { id: 32, nombre: "Tarta de coco y dulce de leche", categoria: "dulce", subcategoria: "tarta", stock: 100, precio: 100 },
        { id: 33, nombre: "Tarta de frutilla con crema", categoria: "dulce", subcategoria: "tarta", stock: 100, precio: 100 },
        { id: 34, nombre: "Tarta de frutilla con pastelera", categoria: "dulce", subcategoria: "tarta", stock: 100, precio: 100 },
        { id: 35, nombre: "Milhojas con dulce de leche", categoria: "dulce", subcategoria: "tarta", stock: 100, precio: 100 },
        //tartas dulces
    
        { id: 36, nombre: "Torta de DDL y crema", categoria: "dulce", subcategoria: "torta", stock: 100, precio: 100 },
        { id: 37, nombre: "Torta de mousse de chocolate y DDL", categoria: "dulce", subcategoria: "torta", stock: 100, precio: 100 },
        { id: 38, nombre: "Lemon pie", categoria: "dulce", subcategoria: "torta", stock: 100, precio: 100 },
        //tortas
    
        { id: 39, nombre: "Alfajores de maicena", categoria: "dulce", subcategoria: "alfajor", stock: 100, precio: 100 },
        { id: 40, nombre: "Alfajores de chocolate", categoria: "dulce", subcategoria: "alfajor", stock: 100, precio: 100 },
        { id: 41, nombre: "Alfajores de impalpable", categoria: "dulce", subcategoria: "alfajor", stock: 100, precio: 100 },
        { id: 42, nombre: "Copitos DDL", categoria: "dulce", subcategoria: "masitas", stock: 100, precio: 100 },
        { id: 43, nombre: "Coquitos", categoria: "dulce", subcategoria: "masitas", stock: 100, precio: 100 },
        { id: 44, nombre: "Rosquitas impalpable", categoria: "dulce", subcategoria: "masitas", stock: 100, precio: 100 },
        { id: 45, nombre: "Rosquitas de chocolate", categoria: "dulce", subcategoria: "masitas", stock: 100, precio: 100 },
        { id: 46, nombre: "Rosquitas de limon", categoria: "dulce", subcategoria: "masitas", stock: 100, precio: 100 },
        { id: 47, nombre: "Rosquitas de naranja", categoria: "dulce", subcategoria: "masitas", stock: 100, precio: 100 },
        { id: 48, nombre: "Pepas", categoria: "dulce", subcategoria: "masitas", stock: 100, precio: 100 },
        { id: 49, nombre: "Mosaicos con membrillo", categoria: "dulce", subcategoria: "masitas", stock: 100, precio: 100 },
        { id: 50, nombre: "Mosaicos con azucar negra", categoria: "dulce", subcategoria: "masitas", stock: 100, precio: 100 },
        { id: 51, nombre: "Rosquitas combinadas", categoria: "dulce", subcategoria: "masitas", stock: 100, precio: 100 },
        { id: 52, nombre: "Alfajores de chocolate gde", categoria: "dulce", subcategoria: "alfajor", stock: 100, precio: 100 },
        { id: 53, nombre: "Alfajores de maicena gde", categoria: "dulce", subcategoria: "alfajor", stock: 100, precio: 100 },
        { id: 54, nombre: "Alfajores de milhojas", categoria: "dulce", subcategoria: "alfajor", stock: 100, precio: 100 },
        //masitas
    */
    { id: 55, nombre: "Budin de chocolate", categoria: "dulce", subcategoria: "budin", stock: 100, precio: 100 },
    { id: 56, nombre: "Budin de vainilla", categoria: "dulce", subcategoria: "budin", stock: 100, precio: 100 },
    { id: 57, nombre: "Budin de limon", categoria: "dulce", subcategoria: "budin", stock: 100, precio: 100 },
    { id: 58, nombre: "Budin de naranja", categoria: "dulce", subcategoria: "budin", stock: 100, precio: 100 },
    { id: 59, nombre: "Budin marmolado", categoria: "dulce", subcategoria: "budin", stock: 100, precio: 100 },
    //budines

    { id: 60, nombre: "Pan dulce con frutos secos", categoria: "dulce", subcategoria: "pan dulce", stock: 100, precio: 100 },
    { id: 61, nombre: "Pan dulce con fruta seca y abrillantada", categoria: "dulce", subcategoria: "pan dulce", stock: 100, precio: 100 },
    { id: 62, nombre: "Pan dulce madrileño", categoria: "dulce", subcategoria: "pan dulce", stock: 100, precio: 100 },
    { id: 63, nombre: "Rosca de pascua", categoria: "dulce", subcategoria: "pan dulce", stock: 100, precio: 100 },
    //pan dulce

    { id: 64, nombre: "Pan frances", categoria: "panaderia", subcategoria: "pan", stock: 100, precio: 100 },
    { id: 65, nombre: "Miñon casero", categoria: "panaderia", subcategoria: "pan", stock: 100, precio: 100 },
    { id: 66, nombre: "Fonda", categoria: "panaderia", subcategoria: "pan", stock: 100, precio: 100 },
    { id: 67, nombre: "Flauta", categoria: "panaderia", subcategoria: "pan", stock: 100, precio: 100 },
    { id: 68, nombre: "Figacitas de manteca", categoria: "panaderia", subcategoria: "pan", stock: 100, precio: 100 },
    { id: 69, nombre: "Figasa comun", categoria: "panaderia", subcategoria: "pan", stock: 100, precio: 100 },
    { id: 70, nombre: "Pan integral", categoria: "panaderia", subcategoria: "pan", stock: 100, precio: 100 },
    { id: 71, nombre: "Pan integral sin sal", categoria: "panaderia", subcategoria: "pan", stock: 100, precio: 100 },
    { id: 72, nombre: "Pebete", categoria: "panaderia", subcategoria: "pan", stock: 100, precio: 100 },
    { id: 73, nombre: "Pebete integral", categoria: "panaderia", subcategoria: "pan", stock: 100, precio: 100 },
    { id: 74, nombre: "Pan arabe", categoria: "panaderia", subcategoria: "pan", stock: 100, precio: 100 },
    { id: 75, nombre: "Pan de hamburguesa", categoria: "panaderia", subcategoria: "pan", stock: 100, precio: 100 },
    { id: 76, nombre: "Pan de pancho", categoria: "panaderia", subcategoria: "pan", stock: 100, precio: 100 },
    //pan

    /*    { id: 77, nombre: "Sanguche de miga Jamon y Queso", categoria: "sanguche de miga", subcategoria: "comun", stock: 100, precio: 100 },
        { id: 78, nombre: "Sanguche de miga Jamon y Tomate", categoria: "sanguche de miga", subcategoria: "comun", stock: 100, precio: 100 },
        { id: 79, nombre: "Sanguche de miga Jamon y Huevo", categoria: "sanguche de miga", subcategoria: "comun", stock: 100, precio: 100 },
        { id: 80, nombre: "Sanguche de miga Jamon y Lechuga", categoria: "sanguche de miga", subcategoria: "comun", stock: 100, precio: 100 },
        { id: 81, nombre: "Sanguche de miga Jamon y Aceituna", categoria: "sanguche de miga", subcategoria: "comun", stock: 100, precio: 100 },
        { id: 82, nombre: "Sanguche de miga Jamon y Atun", categoria: "sanguche de miga", subcategoria: "especial", stock: 100, precio: 100 },
        { id: 83, nombre: "Sanguche de miga Jamon y Palmito", categoria: "sanguche de miga", subcategoria: "especial", stock: 100, precio: 100 },
        { id: 84, nombre: "Sanguche de miga Jamon y Roquefort", categoria: "sanguche de miga", subcategoria: "especial", stock: 100, precio: 100 },
        { id: 85, nombre: "Sanguche de miga Jamon y Anana", categoria: "sanguche de miga", subcategoria: "especial", stock: 100, precio: 100 },
        { id: 86, nombre: "Sanguche de miga Crudo y Queso", categoria: "sanguche de miga", subcategoria: "especial", stock: 100, precio: 100 },
        { id: 87, nombre: "Sanguche de miga Queso y atun", categoria: "sanguche de miga", subcategoria: "base de queso", stock: 100, precio: 100 },
        { id: 88, nombre: "Sanguche de miga Queso y huevo", categoria: "sanguche de miga", subcategoria: "base de queso", stock: 100, precio: 100 },
        { id: 89, nombre: "Sanguche de miga Queso y Tomate", categoria: "sanguche de miga", subcategoria: "base de queso", stock: 100, precio: 100 },
        { id: 90, nombre: "Sanguche de miga Queso y Berenjena", categoria: "sanguche de miga", subcategoria: "base de queso", stock: 100, precio: 100 },
        { id: 91, nombre: "Sanguche de miga Queso y choclo", categoria: "sanguche de miga", subcategoria: "base de queso", stock: 100, precio: 100 },
        { id: 92, nombre: "Sanguche de miga Queso y Pickles", categoria: "sanguche de miga", subcategoria: "base de queso", stock: 100, precio: 100 },
        { id: 93, nombre: "Sanguche de miga Queso y aceituna", categoria: "sanguche de miga", subcategoria: "base de queso", stock: 100, precio: 100 },
        { id: 94, nombre: "Sanguche de miga Queso y morron", categoria: "sanguche de miga", subcategoria: "base de queso", stock: 100, precio: 100 },
        //sanguche de miga
    
        { id: 95, nombre: "Bizcochitos de grasa", categoria: "salado", subcategoria: "galletitas", stock: 100, precio: 100 },
        { id: 96, nombre: "Cuernitos", categoria: "salado", subcategoria: "galletitas", stock: 100, precio: 100 },
        { id: 97, nombre: "Voladoras", categoria: "salado", subcategoria: "galletitas", stock: 100, precio: 100 },
        { id: 98, nombre: "Grisines", categoria: "salado", subcategoria: "galletitas", stock: 100, precio: 100 },
        { id: 99, nombre: "Grisines de salvado", categoria: "salado", subcategoria: "galletitas", stock: 100, precio: 100 },
        { id: 100, nombre: "Rosquita de anis", categoria: "salado", subcategoria: "galletitas", stock: 100, precio: 100 },
        { id: 101, nombre: "Coquito de anis", categoria: "salado", subcategoria: "galletitas", stock: 100, precio: 100 },
        { id: 102, nombre: "Palitos de anis", categoria: "salado", subcategoria: "galletitas", stock: 100, precio: 100 },
        { id: 103, nombre: "Galletitas sin sal", categoria: "salado", subcategoria: "galletitas", stock: 100, precio: 100 },
        { id: 104, nombre: "Marineras", categoria: "salado", subcategoria: "galletitas", stock: 100, precio: 100 },
        { id: 105, nombre: "Galletitas de salvado", categoria: "salado", subcategoria: "galletitas", stock: 100, precio: 100 },
        { id: 106, nombre: "Galletitas de semola", categoria: "salado", subcategoria: "galletitas", stock: 100, precio: 100 },
        //galletitas
    
        { id: 107, nombre: "Tarta de Jamon y Queso", categoria: "salado", subcategoria: "tarta", stock: 100, precio: 100 },
        { id: 108, nombre: "Tarta de Acelga", categoria: "salado", subcategoria: "tarta", stock: 100, precio: 100 },
        //tartas
    */
    { id: 109, nombre: "Sanguche de carne", categoria: "salado", subcategoria: "sanguche", stock: 100, precio: 100 },
    { id: 110, nombre: "Sanguche de pollo", categoria: "salado", subcategoria: "sanguche", stock: 100, precio: 100 },
    { id: 111, nombre: "Sanguche de milanesa", categoria: "salado", subcategoria: "sanguche", stock: 100, precio: 100 },
    { id: 112, nombre: "Hamburguesa", categoria: "salado", subcategoria: "sanguche", stock: 100, precio: 100 },
    { id: 113, nombre: "Sanguches de fiambre", categoria: "salado", subcategoria: "sanguche", stock: 100, precio: 100 }, //flauta pebete figaza //jyq salame y queso cantimpalo y queso matambrede pollo y queso crudo y queso pastron y queso
    { id: 114, nombre: "Medialunas de Jamon y Queso", categoria: "salado", subcategoria: "sanguche", stock: 100, precio: 100 },
    { id: 115, nombre: "Pletzale", categoria: "salado", subcategoria: "sanguche", stock: 100, precio: 100 }, //jyq pastron y pepino
    { id: 116, nombre: "Locateli", categoria: "salado", subcategoria: "sanguche", stock: 100, precio: 100 }, //roque y queso queso y tomate
    { id: 117, nombre: "Fosforito de Jamon y Queso", categoria: "salado", subcategoria: "sanguche", stock: 100, precio: 100 },
    { id: 118, nombre: "Chips", categoria: "salado", subcategoria: "sanguche", stock: 100, precio: 100 }, //jyq matambre y queso matambre y tomate
    { id: 119, nombre: "Sacramento", categoria: "salado", subcategoria: "sanguche", stock: 100, precio: 100 }, //salame y queso matambre y queso cantimpalo y queso
    { id: 120, nombre: "Salvado", categoria: "salado", subcategoria: "sanguche", stock: 100, precio: 100 }, //crudo y queso crudo y tomate
    { id: 121, nombre: "Arabe completo", categoria: "salado", subcategoria: "sanguche", stock: 100, precio: 100 },
    { id: 122, nombre: "Arabe de atun", categoria: "salado", subcategoria: "sanguche", stock: 100, precio: 100 },
    //sanguches

    { id: 123, nombre: "Prepizza de Tomate", categoria: "salado", subcategoria: "prepizza", stock: 100, precio: 100 },
    { id: 124, nombre: "Prepizza de Cebolla", categoria: "salado", subcategoria: "prepizza", stock: 100, precio: 100 },
    { id: 125, nombre: "Chipa", categoria: "salado", subcategoria: "chipa", stock: 100, precio: 100 },
    //otros
]

//listado de productos
function listar(lista, propiedad, propiedad2) {
    return lista.map(producto => producto[propiedad] + " - " + producto[propiedad2]).join ("\n") 
}
let listaProductos = listar(productos, "nombre", "precio")
alert(listaProductos);

//Filtro
let categoriaIngresada = prompt("Que tipo de producto esta buscando? \n salado \n dulce \n sanguche de miga \n panaderia").toLowerCase()
let productosFiltrados = filtro(productos, "categoria")

function filtro(lista, propiedad) {
    return lista.filter(el => el[propiedad].toLowerCase() === categoriaIngresada)
}
console.log(productosFiltrados);

//ordenar por nombre
function ordenar(lista, propiedad, descendente) {
    lista.sort((a, b) => {
        if (a[propiedad] > b[propiedad]) {
            return 1
        } else if (a[propiedad] < b[propiedad]) {
            return -1
        } else {
            return 0
        }
    })
    if (descendente) {
        lista.reverse()
    }
}
ordenar(productos, "nombre", false)
console.log(productos)


function menu() {
    let opcion
    do {
        
    } while (opcion !== 0);


}