
let menuLateral = document.querySelector("nav > ul");
let botaoMenu = document.getElementById("menuRetratil");
let tamanhoTela = window.screen.width;

function menuOpen(){
    menuLateral.style.width="300px";
    menuLateral.style.transition = "all 0.75s ease";
}

function menuClose(){
    menuLateral.style.width="0px";
    menuLateral.style.transition = "all 0.75s ease";
    if(tamanhoTela >= 824){
        menuLateral.style.width="";
    }

}

function redirecionar(caminho){
    window.location.href=caminho;
}


function abrirMenu(){
    if(botaoMenu.checked){
        menuOpen();
        
    }else{
        menuClose();
        botaoMenu.checked=false;
    }
}

function fecharMenuRedirect(caminho){
    if(botaoMenu.checked){
        menuClose();
        botaoMenu.checked=false;

        setTimeout(() => {
            redirecionar(caminho);
        }, 750);
    }else{
        redirecionar(caminho);
    }
}
