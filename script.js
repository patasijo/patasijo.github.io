// JavaScript

const images = document.querySelectorAll('.scroll-animation img');

window.addEventListener('scroll', checkScroll);

function checkScroll() {

  images.forEach(image => {

    const imageTop = image.getBoundingClientRect().top;

    if(imageTop < window.innerHeight) {
      image.classList.add('active');
    } else {
      image.classList.remove('active');
    }

  });

}
