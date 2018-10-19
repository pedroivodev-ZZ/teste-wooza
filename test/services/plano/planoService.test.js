describe('servicos plano', () => {
    let planoService = null
    beforeEach(() => {
        angular.mock.module('testeWooza')

        inject((_planoService_) => {
            planoService = _planoService_
        })
    })

    it('erro listarPorPlataforma sem $http', () => {
        expect(planoService.listarPorPlataforma()).rejects.toThrow(
            'Dependência $http não informada'
        )
    })

    it('erro listarPorPlataforma sem skuPlataforma', () => {
        const fakeHttp = {}
        expect(planoService.listarPorPlataforma(fakeHttp)).rejects.toThrow(
            'Parâmetro não informado'
        )
    })

    it('executar listarPorPlataforma com url correta', () => {
        let urlRequisicao = ''
        const fakeHttp = {
            get: (url) => {
                urlRequisicao = url

                return Promise.resolve({data:{}})
            }
        }

        planoService.listarPorPlataforma(fakeHttp, 'TBT01')

        expect(urlRequisicao).toBe(
            'http://private-59658d-celulardireto2017.apiary-mock.com/planos/TBT01'
        )
    })
})