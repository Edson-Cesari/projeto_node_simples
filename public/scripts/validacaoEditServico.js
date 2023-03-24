
    const formulario_edit_servico = document.querySelector('#formulario-editServicos'); 
    const todosInputs3 = document.querySelectorAll('.controle-erros3');
    const helpers3 = document.querySelectorAll('.helper'); 

    function apontar_erro3(index,mensagem){
        todosInputs3[index].style.border ='2px solid #e63636';
        helpers3[index].innerHTML = mensagem;
    }

    function retirar_erro3(index){
        todosInputs3[index].style.border ='';
        helpers3[index].innerHTML = '';
    }

    function limpar_campos3(){
        todosInputs3.forEach( i => {
            todosInputs3[i]="";
        });
    }


        function validar_nomeServicoEdit(){
            if(todosInputs3[0].value.length <3){
                apontar_erro3(0,'nome deve ter no minimo 3 caracteres!' );
                return false;
            }else{
                retirar_erro3(0);
                return true;
            }
        }

        function validar_mensagemServicoEdit(){
            if(todosInputs3[1].value < 3  && todosInputs3[1].value > 300 || todosInputs3[1].value == "" ||todosInputs3[1].value == null){
                apontar_erro3(1,'A mensagem deve ter no minimo 3 caracteres e no maximo 300');
                return false;
            }else{
                retirar_erro3(1);
                return true;
            }
        }


    formulario_edit_servico.addEventListener('submit',(e)=>{
        e.preventDefault();  
        validar_nomeServicoEdit();
        validar_mensagemServicoEdit();
        
        
        if(validar_nomeServicoEdit() && validar_mensagemServicoEdit()){
            limpar_campos3();
            formulario_edit_servico.submit(); 
        }
    })