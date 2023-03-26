const open = document.getElementById('open');
const close = document.getElementById('close');
const container = document.querySelector('.container');
const body = document.getElementsByTagName('body')[0];



open.addEventListener('click', function() {
    container.classList.add('show-nav');
    body.classList.add('no-scroll');    
})

close.addEventListener('click', function() {
    container.classList.remove('show-nav');
    body.classList.remove('no-scroll');
})
