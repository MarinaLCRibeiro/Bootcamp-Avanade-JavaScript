var resultadoTela = ""

for (coluna = 1; coluna <= 7; coluna++) {
    for (linha = 1; linha <= 39; linha++) {
        if (coluna == 1 || coluna == 7)  resultadoTela += "-" ;
else if (linha == 1 || linha == 39)  resultadoTela += '|' ;
else  resultadoTela += ' '
    };
    resultadoTela += '\n';
}
console.log(resultadoTela);