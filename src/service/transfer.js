import { http } from './config'

export default {

    listar:() => {
        return http.get('transfer-actions/scheduled-transfers')
    },

    salvar:(transfer) => {
        return http.post('/transfer-actions/create-transfer',transfer)
    }

}