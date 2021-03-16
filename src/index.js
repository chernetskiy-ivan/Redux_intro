import './styles.css'

const counter = document.getElementById('counter')

let state = 0

function render() {
    counter.textContent = state.toString() //пишу toString для того чтобы вебшторм не ругался и явно привожу к строке
}

render()
