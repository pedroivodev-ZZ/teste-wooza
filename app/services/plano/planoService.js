(function () {
    angular.module('testeWooza')
    .service('planoService',
        function () {
            this.listarPorPlataforma = function ($http, skuPlataforma) {
                if (!$http) return Promise.reject(new Error('Dependência $http não informada'))

                if (!skuPlataforma) return Promise.reject(new Error('Parâmetro não informado'))

                return (
                    $http
                    .get(`http://private-59658d-celulardireto2017.apiary-mock.com/planos/${skuPlataforma}`)
                    .then(({data}) => data)
                )
            }
        }
    )
})()