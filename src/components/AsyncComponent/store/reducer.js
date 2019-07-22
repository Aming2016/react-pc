import * as actionTypes from './actionTypes'
import { fromJS} from 'immutable'
import cookies from 'js-cookie'
const defaultState = fromJS({
    token:"",
    mydata:"",
})
export default (state=defaultState,action)=>{
    switch (action.type) {
        case actionTypes.GET_COOKIE:
                cookies.set('token', '123');
            if(cookies.get('token')){
                return state.set("token",cookies.get('token'))
            }
        case actionTypes.GET_MYDATA:
                return state.set("mydata",action.data)
        default:
            return state;
    }
}