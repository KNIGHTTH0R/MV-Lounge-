const close = document.getElementById('close');
const open = document.getElementById('open');
const modal = document.getElementById('modal');



open.addEventListener('click', () => modal.classList.add('show-modal'));


close.addEventListener('click', () => modal.classList.remove('show-modal'));


window.addEventListener('click', e =>
  e.target == modal ? modal.classList.remove('show-modal') : false
);




//===============POPULAR ITEMS==================//


$('.button').click(function(e) {
  e.preventDefault();
  setContent($(this));
})

$('.button.active').length && setContent($('.button.active'));

function setContent($el) {
  $('.button').removeClass('active');
  $('.container').hide();
  
  $el.addClass('active');
  $($el.data('rel')).show();
}



//============TESTIMONIALS==============//

productScroll();

function productScroll() {
  let slider = document.getElementById("slider");
  let next = document.getElementsByClassName("next1");
  let prev = document.getElementsByClassName("prev1");
  let slide = document.getElementById("slide");
  let item = document.getElementById("slide");

  for (let i = 0; i < next.length; i++) {
    

    let position = 0; 

    prev[i].addEventListener("click", function() {
      
      if (position > 0) {
        position -= 1;
        translateX(position); 
      }
    });

    next[i].addEventListener("click", function() {
      if (position >= 0 && position < hiddenItems()) {
        position += 1;
        translateX(position); 
      }
    });
  }

  function hiddenItems() {
    let items = getCount(item, false);
    let visibleItems = slider.offsetWidth / 500;
    return items - Math.ceil(visibleItems);
  }
}

function translateX(position) {
  slide.style.left = position * -300 + "px";
}

function getCount(parent, getChildrensChildren) {
  let relevantChildren = 0;
  let children = parent.childNodes.length;
  for (let i = 0; i < children; i++) {
    if (parent.childNodes[i].nodeType != 3) {
      if (getChildrensChildren)
        relevantChildren += getCount(parent.childNodes[i], true);
      relevantChildren++;
    }
  }
  return relevantChildren;
}


  

//============BACK TO TOP BUTTON================//


mybutton = document.getElementById("myBtn");


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 5500 || document.documentElement.scrollTop > 5500) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}


function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0; 
} 
