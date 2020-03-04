$(document).ready(function() {
  content = $('.category-content');
  content.css('display', 'none');
  title = $('.category-title');
  title.on('click', function () {
    content.fadeOut(500).css('display', 'none'); 
    $(this).next(content).fadeIn(500).css('display', 'block');
  });

  img = $('.rounded-circle:first');
  dropdown = $('.dropdown-content');
  dropdown.css('display', 'none');
  img.on('click', function () {
    dropdown.toggle('show')
    $('.show').fadeIn(500).css('display', 'block')
  })

  modals = $('modal')
  modals.css('display', 'none');

  $( ".nav-link" ).click(function( event ) {
    event.preventDefault();
   modals.css('display', 'inline-block')
  });
})