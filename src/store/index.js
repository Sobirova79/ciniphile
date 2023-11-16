import { createStore } from "redux";

const initialState = {
    data:[]
}

function testReducer(state = initialState,action) {
    return state
}

export const store = createStore(testReducer)