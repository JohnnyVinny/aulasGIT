class Pessoa {
    constructor(pNome, pEndereco,){
        this.Nome = pNome;
        this.Endereco = pEndereco;
    }

    get Nome(){return this.Nome;}
    set Nome(pNome){this.nome = pNome;}

    get Endereco(){return this.Endereco;}
    set Endereco(pEndereco){this.endereco = pEndereco;}

    imprimir(){
        return "Nome: " + this.nome;
    }
}

class Juridica extends Pessoa {
    constructor(pNome, pEndereco, pCnpj, pRs){
        super(pNome, pEndereco);
        this.cnpj = pCnpj;
        this.rs = pRs;
    }

    get Cnpj(){return this.Cnpj;}
    set Cnpj(pCnpj){this.cnpj = pCnpj;}

    get Rs(){return this.Rs;}
    set Rs(pRs){this.rs = pRs;}

    imprimir(){
        return super.imprimir() + "\nCnpj: " + this.cnpj + "\nRazão Social: " + this.rs;
    }
}

class Fisica extends Pessoa {
    constructor(pNome, pEndereco, pCpf, pDtN){
        super(pNome, pEndereco);
        this.cpf = pCpf;
        this.dtn = pDtN;
    }

    get Cpf(){return this.Cpf;}
    set Cpf(pCpf){this.cpf = pCpf;}

    get DtN(){return this.DtN;}
    set DtN(pDtN){this.dtn = pDtN;}

    imprimir(){
        return super.imprimir() + "\nCpf: " + this.cpf + "\nData Nascimento: " + this.dtn;
    }
}

var juridica = new Juridica("Luiz", "R. Ulices", "12.345.678/0001-90", "ADS CS");
console.log(juridica.imprimir());

var fisica = new Fisica("Fabio", "R. Cabral", "123.456.789-00", "02/04/2024");
console.log(fisica.imprimir());