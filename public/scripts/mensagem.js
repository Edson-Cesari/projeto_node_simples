
const janelaMensagem = document.querySelector(".dinamic-mensagem");
const iconExclamacao = document.querySelector('#iconExclamacao');
const iconError = document.querySelector('#iconError');
const iconCorrect = document.querySelector('#iconCorrect');
const textoMensagem = document.querySelector('.texto-mensagem');


//Tipo = exclamacao, erro, correto
function  abrirMensagem( tipo,mensagem ){

    //Habilitando a janela de mensagem
    janelaMensagem.style.display = "block";
    textoMensagem.innerHTML = mensagem;

    //Seleciona o icone correto da caixa de mensagem.
    if(tipo == "exclamacao"){
        iconExclamacao.style.display = "block";
        iconError.style.display = "none";
        iconCorrect.style.display = "none";
        
    }else if(tipo == "error"){
        iconError.style.display = "block";
        iconExclamacao.style.display = "none";
        iconCorrect.style.display = "none";

    }else{
        iconCorrect.style.display = "block";
        iconError.style.display = "none";
        iconExclamacao.style.display = "none";
    }


    // Ajustando a posicao para que a animação finalize no meio da tela
    janelaMensagem.style.top = "120px"; //abaixo do menu principal
    janelaMensagem.style.left = "50%"; 
    
    //Correcao do erro do tamanho da janela
    janelaMensagem.style.marginTop = "-110px"; 
    janelaMensagem.style.marginLeft = "-190px"; 

    //Executando a animacão
    janelaMensagem.style.animation = "abrirJanelaMensagem 0.5s linear forwards";

   
}
function fecharMensagem(){
    janelaMensagem.style.animation = "fecharJanelaMensagem 0.5s linear forwards";

    //Aguarda o termino da animacao para retirar a janela de mensagem.
    setTimeout(() => {
        janelaMensagem.style.display = "none";
    }, 500);
}

