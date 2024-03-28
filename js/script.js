function ataque(danio, niv) {
    return danio * niv
}

function menu() {
    let opcion
    let posicion = 0
    let hP = 10
    let exp = 0
    let arma = 1
    let nivel = 1
    let slimeHP = 5
    let centauroHP = 10

    do {
        opcion = Number(prompt("Elije una opcion \n 1 Avanzar hacia adelante \n 2 Avanzar a la derecha \n 3 Avanzar  a la izquierda \n 4 Atacar \n 5 Pasar el turno \n 6 Tomar una pocion \n 0 Para salir \n Tu vida es: " + hP))
        if (opcion === 1 && posicion != 6 && posicion != 11) {
            alert("Diste un paso hacia adelante")
            posicion++
        } else if (opcion === 2 && posicion != 6 && posicion != 11) {
            alert("Diste un paso a la derecha")
            posicion++
        } else if (opcion === 3 && posicion != 6 && posicion != 11) {
            alert("Diste un paso a la izquierda")
            posicion++
        } else if (opcion === 4 && posicion == 6 && posicion != 11) {
            alert("Atacaste!")
            let danioTotal = ataque(arma, nivel)
            slimeHP = slimeHP - danioTotal
        } else if (opcion == 4 && posicion == 11) {
            alert("Atacaste!")
            let danioTotal = ataque(arma, nivel)
            centauroHP = centauroHP - danioTotal
        } else if (opcion === 4 && posicion != 6 && posicion != 11) {
            alert("Atacaste \n Al aire")
        } else if (opcion == 5 && posicion != 6 && posicion != 11) {
            alert("Pasaste el turno")
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
            alert("Pasaste el turno \nTe han atacado!")
            hP--
        } else if (opcion == 1 && posicion == 11) {
            alert("Te han atacado!")
            hP = hP - 2
        } else if (opcion == 1 && posicion == 11) {
            alert("Te han atacado!")
            hP = hP - 2
        } else if (opcion == 1 && posicion == 11) {
            alert("Te han atacado!")
            hP = hP - 2
        } else if (opcion == 1 && posicion == 11) {
            alert("Te han atacado!")
            hP = hP - 2
        } else if (opcion == 6) {
            alert("Tomaste una pocion magica!")
            hP = 10
        }

        if (posicion == 5) {
            alert("Encontraste un slime agresivo! HP = 5")
            posicion++
        }
        if (posicion == 10) {
            alert("Encontraste un centauro agresivo! HP = 10")
            posicion++
        }
        if (slimeHP <= 0) {
            alert("Slime ha muerto! exp + 100")
            exp = exp + 100
            slimeHP = 5
            posicion++
        }
        if (centauroHP <= 0) {
            alert("Centauro ha muerto! exp + 100")
            exp = exp + 100
            centauroHP = 10
            posicion = 0
        }
        if (exp == 100) {
            alert("Alcanzaste nivel 2")
            nivel++
            exp++
        } else if (exp == 301) {
            alert("Alcanzaste nivel 3")
            nivel++
            exp++
        }
        if (isNaN(opcion) || opcion > 6 || opcion < 0) {
            alert("Debe ingresar una opcion valida")
        }
        if (hP <= 0) {
            break
        }
        console.log("Slime " + slimeHP)
        console.log("Centauro " + centauroHP)
        console.log("Posicion " + posicion)
        console.log("exp " + exp)

    } while (opcion !== 0)
    alert("Game over, intentalo denuevo recargando la pagina")
}

menu()