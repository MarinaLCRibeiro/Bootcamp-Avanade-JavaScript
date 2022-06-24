// sempre q um valor ter um get e set colocamos _ na fernte para usar o nome porém não a propiedade

class contaBancaria{
    constructor(agencia, numero, tipo,  s){
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this._saldo = 0;
    }

get saldo(){
    return this._saldo;
}

set saldo(valor){
    this._saldo = valor;
}
sacar(valor){
    if(valor > this._saldo){
        return "Operação Negada "
    }
    this.saldo= this._saldo - valor;
    
   return this._saldo
    
}
depositar(valor){
    this.saldo= this._saldo + valor;
    
   return this._saldo
}
}

class ContaCorrete extends contaBancaria {
    constructor(agencia, numero,   cartaoCredito ){
        super (agencia, numero,   );
        this.tipo ='corrente';
        this._cataoCredito = cartaoCredito;
    }

get cartaoCredito(){
    return this._cataoCredito;
}

 set cartaoCredito(valor){
     this._cataoCredito = valor;
 }
}

class ContaPoupanca extends contaBancaria {
    constructor (agencia, numero){
        super (agencia, numero)
        this.tipo = 'poupanca'
    }
}

class ContaUniversitaria extends contaBancaria  {
    constructor (agencia, numero, ){
        super (agencia, numero,   )
        this.tipo = 'universitaria'
    }
    sacar(valor){
        if(valor> 500){
            return "Operaçaõ Negada"
        }
        this._saldo = this._saldo - valor;
    }
}