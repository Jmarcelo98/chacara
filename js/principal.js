//VOLTAR AO TOPO
// $(window).on('scroll', function () {
//     var wintop = $(this).scrollTop();

//     if (wintop >= $('#iddareferencia').offset().top) {
//         $('#iddobotao').fadeIn("slow");
//     } else {
//         $('#idobotao').fadeOut("slow");
//     }
// })

//ANCORA PARA LOGO
$('#logolink').click(function (e) {
    e.preventDefault();
    var target = $('#inicio').offset().top;

    $('html, body').animate({
        scrollTop: 0
    }, 500);
});


//ANCORA PARA HOME 
$('#homelink').click(function (e) {
    e.preventDefault();
    var target = $('#inicio').offset().top;

    $('html, body').animate({
        scrollTop: 0
    }, 500);
});


//ANCORA PARA ESTRUTURA
$('#estruturalink').click(function (e) {
    e.preventDefault();
    var target = $('#estrutura').offset().top;

    $('html, body').animate({
        scrollTop: target - 100
    }, 500);
});


//GIF DE LOADING
$(window).on('load', function () {
    $('#preloader .inner').fadeOut();
    $('#preloader').delay(350).fadeOut('slow'); 
    $('body').delay(350).css({'overflow': 'visible'});
})