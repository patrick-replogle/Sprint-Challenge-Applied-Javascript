/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

const imgArray = ["./assets/carousel/mountains.jpeg","./assets/carousel/computer.jpeg", 
"./assets/carousel/trees.jpeg", "./assets/carousel/turntable.jpeg"]

const carouselContainer = document.querySelector('.carousel-container')
carouselContainer.appendChild(Carousel())


function Carousel() {
  let carousel = document.createElement('div')
  let leftButton = document.createElement('div')
  let img1 = document.createElement('img')
  let img2 = document.createElement('img')
  let img3 = document.createElement('img')
  let img4 = document.createElement('img')
  let rightButton= document.createElement('div')

  carousel.classList.add('carousel')
  leftButton.classList.add('left-button')
  rightButton.classList.add('right-button')

  leftButton.textContent = '<';
  img1.setAttribute('src',imgArray[0])
  img2.setAttribute('src',imgArray[1])
  img3.setAttribute('src',imgArray[2])
  img4.setAttribute('src',imgArray[3])
  rightButton.textContent = '>';

  carousel.appendChild(leftButton)
  carousel.appendChild(img1)
  carousel.appendChild(img2)
  carousel.appendChild(img3)
  carousel.appendChild(img4)
  carousel.appendChild(rightButton)

  return carousel;
}

let images = document.querySelectorAll('img');
let leftButton = document.querySelector('.left-button')
let rightButton = document.querySelector('.right-button')

let index = 0;
images[index].style.display = 'block';


//w3 schools carousel code
// var slideIndex = 1;
// showSlides(slideIndex);

// // Next/previous controls
// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// // Thumbnail image controls
// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// function showSlides(n) {
//   var i;
//   var slides = document.getElementsByClassName("mySlides");
//   var dots = document.getElementsByClassName("dot");
//   if (n > slides.length) {slideIndex = 1}
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//       slides[i].style.display = "none";
//   }
//   for (i = 0; i < dots.length; i++) {
//       dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex-1].style.display = "block";
//   dots[slideIndex-1].className += " active";
// }
