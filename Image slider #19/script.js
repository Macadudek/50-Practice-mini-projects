const body = document.body
const slides = document.querySelectorAll('.slide')
const leftBtn = document.getElementsByClassName('left-arrow')[0]
const rightBtn = document.getElementsByClassName('right-arrow')[0]

let activeSlide = 0

rightBtn.addEventListener('click', () => {
    activeSlide++

    if (activeSlide > slides.length - 1) {
        activeSlide = 0
    }

    changeBgOnBody()
    setActiveSlide()
})


leftBtn.addEventListener('click', () => {
    activeSlide--

    if (activeSlide < 0) {
        activeSlide = slides.length - 1
    }

    changeBgOnBody()
    setActiveSlide()
})

changeBgOnBody()

function changeBgOnBody() {
    body.style.backgroundImage = slides[activeSlide].style.backgroundImage
}


function setActiveSlide() {
    slides.forEach((slide) => {
        slide.classList.remove('active')

        slides[activeSlide].classList.add('active')
    })
}



