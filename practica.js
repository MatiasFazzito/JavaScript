/*function pasarAMayus(nom, ape) {
    return nom.toUpperCase() + " " + ape.toUpperCase()
}

let resultado = pasarAMayus("Ruben", "Perez")
alert(resultado)

function menu() {
    let opcion
    let total = 0
    do {
        opcion = Number(prompt("Ingrese opcion \n 1 Manzanas $1500 \n 2 Naranjas $500 \n 3 Bananas $2500 \n 0 Salir"))
        if (opcion === 1) {
            total = agregaraACarrito("manzanas", 1500, total)
        } else if (opcion === 2) {
            total = agregaraACarrito("Naranjas", 500, total)
        } else if (opcion === 3) {
            total = agregaraACarrito("Bananas", 2500, total)
        }
    } while (opcion != 0)

    alert("El total de la compra es de " + total)
}

function agregaraACarrito(fruta, precioKg, total) {
    let cantidad = Number(prompt("Ingrese cantidad en gramos"))
    let subtotal = precioKg * cantidad / 1000
    total = total + subtotal
    alert("Se agregaron " + fruta + " al carrito por un total de " + subtotal)
    alert("El total hasta el momento es " + total)

    return total
}

menu()*/

function sumar(num1, num2) {
    return num1 + num2
}

function restar(num1, num2) {
    return num1 - num2
}
function multiplicar(num1, num2) {
    return num1 * num2
}
function dividir(num1, num2) {
    if (num2 === 0) {
        return alert("No se puede dividir por 0")
    } else {
        return num1 / num2
    }
}


function calculadora(primerNumero, segundoNumero, operacion) {
    switch (operacion) {
        case "+":
            return sumar(primerNumero, segundoNumero)
            break
        case "-":
            return restar(primerNumero, segundoNumero)
            break
        case "*":
            return multiplicar(primerNumero, segundoNumero)
            break
        case "/":
            return dividir(primerNumero, segundoNumero)
            break
        default:
            return 0
            break
    }
}

console.log(calculadora(10, 5, "+"))

/*let opcion
let posicion = 0
let slimeHP = 5
let centauroHP = 10
let hP = 10


do {
    let opcion = prompt("Ingrese una opcion\n 1 Para moverse hacia adelante\n 2 Para moverse hacia la izquierda\n 3 Para moverse hacia la derecha\n 4 Para atacar\n 5 Para pasar el turno\n 6 Para utilizar una pocion\n 0 Para salir\n Tu vida es: " + hP)

    if (opcion == 1 && posicion != 6 && posicion != 11) {
        alert("Diste un paso adelante")
        posicion++
    } else if (opcion == 2 && posicion != 6 && posicion != 11) {
        alert("Diste un paso a la izquierda")
        posicion++
    } else if (opcion == 3 && posicion != 6 && posicion != 11) {
        alert("Diste un paso a la derecha")
        posicion++
    } else if (opcion == 4 && posicion != 6 && posicion != 11) {
        alert("DAtacaste! \nAl aire")
    } else if (opcion == 4 && posicion == 6) {
        alert("Atacaste!")
        slimeHP--
    } else if (opcion == 4 && posicion == 11) {
        alert("Atacaste!")
        centauroHP--
    } else if (opcion == 5 && posicion != 6 && posicion != 11) {
        alert("Pasaste el turno")
    } else if (opcion === 5 && posicion == 6 && posicion == 11) {
        alert("Pasaste el turno \nTe han atacado!")
        hP--
    } else if (opcion == 1 && posicion == 6) {
        alert("Te han atacado!")
        hP--
    } else if (opcion == 2 && posicion == 6) {
        alert("Te han atacado!")
        hP--
    } else if (opcion == 3 && posicion == 6) {
        alert("Te han atacado!")
        hP--
    } else if (opcion == 5 && posicion == 6) {
        alert("Te han atacado!")
        hP--
    } else if (opcion == 1 && posicion == 11) {
        alert("Te han atacado!")
        hP - 2
    } else if (opcion == 1 && posicion == 11) {
        alert("Te han atacado!")
        hP - 2
    } else if (opcion == 1 && posicion == 11) {
        alert("Te han atacado!")
        hP - 2
    } else if (opcion == 1 && posicion == 11) {
        alert("Te han atacado!")
        hP - 2
    } else if (opcion == 6) {
        alert("Tomaste una pocion")
        hP = 10
    } else if (opcion == 0) {
        break
    }

    if (posicion == 5) {
        alert("Encontraste un Slime agresivo! HP = 5")
        posicion++
    }
    if (posicion == 10) {
        alert("Encontrasste un centauro agresivo! HP = 10")
        posicion++
    }
    if (slimeHP == 0) {
        alert("Slime ha muerto!")
        slimeHP = 5
        posicion++
    }
    if (centauroHP == 0) {
        alert("Centauro ha muerto!")
        centauroHP = 10
        posicion = 0
    }
    if (isNaN(opcion) || opcion > 6 || opcion < 0) {
        alert("Debe ingresar una opcion valida")
    }
    if (hP == 0) {
        break
    }
    console.log(posicion)
    console.log(slimeHP)
    console.log(centauroHP)
} while (opcion != 0)*/