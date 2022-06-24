function substituirPares(array) {
    if(!array) return -1
    if(!array.length) return -1
    for (i = 0; i < array.length; i++) {
        if (array[i] === 0) {
            console.log("VocÊ já é zero!")
        } else if (array[i] % 2 === 0) {
            console.log (`Substituindo o valor de  ${array[i]} por 0.`)
            array[i] = 0;
        }
    }
    return array;
}

console.log(substituirPares( [1 , 7,8,10,15,20,30,6,8,3, 4 ]))
