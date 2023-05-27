const header = document.getElementById('header')
const title = document.getElementById('title')
const excerpt = document.getElementById('excerpt')
const profileImg = document.getElementById('profile_img')
const name = document.getElementById('name')
const date = document.getElementById('date')

const animatedBgs= document.querySelectorAll('.animated-bg')
const animatedBgTexts = document.querySelectorAll('.animated-bg-text')

setTimeout(getData, 2000)

function getData() {
    header.innerHTML = '<img src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4MTM2NTkxMg&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080" >'
    title.innerHTML = 'Lorem ipsum dolor sit amet.'
    excerpt.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, modi!'
    profileImg.innerHTML = '<img src="https://randomuser.me/api/portraits/men/45.jpg">'
    name.innerHTML = 'John Doe'
    date.innerHTML = 'May 20, 2023'

    animatedBgs.forEach(bg => bg.classList.remove('animated-bg'))
    animatedBgTexts.forEach(bg => bg.classList.remove('animated-bg-text'))
}