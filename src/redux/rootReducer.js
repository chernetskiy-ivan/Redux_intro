import {INCREMENT, DECREMENT, CHANGE_THEME, ENABLE_BUTTONS, DISABLE_BUTTONS} from './type'
import {combineReducers} from "redux";

function counterReducer(state = 0, action) {
    if(action.type === INCREMENT) {
        return state + 1
    } else if(action.type === DECREMENT) {
        return state - 1
    }

    return state
}

const initialThemeState = {
    value: 'light',
    disabled: false
}

function themeReducer(state = initialThemeState, action) {
    switch(action.type) {
        case CHANGE_THEME:
            //деструктуризация ES6
            return {...state, value: action.payload}
        case ENABLE_BUTTONS:
            return {...state, disabled: false}
        case DISABLE_BUTTONS:
            return {...state, disabled: true}
        default: return state
    }
}

export const rootReducer = combineReducers({
    counter: counterReducer,
    theme: themeReducer
})