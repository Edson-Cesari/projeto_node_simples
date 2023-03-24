let verTermos = document.querySelector('.btnVerTermos');
let termos = document.querySelector('.termos')
let termoReembolso = document.querySelector('.reembolso');
let termoUso = document.querySelector('.uso');

let fechar = document.getElementById('btnFechar');
let fecharReembolso = document.getElementById('btnfecharReembolso');
let fecharUso = document.getElementById('btnfecharUso');

verTermos.addEventListener('click',()=>{
    termos.style.display = "block";
    termos.style.animation="animacaoTermosON 0.6s linear forwards";
})
fechar.addEventListener('click',()=>{
    termos.style.animation="animacaoTermosOFF 0.6s linear forwards";
});

let verReembolso = document.querySelector('.btnVerReembolso');
verReembolso.addEventListener('click',()=> {
    termoReembolso.style.display='block';
    termoReembolso.style.animation="animacaoReembolsoON 0.6s linear forwards";
})
fecharReembolso.addEventListener('click',()=>{
    termoReembolso.style.animation="animacaoReembolsoOFF 0.6s linear forwards";
});

let verUso = document.querySelector('.btnVerUso');
verUso.addEventListener('click',()=> {
    termoUso.style.display='block';
    termoUso.style.animation="animacaoReembolsoON 0.6s linear forwards";
})
fecharUso.addEventListener('click',()=>{
    termoUso.style.animation="animacaoReembolsoOFF 0.6s linear forwards";
});