let verTermos = document.querySelector('.btnVerTermos');
let termos = document.querySelector('.termos');
let aceitarFechar = document.getElementById('btnFecharAceitar');
let soFechar = document.getElementById('btnFechar');
let btnCheck = document.getElementById('autorizacao');

verTermos.addEventListener('click',()=>{
    termos.style.display = "block";
    termos.style.animation="animacaoTermosON 0.6s linear forwards";
})

aceitarFechar.addEventListener('click',()=>{
    btnCheck.checked=true;
    
        termos.style.animation="animacaoTermosOFF 0.6s linear forwards";
});

soFechar.addEventListener('click',()=>{
    termos.style.animation="animacaoTermosOFF 0.6s linear forwards";
});