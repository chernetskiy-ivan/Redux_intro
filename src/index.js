import './styles.css'
import {createStore} from "./createStore";
import {rootReducer} from "./redux/rootReducer";

const counter = document.getElementById('counter')
const addBtn = document.getElementById('add')
const subBtn = document.getElementById('sub')
const asyncBtn = document.getElementById('async')
const themeBtn = document.getElementById('theme')

//Очень важно !!!
//Мы не вызываем rootReducer а передаем как ссылку
const store = createStore(rootReducer, 0)

addBtn.addEventListener('click', () => {
    store.dispatch({type: 'INCREMENT'})
})

subBtn.addEventListener('click', () => {
store.dispatch({type: 'DECREMENT'})
})

asyncBtn.addEventListener('click', () => {

})

themeBtn.addEventListener('click', () => {
    //добавляет или удаляет класс dark в body
    //document.body.classList.toggle('dark')
})

render()
