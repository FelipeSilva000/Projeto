$(document).ready(function (){
    $('.btn-comprar').on('click',function(){  //botao comprar
        $('.container').toggleClass('active') //inserir dados
        
        document.querySelector('.container').scrollIntoView({
            behavior: 'smooth',
            block: 'start'})

    });
});


$(document).ready(function (){
    $('.btn-animate-btn').on('click',function(){  //botao ver produtos
        $('.produtos').toggleClass('active') //inserir dados

        document.querySelector('.produtos2').scrollIntoView({
            behavior: 'smooth',
            block: 'start'})

    });
});


const botao = document.getElementById('pedido');
const mensagem = document.getElementById('mensagem');

botao.addEventListener('click', () => {
    mensagem.style.display = 'block'; // Exibe a mensagem
});
