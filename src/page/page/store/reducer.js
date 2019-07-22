import * as actionTypes from './actionTypes'
import { fromJS } from 'immutable'
const defaultState = fromJS({
    focused:'fsdfsafa'
})
export default (state=defaultState,action)=>{
    switch (action.type) {
        case actionTypes.BTN_CLICK:
            return state.set('focused','改变redux')
        default:
            return state;
    }
}