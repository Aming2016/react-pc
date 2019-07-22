import * as actionTypes from './actionTypes'
import http from '../../../http'
import {fromJS} from 'immutable'
export const GET_MYDATA = (data) =>({
    type:actionTypes.GET_MYDATA,
    data: fromJS(data)
})
export const GET_COOKIE = (data) =>({
    type:actionTypes.GET_COOKIE
})
//获取个人信息
export const getmydata = () => {
    return (dispatch) => {
        http.type().then(res => {
            dispatch(GET_MYDATA(res))
        })
    }
}