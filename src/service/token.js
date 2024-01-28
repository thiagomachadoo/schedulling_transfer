import { http } from './config'

export default {

    registrar:(token) => {
        return http.post('/auth/register', token)
    },

    pegarToken:(token) => {
        return http.post('/auth/login', token)
    }

}