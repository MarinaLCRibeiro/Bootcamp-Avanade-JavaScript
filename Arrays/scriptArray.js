//O que são vetores ou arrays 
//let pode ser qualquer uma 
let array = ['string', 1 , true];
console.log(array);

//array pode criar vários tipos de dados 
let exemploArray = ['string',1, true, ['array1'], ['array2'], ['array 3'], ['array4']  ];
console.log(exemploArray[0])

/* forEach() - interra um array;
push() - add item no final do array;
pop()- remove item  ultimo do array;
shift()- remove item no início do array;
unshift()- add item no início do array;
indexOf()- retorna o índice de um valor;
splice()- remove ou substitui um item pelo índice;
slice()- retorna uma parte de um array existente; */


array.forEach(function(item,index){console.log(item, index)});
//item no final do array
array.push('novo item ') 
console.log(array)
//remove item no ultimo do array 

array.pop(array)
console.log(array)

//shift: tirar item do inicio do array 
array.shift(array);
console.log(array);

//unshift = adiciona um item no incio do array 
array.unshift('Gato');
console.log(array);

//indexOf retorna o indice dentro do array 

console.log(array.indexOf(true));
//remove ou substitui um item por um indice
/*array.splice(0,1)
console.log(array)*/
array.unshift('macarrão', 'batata', false, 5);
let novoArray = array.slice(1,5);
console.log(novoArray);

let object = {
    string1: 'scring1.1',
    number: 1,
    boolean: true,
    arrayOb: ['arrayObj'],
    objectInterno: { objetoInterno1: 'vida'},

};
// acessar item do objeto (nome da vairavel com o objeto . item q quero acessar )
console.log(object.objectInterno.objetoInterno1);

//desestruturação do objeto 
var scring2= object.string1;
console.log (scring2);

var arrayDesconstruindo = object.arrayOb;
console.log(arrayDesconstruindo);

//outra forma de desestruturação
var {arrayOb, objectInterno} = object;
console.log(arrayOb , objectInterno);
