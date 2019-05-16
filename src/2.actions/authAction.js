import {LOGIN_SUCCESS} from './../support/constant/type'

export const onLoginSuccess = (email,uid) => {
    return{
        type : LOGIN_SUCCESS,
        payload : {
            email,
            id : uid
        }
    }
}