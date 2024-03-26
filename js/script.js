function menu() {
    let opcion

    do {
        opcion = Number(prompt("Elije una opcion \n 1 Avanzar hacia adelante \n 2 Avanzar a la derecha \n 3 Avanzar  a la izquierda \n 0 Para salir"))
        if (opcion === 1) {
            alert("Diste un paso hacia adelante")
        } else if (opcion === 2) {
            alert("Diste un paso a la derecha")
        } else if (opcion === 3) {
            alert("Diste un paso a la izquierda")
        }
    } while (opcion !== 0);


}

menu()