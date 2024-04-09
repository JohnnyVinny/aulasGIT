class conta {
    constructor(){
        this.Saldo =0;
    }

    get Saldo(){return this.saldo;}
    set Saldo(pSaldo){this.saldo = pSaldo;}
}

var obj_conta = new conta();
console.log(obj_conta.saldo);