const INITIAL_STATE = {email:'',pass:'',id:null}
import { LOGIN_SUCCESS } from './../support/constant/type'

const authReducer = (state,action) => {
    switch (action.type){
        case LOGIN_SUCCESS :
            return{...INITIAL_STATE,email:action.payload.email,id:action.payload.id}
        default:
            return INITIAL_STATE
    }
}

export default authReducer

