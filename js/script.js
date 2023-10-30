let img = document.querySelectorAll('.logo img');
let text = document.querySelectorAll('.text');

for( let i = 0; i < img.length; i++) {
    img[i].addEventListener('click', (e) => {
        for( let i = 0; i < img.length; i++) {
            img[i].classList.remove('active')
            text[i].classList.remove('active')
        }
        text[i].classList.add('active')
        e.target.classList.add('active')
    })
}

