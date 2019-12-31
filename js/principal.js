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
        scrollTop: target - 125
    }, 500);
});

//ANCORA PARA GALERIA
$('#galerialink').click(function (e) {
    e.preventDefault();
    var target = $('#galeriaMenu').offset().top;

    $('html, body').animate({
        scrollTop: target - 270
    }, 500);
});


//GIF DE LOADING
$(window).on('load', function () {
    $('#preloader .inner').fadeOut();
    $('#preloader').delay(350).fadeOut('slow');
    $('body').delay(350).css({ 'overflow': 'visible' });
})



//PEGAR O BOTÃO
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

//RETORNA AO TOPO DA PÁGINA
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

//AO CLICAR NO BOTÃO DO MODAL, IMPEDIR O USO DO SCROLL   
$("#botaoGaleria").click(function(){

    $("#modal").show();
    $("html,body").css({"overflow":"hidden"});
})

//AO CLICAR EM QUALQUER OPÇÃO PARA FECHAR, REAPARECER BARRA SCROLL ATRÁS E USO PERMITIDO
$("#fecharInferior, #fecharSuperior").click(function(){
    $("#modal").hide();
    $("html,body").css({"overflow":"visible"});
});