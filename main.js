let slides = document.getElementsByClassName('review')[0].getElementsByClassName('flex')[0].getElementsByClassName('slides-container')[0].getElementsByClassName('slide');
let index = 0;


function next(){
    slides[index].classList.remove('active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('active');
}

function prev(){
    slides[index].classList.remove('active');
    index = (index - 1 + slides.length) % slides.length;
    slides[index].classList.add('active');
}