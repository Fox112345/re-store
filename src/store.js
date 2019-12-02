import { createStore, applyMiddleware } from "redux";
import reducer from "./reducers";

const logMiddleware = (dispatch) => (next) => {
    console.log(next.type);
    return dispatch(next);
};

const stringMiddleware = (dispatch) => (next) => {
    if (typeof action === 'string') {
        return dispatch ({
            type: next
        })
    }
    return dispatch(next);
};

const store = createStore(reducer, applyMiddleware(stringMiddleware, logMiddleware));

export default store;