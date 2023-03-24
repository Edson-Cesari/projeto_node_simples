//Variaveis de cada formulario
    //Pegando os formularios a serem validados.
    const formulario_add_servico = document.querySelector('#formulario-add-servico'); 
    
// Variaveis comuns
    //todas as caixas para controle visual.
    const todosInputs2 = document.querySelectorAll('.controle-erros2');

    //todos os helper de informacao de erros .
    const helpers2 = document.querySelectorAll('.helper'); 

//Funcoes comuns.
    // Aponta o erro dentro o HTML.
    function apontar_erro2(index,mensagem){
        todosInputs2[index].style.border ='2px solid #e63636';
        helpers2[index].innerHTML = mensagem;
    }

    //Retira o erro dentro do HTML
    function retirar_erro2(index){
        todosInputs2[index].style.border ='';
        helpers2[index].innerHTML = '';
    }

    //Limpar campos
    function limpar_campos2(){
        todosInputs2.forEach( i => {
            todosInputs2[i]="";
        });
    }


    //funcoes individuais.
        //validacao nome (pessoas, objetos, etc...)
        function validar_nomeServico(){
            if(todosInputs2[0].value.length <3){
                apontar_erro2(0,'nome deve ter no minimo 3 caracteres!' );
                return false;
            }else{
                retirar_erro2(0);
                return true;
            }
        }

        //Valicadao para mensagem
        function validar_mensagemServico(){
            if(todosInputs2[1].value < 3  && todosInputs2[1].value > 300 || todosInputs2[1].value == "" ||todosInputs2[1].value == null){
                apontar_erro2(1,'A mensagem deve ter no minimo 3 caracteres e no maximo 300');
                return false;
            }else{
                retirar_erro2(1);
                return true;
            }
        }


    // Validacao para o formulario add Servico
    formulario_add_servico.addEventListener('submit',(e)=>{
        e.preventDefault();  //Não permite que a função submit funcione.
        validar_nomeServico();
        validar_mensagemServico();
        
        //caso todas as validaçoes retornem true..
        if(validar_nomeServico() && validar_mensagemServico()){
            limpar_campos2();
            formulario_add_servico.submit(); // Realiza a validação do formulario.
        }
    })
