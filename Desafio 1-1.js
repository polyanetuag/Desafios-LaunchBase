
// Calcular o IMC e nível de obesidade de uma pessoa

const nome = 'Julia'
const peso = 60
const altura = 1.70

const imc = (peso / (altura * altura)).toFixed(2)

console.log(`O imc de ${nome} é igual a ${imc}.`)


if(imc < 30 ) {
    console.log(`${nome}, você está com o peso normal.`)
    
}else{
    console.log(`${nome}, você está acima do peso.`)
}


// Cálculo da aposentadoria

const nome = 'Talita'
const sexo = 'F'

const idade = 70
const contribuicao = 25

calculoContribuicao = idade + contribuicao
// Cálculo const contribuicao = idade + contribuicao

const homemPodeAposentar = sexo == 'M' && contribuicao >=35 && calculoContribuicao >= 95
const mulherPodeAposentar = sexo == 'F' && contribuicao >= 30 && calculoContribuicao >= 85

if (homemPodeAposentar || mulherPodeAposentar) {
    console.log(`${nome}, você pode se aposentar!`)
} else {
    console.log(`${nome}, você não pode se aposentar!`)
}


