// JUST TRYING OUT A COLOR FUNCTION USING HSL
// ch = 100
// function win() {
//     for (let i = 0; i <= 360; i += 2) {
//         setTimeout(() => {
//             console.log(`hsl(${i},50%,50%)`)
//             document.body.style.backgroundColor = `hsl(${i}, 63%, 48%)`
//         }, ch)
//         ch += 100;
//     }
// }

const p = {
    score: 0,
    button: document.querySelector('#p1b'),
    display: document.querySelector('#p1'),
}

const o = {
    score: 0,
    button: document.querySelector('#p2b'),
    display: document.querySelector('#p2'),
}

let isGameOver = false
let winS = 4 // TO GAME POINT
const resb = document.querySelector('#res') // RESET BUTTON SELECTED
const select = document.querySelector('#Selection') //SELECT OPTION INPUT RECEIVER

function scores(p, o) {
    if (!isGameOver) {
        p.score += 1
        if (p.score == winS) {
            isGameOver = true
            p.button.disabled = true
            o.button.disabled = true
            p.display.classList.add('has-text-success')
            o.display.classList.add('has-text-danger')
        }
        p.display.textContent = p.score
    }
}

p.button.addEventListener('click', function() {
    scores(p, o)
})
o.button.addEventListener('click', function() {
    scores(o, p)
})

select.addEventListener('change', function() {
    winS = parseInt(this.value)
    reset()
})

resb.addEventListener('click', reset)

function reset() {
    isGameOver = false
    for (let a of[p, o]) {
        a.score = 0
        a.display.textContent = 0
        a.display.classList.remove('has-text-success', 'has-text-danger')
        a.button.disabled = false
    }
}

// const colorchange = (color, change) => {
//     return new Promise((res, rej) => {
//         setTimeout(() => {
//             document.body.style.backgroundColor = color
//         }, change)
//     })
// }