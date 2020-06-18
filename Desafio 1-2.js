// Crie um programa que armazena dados da empresa Rocketseat dentro de um objeto chamado empresa

const usuario = {
        nome: 'Ulisses',
        empresa:{
            nome: 'Rocketseat',
            cor: 'Roxo',
            foco: 'Programação',
            endereco: {
                rua: 'Guilherme Gemballa',
                numero: 260
            }
        }
    }

console.log(`O nome do usuário é ${usuario.nome}`)

console.log(`${usuario.nome} trabalha na ${usuario.empresa.nome}`)

console.log(`A empresa ${usuario.empresa.nome} está localizada na rua ${usuario.empresa.endereco.rua}, n. ${usuario.empresa.endereco.numero}`)



//Crie um programa com um objeto para armazenar dados de um programador, 
//como `nome`, `idade` e `tecnologias` que trabalha.

   
const tecnologias =  [
    { nome: 'C++', 
      especialidade:'Desktop'
    },
    { nome: 'Python', 
      especialidade: 'Data Science'
    },
    { nome: 'JavaScript', 
      especialidade: 'Web/Mobile' 
    }
]


const usuario = [
{   nome:'César',
    idade: 30,
    tecnologia: tecnologias[0]
},
{   nome:'Paulo',
    idade: 38,
    tecnologia: tecnologias[1]
},
{   nome:'Luana',
    idade: 34,
    tecnologia: tecnologias[2]
}
]

console.log(`${usuario[0].nome} usa ${usuario[0].tecnologia.nome}, com especialidade em ${usuario[0].tecnologia.especialidade}`)

console.log(`${usuario[1].nome} usa ${usuario[1].tecnologia.nome}, com especialidade em ${usuario[1].tecnologia.especialidade}`)

console.log(`${usuario[2].nome} usa ${usuario[2].tecnologia.nome}, com especialidade em ${usuario[2].tecnologia.especialidade}`)