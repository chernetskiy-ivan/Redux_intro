import './styles.css'
import {createStore, applyMiddleware} from "redux";
import {rootReducer} from "./redux/rootReducer";
import {increment, decrement, asyncIncrement} from './redux/actions.js'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
//объект thunk является объектом middleware

const counter = document.getElementById('counter')
const addBtn = document.getElementById('add')
const subBtn = document.getElementById('sub')
const asyncBtn = document.getElementById('async')
const themeBtn = document.getElementById('theme')

//Пишем свой middleware
//Базовый пример middleware
// function logger(state) {
//     return function(nex) {
//         return function(action) {
//             console.log('State', state)
//             console.log('Action', action)
//             return nex(action)
//         }
//     }
// }

//Очень важно !!!
//Мы не вызываем rootReducer а передаем как ссылку
const store = createStore(
    rootReducer,
    applyMiddleware(thunk, logger)
)

addBtn.addEventListener('click', () => {
    store.dispatch(increment())
})

subBtn.addEventListener('click', () => {
    store.dispatch(decrement())
})

asyncBtn.addEventListener('click', () => {
    store.dispatch(asyncIncrement())
})

store.subscribe(() => {
    const state = store.getState()

    counter.textContent = state.toString()
})

//чтобы поумолчанию выводился 0
store.dispatch({type: '__INIT_APPLICATION_'})

themeBtn.addEventListener('click', () => {
    //добавляет или удаляет класс dark в body
    //document.body.classList.toggle('dark')
})

render()
