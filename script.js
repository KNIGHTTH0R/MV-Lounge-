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


  
