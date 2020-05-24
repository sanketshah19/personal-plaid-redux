import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import authReducers from "./reducers/authReducers";
import errorReducers from "./reducers/errorReducers";
import accountReducers from "./reducers/accountReducers";

const store = createStore(combineReducers({
    auth: authReducers,
    errors: errorReducers,
    plaid: accountReducers
}), applyMiddleware(thunk))

export default store