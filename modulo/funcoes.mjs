function mostraIdade(nome, idade) {
    return `A idade de ${nome} é ${idade}`
}

function mostraCidade(nome, cidade) {
    return `A cidade de ${nome} é ${cidade}`
}

function mostraHobby(nome, hobby) {
    return `A hobby de ${nome} é ${hobby}`
}

function numerosPares(numeros) {
    
    for (let i = 0; i < numeros.length ; i++) {
        if (numeros[i] % 2 === 0) {
            numeros[i] = `${numeros[i] }  é par`
        }
    }
    return numeros
}

export { mostraIdade, mostraCidade, mostraHobby, numerosPares };