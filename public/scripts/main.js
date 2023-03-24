let count = 1;
document.getElementById("radio1").checked = true;
let btnSaibaMais = document.getElementById("btnSaibaMais");

function redirecionar(caminho){
    window.location.href=caminho;
}

setInterval(function(){
    passaImagem();
},3000)

function passaImagem(){
    count++;
    if(count>6){
        count=1;
    }

    document.getElementById("radio"+count).checked = true;

}

btnSaibaMais.addEventListener('click',()=>{
    
    if(document.getElementById("radio1").isChecked){
        redirecionar("./html/solucoes.html");

    }else if(document.getElementById("radio2").checked){
        redirecionar("./html/solucoes.html");

    }else if(document.getElementById("radio3").checked){
        redirecionar("./html/portifolio.html");

    }else if(document.getElementById("radio4").checked){
        redirecionar("./html/quemSomos.html");

    }else if(document.getElementById("radio5").checked){
        redirecionar("./html/faleConosco.html");

    }else{
        redirecionar("./index.html");

    }
});