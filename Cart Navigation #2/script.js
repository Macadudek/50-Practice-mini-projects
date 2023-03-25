const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const progress = document.getElementById('progress');
const circles = document.querySelectorAll('.circle');

let currentActive = 0;

//Event Listener that incremets our index up to 4 with each click
nextBtn.addEventListener('click', function() {
    currentActive++;
    if (currentActive > circles.length) {
        currentActive = circles.length;
    }
    update()
})

//decreases index down to 1 min
prevBtn.addEventListener('click', function() {
    currentActive--;
    if (currentActive < 1) {
        currentActive = 1;
    }
    update()
})


//checks if the index of the circle is less then currentActive if yes adds active class if its more removes it
function update() {
    circles.forEach((circle, idx) => {
        if (idx < currentActive) {
            circle.classList.add('active')
        } else {
            circle.classList.remove('active')
        }
    })

    progress.style.width = Math.floor((currentActive - 1)/(circles.length - 1) * 100) + '%';

    if (currentActive === 1) {
        prevBtn.disabled = true;
    } else if (currentActive === circles.length){
        nextBtn.disabled = true;
    } else {
        prevBtn.disabled = false;
        nextBtn.disabled = false;
    }
}
