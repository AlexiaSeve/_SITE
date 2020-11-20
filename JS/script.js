console.log('script loaded')

$( function() {
  $( ".draggable" ).draggable({ cursor: "move" });
  } 
);

// CROIX menu

$('.CROIX').click(function()  {
  document.body.classList.toggle('noscroll')
  document.querySelector('.mobile-MENU').classList.toggle('visible')
  document.querySelector('.mobile-MENU button').classList.toggle('is-active')  
  document.querySelector('.CROIX').classList.toggle('is-active') 
})

// fin CROIX menu





















///////////////////// LIGHT BOX ///////////////////// 
function openModal() {
  document.getElementById("myModal").style.display = "block";
}

// Close the Modal
function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}
///////////////////// fin LIGHT BOX ///////////////////// 