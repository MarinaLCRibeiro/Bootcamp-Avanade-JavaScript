//split vai separar todas as letras, ele retorna um array 
function verificaPalindromo(string) {
if (!string) return "string inexistente";

 return string.split("").reverse().join("") === string

}


//reverse() inverte os itens de um array. O primeiro elemento do array se torna o último e o último torna-se o primeiro.
// join junta os itens de um array

function verificaPalindromo2 (string){
    if(!string) return "string inexistente";
    for(let i=0;  i < string.length / 2; i++ ){
        if(string[i] !== string[string.length -1 -i]){
            return false; 
        }
        
    }
    return true
}
console.log(verificaPalindromo2("abba"))

// meu for vai para o loop até que i seja maior que a metade de itens do meu array 
// depois se o primeiro item for difere do ultimpo item do array retorna false 
// para compara o primeiro item com o ultimo o segundo item com o ante-penultimo fazemos o seguinte:
// se os idices do arrey for diferente de a quantidade total de itens  menos 1 menos a quantidade total de indices 

// ovo 