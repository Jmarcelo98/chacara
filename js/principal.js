//ANCORA PARA LOGO
$('#logolink').click(function (e) {
    e.preventDefault();
    var target = $('#logoAncora').offset().top;

    $('html, body').animate({
        scrollTop: 0
    }, 500);
});


//ANCORA PARA HOME 
$('#quemSomosNoslink').click(function (e) {
    e.preventDefault();
    var target = $('#logoAncora').offset().top;

    $('html, body').animate({
        scrollTop: 0
    }, 500);
});


//ANCORA PARA ESTRUTURA
$('#estruturalink').click(function (e) {
    e.preventDefault();
    var target = $('#estruturaMenu').offset().top;

    $('html, body').animate({
        scrollTop: target - 100
    }, 500);
});

//ANCORA PARA GALERIA
$('#galerialink').click(function (e) {
    e.preventDefault();
    var target = $('#galeriaMenu').offset().top;

    $('html, body').animate({
        scrollTop: target - 330
    }, 500);
});


//GIF DE LOADING
$(window).on('load', function () {
    $('#preloader .inner').fadeOut();
    $('#preloader').delay(350).fadeOut('slow');
    $('body').delay(350).css({ 'overflow': 'visible' });
})



//PEGAR VARIAVEL
var mybutton = document.getElementById("myBtn");

//MOSTRA BOTÃO APÓS ROLAR O SCROLL
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 530 || document.documentElement.scrollTop > 530) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}