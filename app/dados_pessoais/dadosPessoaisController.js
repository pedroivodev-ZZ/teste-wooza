(function () {
    angular.module('testeWooza').controller('DadosPessoaisController', [
        'sharedService', '$location',
        function (sharedService, $location) {
            const vm = this
            vm.dadosPessoais = {}

            vm.voltar = () => {
                $location.path('/plano')
            }

            vm.finalizar = () => {
                const { nome, cpf, dtNasc, email, telefone } = vm.dadosPessoais
                const { franquia, valor } = sharedService.planoEscolhido
                const aparelho = !sharedService.planoEscolhido.aparelho ? {} : sharedService.planoEscolhido.aparelho

                console.log('Nome: ', nome)
                console.log('Data de nascimento: ', dtNasc)
                console.log('CPF: ', cpf)
                console.log('E-mail: ', email)
                console.log('Telefone: ', telefone)

                console.log('---------------')

                console.log('Franquia: ', franquia)
                console.log('Valor: R$', valor)

                console.log('Nome aparelho: ', aparelho.nome)
                console.log('Valor aparelho: ', aparelho.valor)
                console.log('Nº parcelas: ', aparelho.numeroParcelas)
                console.log('Valor da parcela: R$', aparelho.valorParcela)
                
            }
        }
    ])
})()