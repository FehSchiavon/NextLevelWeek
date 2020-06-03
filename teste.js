// var tipoDeMedalha = ["ouro", "prata", "bronze", "nada", "nada"];
// var posicaoDeMedalha = [0, 1, 2, 3, 4];

// function medalhaDeAcordoComPosto(numero) {
//     if (numero == posicaoDeMedalha.indexOf(numero)) {
//         return tipoDeMedalha.indexOf(numero);
//     }
// }


var tipoDeMedalha = ["ouro", "prata", "bronze", "nada", "nada"];

function medalhaDeAcordoComPosto (numero) {
    if (numero == 0) {
        console.log("Zero")
    } else if (numero == 1) {
        console.log(tipoDeMedalha[numero - 1])
    } else if (numero == 2) {
        console.log(tipoDeMedalha[numero - 1])
    } else if (numero == 3) {
        console.log(tipoDeMedalha[numero - 1])
    } else if (numero == 4) {
        console.log(tipoDeMedalha[numero - 1])
    } else if (numero == 5) {
        console.log(tipoDeMedalha[numero - 1])
    }
}

medalhaDeAcordoComPosto(1)
medalhaDeAcordoComPosto(2)
medalhaDeAcordoComPosto(3)
medalhaDeAcordoComPosto(4)
medalhaDeAcordoComPosto(5)


