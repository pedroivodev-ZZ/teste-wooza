(function () {
    angular.module('testeWooza')
    .service('plataformaService',
        function () {
            this.listar = function ($http) {
                if (!$http) return Promise.reject(new Error('Dependência $http não informada'))

                return $http.get('http://private-59658d-celulardireto2017.apiary-mock.com/plataformas')
                .then(({data}) => data)
            }
        }
    )
})()