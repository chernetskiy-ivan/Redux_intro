import './styles.css'
import {createStore} from "redux";
import {rootReducer} from "./redux/rootReducer";
import {increment, decrement} from './redux/actions.js'

const counter = document.getElementById('counter')
const addBtn = document.getElementById('add')
const subBtn = document.getElementById('sub')
const asyncBtn = document.getElementById('async')
const themeBtn = document.getElementById('theme')

//Очень важно !!!
//Мы не вызываем rootReducer а передаем как ссылку
const store = createStore(rootReducer, 0)

addBtn.addEventListener('click', () => {
    store.dispatch(increment())
})

subBtn.addEventListener('click', () => {
store.dispatch(decrement())
})

asyncBtn.addEventListener('click', () => {
    setTimeout( () => {
        store.dispatch(increment())
    }, 2000)
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
