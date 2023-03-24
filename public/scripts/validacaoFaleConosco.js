
//Variaveis de cada formulario
    //Pegando os formularios a serem validados.
    const formulario_Fale_Conosco = document.querySelector('#form-faleConosco'); 

// Variaveis comuns
    //todas as caixas para controle visual.
    const todosInputs = document.querySelectorAll('.controle-erros');

    //todos os helper de informacao de erros .
    const helpers = document.querySelectorAll('.helper'); 

    //Info para validador de email.
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const telRegex = /^\(?(\d{2})\)?[- ]?(\d{5})[- ]?(\d{4})$/;

//Funcoes comuns.
    // Aponta o erro dentro o HTML.
    function apontar_erro(index,mensagem){
        todosInputs[index].style.border ='2px solid #e63636';
        helpers[index].innerHTML = mensagem;
    }

    //Retira o erro dentro do HTML
    function retirar_erro(index){
        todosInputs[index].style.border ='';
        helpers[index].innerHTML = '';
    }

    //Limpar campos
    function limpar_campos(){
        todosInputs.forEach( i => {
            todosInputs[i]="";
        });
    }

    //funcoes individuais.
        //validacao nome (pessoas, objetos, etc...)
        function validar_nome(){
            if(todosInputs[0].value.length <3){
                apontar_erro(0,'nome deve ter no minimo 3 caracteres!' );
                return false;
            }else{
                retirar_erro(0);
                return true;
            }
        }

        //validacao email
        function validar_email(){
            if(!emailRegex.test(todosInputs[1].value)){
                apontar_erro(1,'Email não válido!' );
                return false;
            }else{
                retirar_erro(1);
                return true;
            }
        }

        //validacao telefone
        function validar_telefone(){
            if(!telRegex.test(todosInputs[2].value)){
                apontar_erro(2,"Numero de Telefone não válido!");
                return false;
            }
            else if( todosInputs[2].value === "" || todosInputs[2].value == null  || (todosInputs[2].value.length != 11 && NaN(todosInputs[2].value))){
                apontar_erro(2,"Numero de Telefone não válido!");
                return false;

            }else{
                retirar_erro(2);
                return true;
            }
        }    

        //validacao Servicos/Solucao ou qualquer select
        function validar_select(){
            let select = todosInputs[3];
            var opcao = select.options[select.selectedIndex].value;

            if(opcao == "emBranco"){
                apontar_erro(3,'Não foi selecionado nenhuma opção!' );
                return false;
            }else{
                retirar_erro(3);
                return true;
            }
        }

        //Valicadao para mensagem
        function validar_mensagem(){
            if(todosInputs[4].value < 3  && todosInputs[3].value > 300 || todosInputs[4].value == "" ||todosInputs[4].value == null){
                apontar_erro(4,'A mensagem deve ter no minimo 3 caracteres e no maximo 300');
                return false;
            }else{
                retirar_erro(4);
                return true;
            }
        }

        //validacao para quaisquer checkbox do site.
        function validar_checkbox(){
            if(!todosInputs[5].checked){
                apontar_erro(5,"Voce não aceitou os termos de uso.");
                return false;
            }else{
                retirar_erro(5);
                return true;
            }
        }
    

    // Validacao para o formulario FALE CONOSCO.
    formulario_Fale_Conosco.addEventListener('submit',(e)=>{
        e.preventDefault();  //Não permite que a função submit funcione.
        validar_nome();
        validar_email();
        validar_telefone();
        validar_select();
        validar_mensagem();
        validar_checkbox();

        //caso todas as validaçoes retornem true..
        if(validar_nome() && validar_email()  && validar_telefone() && validar_select() && validar_mensagem() && validar_checkbox()){
            limpar_campos();
            formulario_Fale_Conosco.submit(); // Realiza a validação do formulario.
            
        }
    })

   

