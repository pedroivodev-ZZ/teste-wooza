(function () {
    angular.module('testeWooza').config([
        '$stateProvider',
        '$urlRouterProvider',
        '$locationProvider',
        function ($stateProvider, $urlRouterProvider, $locationProvider) {
            $stateProvider.state('plano', {
                url: "/plano",
                templateUrl: "plano/plano.html"
            }).state('dados_pessoais', {
                url: "/dados_pessoais",
                templateUrl: "dados_pessoais/dados_pessoais.html"
            })
    
            $urlRouterProvider.otherwise('/plano')
            $locationProvider.hashPrefix('')
        }
    ])
})()