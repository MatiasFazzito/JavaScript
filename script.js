let opcion
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
} while (opcion != 0)