/*IMC + peso / (altura * altura)
abaixo de 18.5 = desnutrição
entre 18.5 e 25 = peso normal
entre 25 e 30 = sobrepeso
entre 30 e 35 = Obesidade I
entre 35 e 40 = Obesidade II
acima de 40 = Obesidade III
*/

let retornoIMC
retornoIMC = calcularIMC (100, 1.80)
console.log(retornoIMC)
classificarIMC (retornoIMC)

function calcularIMC (argPeso, argAltura) {
    
    imc = argPeso /(argAltura ** 2)
    console.log(imc)
    return imc
}

function classificarIMC (argIMC) {
    if(argIMC < 18.5){
        console.log('Desnutrição')
    }
    
    else if(argIMC < 25){
        console.log('peso normal')
    }

    else if(argIMC < 30){
        console.log("sobrepeso")
    }

    else if(argIMC < 35){
        console.log("Obesidade I")
    }

    else if(argIMC < 40){
        console.log("Obesidade II")
    }

    else if(argIMC > 40){
        console.log("Obesidade III")
    }
}
