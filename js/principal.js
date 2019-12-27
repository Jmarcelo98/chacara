//VOLTAR AO TOPO
// $(window).on('scroll', function () {
//     var wintop = $(this).scrollTop();

//     if (wintop >= $('#iddareferencia').offset().top) {
//         $('#iddobotao').fadeIn("slow");
//     } else {
//         $('#idobotao').fadeOut("slow");
//     }
// })


$('#homelink').click(function(e){
    e.preventDefault();
    var target = $('#inicio').offset().top;

    $('html, body').animate({
        scrollTop: 0
    }, 500);
});

$('#estruturalink').click(function(e){
    e.preventDefault();
    var target = $('#estrutura').offset().top;

    $('html, body').animate({
        scrollTop: target - 100
    }, 500);
});



function troca(){
    $(this).toggleClass('ativo');
}