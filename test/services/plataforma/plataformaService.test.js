describe('servicos de plataforma', () => {
    let plataformaService = null
    beforeEach(() => {
        angular.mock.module('testeWooza')

        inject((_plataformaService_) => {
            plataformaService = _plataformaService_
        })
    })

    it('executar listar', () => {
        let isfakeHttpCalled = false
        const fakeHttp = {
            get: () =>{
                isfakeHttpCalled = true
                return Promise.resolve({
                    data: { plataformas:[] }
                })
            }
        }

        plataformaService.listar(fakeHttp)

        expect(isfakeHttpCalled).toBe(true)
    })

    it('erro listar sem $http', () => {
        expect(plataformaService.listar()).rejects.toThrow(
            'Dependência $http não informada'
        )
    })
})