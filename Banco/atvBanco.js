let minhaConta = {
    agencia: 5470,
    conta: 25870,
    saldo: 20000,
    tipoConta: "poupanca",


    saldoAtual: function () {
        console.log(`Seu saldo atual é : R$ ${this.saldo}`)
    },

    deposito: function (valorADepositar) {
        this.saldo += valorADepositar
    },

    saque: function (valorARetirar) {
        this.saldo -= valorARetirar
    },

    extratoConta: function () {
        console.log("Extrato Bancário")
        console.log("--------------------")
        console.log(`Agência: ${this.agencia}`)
        console.log(`Conta: ${this.conta}`)
        console.log(`Tipo de Conta: ${this.tipoConta}`)
        console.log(`Saldo: ${this.saldo}`)
        console.log("--------------------")
    }
}

minhaConta.saldoAtual() 
minhaConta.deposito(750)
minhaConta.saque(5000) 
minhaConta.extratoConta() 