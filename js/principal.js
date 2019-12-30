//VOLTAR AO TOPO
$(window).on('scroll', function () {
    var wintop = $(this).scrollTop();

    if (wintop >= $('#inicioDoTopo').offset().top) {
        $('#btVoltar').fadeIn("slow");
    } else {
        $('#btVoltar').fadeOut("slow");
    }
})

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




function backToTop() {
    //BACK TO TOP APARECE COM SCROLL
    $(window).on('scroll', function () {
        var wintop = $(this).scrollTop();

        if (wintop >= $('#inicioDoTopo').offset().top) {
            $('#botaoVoltarAoTopo').fadeIn("slow");
        } else {
            $('#botaoVoltarAoTopo').fadeOut("slow");
        }
    })

    //VOLTA PRO TOPO AO CLIQUE
    $('#botaoVoltarAoTopo').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 600);
    })
}





// //PEGAR O BOTÃO
// var bottaoTopo = document.getElementById("botaoVoltarAoTopo");


// //APARECER O BOTÃO AO ROLAR SCROLL
// window.onscroll = function () {
//     scrollFunction()
// };
// function scrollFunction() {
//     if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
//         bottaoTopo.style.display = "block";
//     } else {
//         bottaoTopo.style.display = "none";
//     }
// }


// $('#botaoVoltarAoTopo').click(function (e) {
//     e.preventDefault();
//     var target = $('#inicioTopo').offset().top;

//     $('html, body').animate({
//         scrollTop: target - 200
//     }, 500);
// });


// //PEGAR O BOTÃO
// var bottaoTopo = document.getElementById("voltarAoTopo");


// //APARECER O BOTÃO AO ROLAR SCROLL
// window.onscroll = function () {
//     scrollFunction()
// };
// function scrollFunction() {
//     if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
//         bottaoTopo.style.display = "block";
//     } else {
//         bottaoTopo.style.display = "none";
//     }
// }

// //VOLTAR AO TOPO AO CLICAR NO BOTÃO
// function topoFuncao() {
//     document.body.scrollTop = 0; // SAFARI
//     document.documentElement.scrollTop = 0; //CHROME, FIREFOX, EI e OPERA
// }




