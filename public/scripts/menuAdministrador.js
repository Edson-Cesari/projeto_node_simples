
let admOnOff = document.querySelector('#adm-on-off')
let menuLis = document.querySelectorAll('.onOff');
let ocultoMenuLis = document.querySelectorAll('.offOn');


let original_pq = document.querySelector('.logoPrincipalPequeno');
let original_gd = document.querySelector('.logotipoMedio');


//SUBSTITUIÇÃO DAS IMAGENS DO MENU PRINCIPAL
//Substitui as imagens originais pelas alternativas.
function substituirOriginal_admin(){
    original_gd.setAttribute('src',"/imagens/headerFooter/logoAdminArea.png");
    original_pq.setAttribute('src',"/imagens/headerFooter/logoPeqAdminArea.png");
}
//Substitui as imagens alternativas pelas originais.
function substituirAdmin_original(){
    original_gd.setAttribute('src',"/imagens/headerFooter/logo.png");
    original_pq.setAttribute('src',"/imagens/headerFooter/logoPeq.png");
}


//usado para manter mesmo depois do navegador fechado o menu principal
//como usuario comum ou como Administrador.

//Verifica o Cookie salvo do Checkbox.
function verificarCheckbox(){
    if(localStorage.info == "true"){
        admOnOff.checked = true;
    }
}

//Arruma o menu do jeito que estava quando foi fechado.
function manterMenuComofoiSalvo(){
    if(localStorage.info == "true"){
        menuLis.forEach((menuLi)=>{
            menuLi.style.display = "none";
        });
        ocultoMenuLis.forEach((ocultoMenuLi)=>{
            ocultoMenuLi.style.display = "block";
        });
        substituirOriginal_admin();

    }else{
        menuLis.forEach((menuLi)=>{
            menuLi.style.display = "block";
        });

        ocultoMenuLis.forEach((ocultoMenuLi)=>{
            ocultoMenuLi.style.display = "none";
        });
        substituirAdmin_original();
    }
}

verificarCheckbox();
manterMenuComofoiSalvo();

//Ferifica interação do usuario com Checkbox
function menuAdminON(){

    if(admOnOff.checked){
        menuLis.forEach((menuLi)=>{
            menuLi.style.display = "none";
        });

        ocultoMenuLis.forEach((ocultoMenuLi)=>{
            ocultoMenuLi.style.display = "block";
        });
        
        substituirOriginal_admin();
        
        localStorage.info = "true";

    }else{
        menuLis.forEach((menuLi)=>{
            menuLi.style.display = "block";
        });

        ocultoMenuLis.forEach((ocultoMenuLi)=>{
            ocultoMenuLi.style.display = "none";
        });

        substituirAdmin_original();

        localStorage.info = "false";
    }


}