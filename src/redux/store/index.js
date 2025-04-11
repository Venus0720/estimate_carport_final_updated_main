import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import reducer from '../reducers/reducer';
import loginReducer from '../reducers/loginReducer';
import quoteReducer from '../reducers/quoteReducer';
import orderReducer from '../reducers/orderReducer';
import eventReducer from '../reducers/eventReducer';
import componentReducer from '../reducers/componentReducer';
import leadcustomerReducer from '../reducers/leadcustomerReducer';
import priceUpdateReducer from '../reducers/priceUpdateReducer';
import orderExtrasReducer from '../reducers/orderExtrasReducer';

const rootReducer = combineReducers({
    reducer,
    loginReducer,
    quoteReducer,
    orderReducer,
    orderExtrasReducer,
    priceUpdateReducer,
    leadcustomerReducer,
    eventReducer,
    componentReducer,
 
})
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
