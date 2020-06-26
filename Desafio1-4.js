//Crie um programa para realizar operações bancárias na conta de um usuário

const user = {
    name: 'Vitor',
    transactions:[],
    balance: 0
}
//console.log(usuario)

//Adicionar transações

// Crie uma função para adicionar uma nova transação no array de transações de um usuário

function createTransaction(transaction) { 
    user.transactions.push(transaction)

    if(transaction.type === 'credit') {
        user.balance = user.balance + transaction.value
    } else {
        user.balance = user.balance - transaction.value
    }
}

// Relatórios 

// Crie uma função que recebe como parâmetro o tipo de transação,
// percorra as transações de usuário e retorne o objeto de maior transação
function getHigherTransactionByType(type) {
    let higherTransaction
    let higherValue = 0

    for(let transaction of user.transactions) {
        if(transaction.type == type && transaction.value > higherValue) {
            higherValue = transaction.value
            higherTransaction = transaction
        }
    }
    return higherTransaction
}

//Crie uma função que retorne o valor médio das transações de um usuário, independente do seu tipo
function getAverageTransactionValue() {
    let sum = 0

    for(let transaction of user.transactions) {
        sum += transaction.value
    }

    return sum / user.transactions.length
}

//Crie uma função que retorna o número de transações de cada tipo(credit/debit)
function getTransactionsCount() {
    let count = {
        credit: 0,
        debit: 0
    }
    for(let transaction of user.transactions) {
        if(transaction.type === 'credit')
            count.credit++
        else 
            count.debit++
     }

     return count
}

createTransaction({type: 'credit', value: 50})
createTransaction({type: 'credit', value: 120})
createTransaction({type: 'credit', value: 150})
createTransaction({type: 'debit', value: 80})
createTransaction({type: 'debit', value: 30})
createTransaction({type: 'debit', value: 135})

console.log(user.balance)

console.log(getHigherTransactionByType('credit'))
console.log(getHigherTransactionByType('debit'))

console.log(getAverageTransactionValue())

console.log(getTransactionsCount())