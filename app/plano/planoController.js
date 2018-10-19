(function () {
    let _timeout = null

    function selectChange(func, $timeout) {
        return function () {
            if(_timeout){ //cancel se já houver um timeout em processamento
                $timeout.cancel(_timeout)
            }

            //timeout para contornar o delay na atualização do model
            _timeout = $timeout(() => {
                func()

                _timeout = null
            }, 500)
        }
    }

    angular.module('testeWooza').controller('PlanoController', [
        'plataformaService', 'planoService', 'sharedService',
        '$http', '$timeout', '$location',
        function (plataformaService, planoService, sharedService, $http, $timeout, $location) {
            const vm = this

            vm.plataforma = ''
            vm.plataformas = [{ sku: '', nome: '----' }]

            vm.plano = ''
            vm.planos = [{ sku: '', franquia: '----' }]

            plataformaService.listar($http)
            .then(({plataformas}) => {
                vm.plataformas = [{ sku: '', nome: '----' }].concat(plataformas)
            })
            .catch((err) => {
                alert('Falha ao carregar as plataformas')
                console.error(err)
            })
    
            vm.continuar = () => {
                $location.path('/dados_pessoais')
            }
    
            vm.plataformaChange = selectChange(() => {
                vm.planoSelecionado = sharedService.planoEscolhido = null

                if (vm.plataforma != '') {
                    planoService.listarPorPlataforma($http, vm.plataforma)
                    .then(({planos}) => {
                        vm.planos = [{ sku: '', franquia: '----' }].concat(planos)
                    })
                    .catch((err) => {
                        alert('Falha ao carregar os planos')
                        console.error(err)
                    })
                } else {
                    vm.planos = [{ sku: '', franquia: '----' }]
                }
            }, $timeout)

            vm.planoChange = selectChange(() => {
                if (vm.plano != '') {
                    vm.planos.forEach(element => {
                        if (vm.plano == element.sku) {
                            vm.planoSelecionado = element

                            sharedService.planoEscolhido = {
                                sku: element.sku,
                                franquia: element.franquia,
                                valor: element.valor,
                                aparelho: element.aparelho ? {
                                    nome: element.aparelho.nome,
                                    valor: element.aparelho.valor,
                                    numeroParcelas: element.aparelho.numeroParcelas,
                                    valorParcela: element.aparelho.valorParcela
                                } : null,
                                ativo: element.ativo
                            }
                        }
                    })
                } else {
                    vm.planoSelecionado = sharedService.planoEscolhido = null
                }
            }, $timeout)
        }
    ])
})()