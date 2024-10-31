//Uso de J QUERY

$(document).ready(function (){ //carregar todo documento
    $('.btn-comprar').on('click',function(){  //ouvinte de elemento botao comprar,
        $('.container').toggleClass('active') //quando clicado add classe active em .container 
        
        document.querySelector('.container').scrollIntoView({ //usa a classe para localizar o elemento
            behavior: 'smooth',  //rolagem suave
            block: 'start'})     //rolagem ao topo do bloco

    });
});


$(document).ready(function (){
    $('.btn-animate-btn').on('click',function(){ //ouvinte de elemento botao ver produtos
        $('.produtos').toggleClass('active') //quando clicado add classe active em .produtos

        document.querySelector('.produtos2').scrollIntoView({ //usa a classe para localizar o elemento
            behavior: 'smooth',  //rolagem suave
            block: 'start'})     //rolagem ao topo do bloco

    });
});

//compra concluida
const botao = document.getElementById('pedido');  //busca pelo id
const mensagem = document.getElementById('mensagem');  //busca pelo id

botao.addEventListener('click', () => { //ouvinte de evento
    mensagem.style.display = 'block'; // muda o display none para block e exibe a mensagem
});


