class Funcionario {
    constructor(pNome, pSalario,){
        this.Nome = pNome;
        this.Salario = pSalario;
    }

    get Nome(){return this.Nome;}
    set Nome(pNome){this.nome = pNome;}

    get Salario(){return this.Salario;}
    set Salario(pSalario){this.salario = pSalario;}

    calcularSalario(){

    }
}

class Vendedor extends Funcionario {
    constructor(pNome, pSalario, pComissao){
        super(pNome, pSalario);
        this.comissao = pComissao;
    }

    get Comissao(){return this.Comissao;}
    set Comissao(pComissao){this.comissao = pComissao;}

    calcularSalario(){
        return this.salario + this.comissao;
    }
}

var vendedor = new Vendedor("Luiz", 1100, 150);
console.log(vendedor.calcularSalario());