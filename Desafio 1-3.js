// Crie um programa que armazena um array de usuários(objetos)
// Cada usuário tem um nome e suas tecnologias(novo array)


const usuarios = [
    { nome: "Miriam" , 
      tecnologias: ["HTML", "CSS"] 
    },
    { nome: "Felipe" , 
      tecnologias: [ "JavaScript", "CSS"] 
    },
    { nome: "Mateus" , 
      tecnologias: ["HTML", "Node.js"] 
    }
];


function imprimirTrabalho(usuariosRecebido) {
    let i = 0
    for (let i = 0 ; i < usuariosRecebido.length; i++) {
        console.log(`${usuariosRecebido[i].nome} trabalha com ${usuariosRecebido[i].tecnologias}.`)
    }
}

imprimirTrabalho(usuarios)   //chamar função


// Crie uma função que recebe os dados de um objeto de usuario 
// e retorna SE o usuario que trabalha com CSS ou não => Deve retornar um boolean (true/false)
   

function trabalhaComCSS(usuarios) {
    for(let usuario of usuarios) {

        for(let tecnologia of usuario.tecnologias) {
            if(tecnologia == 'CSS') {
                console.log(`O usuário ${usuario.nome} trabalha com CSS`)
            }
        }
    }
}
trabalhaComCSS(usuarios)


/*==== SOMA DE DESPESAS E RECEITAS ====*/

//Crie um programa que calcula a soma das receitas e despesas de usuários
// e no fim retorna o saldo(receitas-despesas)


const pessoas = [
    {
        nome: "Salvio",
        receitas: [115.3, 48.7, 98.3, 14.5],
        despesas: [85.3, 13.5, 19.9]
    },
    {
        nome: "Marcio",
        receitas: [24.6, 214.3, 45.3],
        despesas: [185.3, 12.1, 120.0]
    },
    {
        nome: "Lucia",
        receitas: [9.8, 120.3, 340.2, 45.3],
        despesas: [450.2, 29.9]
    }
]

function calculaSaldo(pessoas) {
    
}