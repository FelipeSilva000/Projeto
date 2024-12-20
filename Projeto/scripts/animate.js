//Uso de J QUERY
//pagina secundaria comprar
$(document).ready(function (){ //carregar todo documento
    $('.btn-comprar2').on('click',function(){  //ouvinte de elemento botao comprar,
        $('.container').toggleClass('active') //quando clicado add classe active em .container 
        
        document.querySelector('.container').scrollIntoView({ //usa a classe para localizar o elemento
            behavior: 'smooth',  //rolagem suave
            block: 'start'})     //rolagem ao topo do bloco

    });
});

//css princinpal ver produtos
$(document).ready(function (){
    $('.btn-animate-btn').on('click',function(){ //ouvinte de elemento botao ver produtos
        $('.produtos').toggleClass('active') //quando clicado add classe active em .produtos

        document.querySelector('.produtos2').scrollIntoView({ //usa a classe para localizar o elemento
            behavior: 'smooth',  //rolagem suave
            block: 'start'})     //rolagem ao topo do bloco

    });
});

              //SELECIONAR TAMANHO sapato//

// Seleciona todos os botões de tamanho e o botão "Comprar"
const botoesTamanho = document.querySelectorAll('.tamanho');
const botaoComprar = document.querySelector('.btn-comprar2');
let tamanhoSelecionado = null;

// Adiciona um evento de clique a cada botão de tamanho
botoesTamanho.forEach(botao => {
    botao.addEventListener('click', () => {
        // Remove o destaque do botão anteriormente selecionado
        if (tamanhoSelecionado) {
            tamanhoSelecionado.classList.remove('tamanho-selecionado');
        }

        // Aplica o destaque ao botão atual e armazena a seleção
        botao.classList.add('tamanho-selecionado');
        tamanhoSelecionado = botao;
    });
});

// Verifica a seleção antes de permitir a compra
botaoComprar.addEventListener('click', () => {
    if (!tamanhoSelecionado) {
        alert('Por favor, selecione um tamanho antes de comprar.');
    } else {
        event.preventDefault();
    }
});




               //  PAYMENTS //

// Validar email
function validadorEmail() {
    const email = document.getElementById("email").value; // busca por id
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; // caracteres permitidos

    if (!emailRegex.test(email)) {
        alert("Por favor, insira um email válido."); // alerta
        return false; // Retorna false se o email não for válido
    }
    console.log("Email válido:", email);
    return true; // Retorna true se o email for válido
}

               // Validar cartão //
function validarCartao() {
    const numeroCartao = document.getElementById("numeroCartao").value.replace(/\D/g, ""); // Remover espaços e traços
    const regexCartao = /^\d{13,19}$/; // Aceita apenas números entre 13 e 19 dígitos

    if (!regexCartao.test(numeroCartao)) {
        alert("Por favor, insira um número de cartão válido.");
        return false; // Retorna false se o número do cartão não for válido
    }

    if (!luhnCheck(numeroCartao)) {
        alert("Número do cartão inválido.");
        return false; // Retorna false se o número do cartão for inválido
    }

    return true; // Retorna true se o cartão for válido
}

// Função para validação do número de cartão de crédito usando o Algoritmo de Luhn
function luhnCheck(numero) {
    let soma = 0;  //armazenar soma total dos digitos
    let alternar = false; //verificar se o digito deve ser dobrado

    for (let i = numero.length - 1; i >= 0; i--) {
        let n = parseInt(numero[i]);

        if (alternar) {
            n *= 2;
            if (n > 9) n -= 9;
        }

        soma += n;
        alternar = !alternar;

    }

    return soma % 10 === 0; // Retorna true se a soma for divisível por 10
}

             // Notificação  //
function mostrarNotificacao(mensagem) {
    const notificacao = document.getElementById('notificacao');
    notificacao.innerText = mensagem; 
    notificacao.style.display = 'block';

    setTimeout(() => {
        notificacao.style.display = 'none'; 
    }, 5000); // A notificação ficará visível por 5 segundos
}

// Função para verificar se todos os campos obrigatórios estão preenchidos
function verificarPreenchimentoFormulario() {
    const campos = document.querySelectorAll("input[placeholder]"); // Seleciona todos os campos com placeholder
    for (const campo of campos) {
        if (!campo.value.trim()) {
            return false; // Retorna false se algum campo estiver vazio
        }
    }
    return true; // Retorna true se todos os campos estiverem preenchidos
}

// Função de validação completa para o formulário
function validarFormulario(event) {
    event.preventDefault(); //impedir o envio imediato

    if (!verificarPreenchimentoFormulario()) {
        alert("Por favor, preencha todos os campos."); //alerta
        event.preventDefault(); // Impede o envio do formulário
        return;
    }

    // Funções de validação de email e cartão
    if (!validadorEmail() || !validarCartao()) {
        event.preventDefault(); // Impede o envio do formulário se email ou cartão for inválido
        return;
    }

    mostrarNotificacao("Compra concluída com sucesso!");
    setTimeout(() => {
        event.target.submit(); // Envia o formulário após a notificação
    }, 4000); // 4segundos

}

// Adiciona o evento ao formulário para executar a validação
document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form"); //formulario
    form.addEventListener("submit", validarFormulario);
});


