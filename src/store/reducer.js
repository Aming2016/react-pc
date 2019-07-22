import {combineReducers} from 'redux-immutable';
import  {reducer as pagereducer} from '../page/page/store';
import  {reducer as overallreducer} from '../components/AsyncComponent/store';
const reducer = combineReducers({
    overall:overallreducer,
    page:pagereducer
})
export default reducer;