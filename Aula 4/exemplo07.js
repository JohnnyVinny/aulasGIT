/*IMC + peso / (altura * altura)
abaixo de 18.5 = desnutrição
entre 18.5 e 25 = peso normal
entre 25 e 30 = sobrepeso
entre 30 e 35 = Obesidade I
entre 35 e 40 = Obesidade II
acima de 40 = Obesidade III
*/

calcularIMC (100, 1.80)

function calcularIMC (argPeso, argAltura) {
    let imc 
    imc = argPeso /(argAltura ** 2)
    console.log(imc)
}