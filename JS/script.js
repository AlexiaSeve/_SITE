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

const selectorText = document.querySelector('.selecteur p')

const photoWrapper = document.querySelector('.photos-wrapper')
const photoWrapper2 = document.querySelector('.photos-wrapper2')
const photoWrapper3 = document.querySelector('.photos-wrapper3')

const buttons = [...document.querySelectorAll('.BoutonSelecteur div')]

document.querySelector( ".ballOne" )?.addEventListener('click', function(e) {
  selectorText.textContent = 'Suède 1'
  buttons.forEach(button => button.classList.remove('filled'))
  e.target.classList.add('filled')
  photoWrapper2.classList.remove('visible')
  photoWrapper3.classList.remove('visible')
  photoWrapper.classList.add('visible')
});

document.querySelector( ".ballTwo" )?.addEventListener('click', function(e) {
  selectorText.textContent = 'Suède 2'
  buttons.forEach(button => button.classList.remove('filled'))
  e.target.classList.add('filled')
  photoWrapper.classList.remove('visible')
  photoWrapper3.classList.remove('visible')
  photoWrapper2.classList.add('visible')
});

document.querySelector( ".ballThree" )?.addEventListener('click', function(e) {
  selectorText.textContent = 'Suède 3'
  buttons.forEach(button => button.classList.remove('filled'))
  e.target.classList.add('filled')
  photoWrapper.classList.remove('visible')
  photoWrapper2.classList.remove('visible')
  photoWrapper3.classList.add('visible')
});

