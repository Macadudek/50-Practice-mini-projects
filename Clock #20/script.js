const hourEl = document.querySelector('.hour')
const minuteEl = document.querySelector('.minute')
const secondEl = document.querySelector('.second')
const timeEl = document.querySelector('.time')
const dateEl = document.querySelector('.date')
const toggle = document.querySelector('.toggle')


const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];

toggle.addEventListener('click', (e) => {
    const html = document.querySelector('html');
    if (html.classList.contains('dark')) {
        html.classList.remove('dark')
        e.target.innerHTML = 'Dark mode'
    } else {
        html.classList.add('dark')
        e.target.innerHTML = 'Light mode'
    }
})

function setTime() {
    const time = new Date()
    const month = time.getMonth()
    const day = time.getDay()
    const date = time.getDate()
    const hour = time.getHours()
    const hoursForClock = hour % 24
    const minutes = time.getMinutes()
    const seconds = time.getSeconds()

    hourEl.style.transform = `translate(-50%, -100%) rotate(${hour*30}deg)`
    minuteEl.style.transform = `translate(-50%, -100%) rotate(${minutes * 6 + hour * 360}deg)`
    secondEl.style.transform = `translate(-50%, -100%) rotate(${seconds * 6 + minutes * 360 + hour * 60 * 360}deg)`

    timeEl.innerHTML = `${hoursForClock}:${minutes < 10 ? `0${minutes}` : minutes}`
    dateEl.innerHTML = `${days[day]}, ${months[month]} <span class="circle">${date}</span>`
}

const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min
}

setTime()

setInterval(setTime, 1000)