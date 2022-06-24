// throw 'em vez do else ou return ' o throw returna um erro caso a requisição seja contrária não retorna uma string escrita erro
// try... catch 
// documentação ERROR https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Error

function tiposDeErros(arr, num) {
    try {
        if (!arr && !num) throw new ReferenceError('Envie os parâmetros!');

        if (typeof arr !== 'object') throw new TypeError('Array não é object ');
        if (typeof num !== 'number') throw new TypeError('Valor enviado não é um numero ');
        if (arr.length !== num) throw new RangeError('O tamanho do array é diferente do numero enviado ')
        return arr;
    }
    catch (e) {
if(e instanceof ReferenceError){
    console.log('Este erro é um ReferenceError')
    console.log(e.message)
    //console.log(e.stack)
}
else if(e instanceof TypeError){
    console.log('Este erro  é um  TypeError')
    console.log(e.message)
    
}
else if(e instanceof RangeError){
    console.log('Este erro é um RangeError')
    console.log(e.message)
  
}
else{
    console.log('Tipo de erro não esperado: ' +e  );
}
    }
}
console.log(tiposDeErros(['a', 'b', 5, 7, 3 ], 5));