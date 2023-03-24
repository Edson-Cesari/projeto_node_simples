//Carregando modulos
const express = require("express");
const {engine} = require("express-handlebars");
const { default: mongoose, Schema } = require("mongoose");
const path = require('path');
const app = express();
const admin = require("./routers/admin")
require("dotenv").config();

//Chamando o modelo de servico
require("./models/Servico");const Servico = mongoose.model("servicos");

//Chamando o modelo de pedido
require("./models/Pedido");
const Pedido = mongoose.model("pedidos");

const bodyParser = require("body-parser");


//Configurações
    //Body- Parser
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());

   //Handlebars
   app.engine('handlebars' , engine({defaultLayout: 'main',
   runtimeOptions: {
   allowProtoPropertiesByDefault: true,
   allowProtoMethodsByDefault: true,
    }   
    }));
    app.set('view engine','handlebars');
    app.set("views","./views");

    //public (html,css,scripts)
    app.use(express.static(path.join(__dirname,)+'/public'));

    //Mongoose Banco da dados Mongodb
        mongoose.Promise = global.Promise;
        mongoose.connect(process.env.STRING_BD).then(()=>{
            console.log("Mongoose ON...");
        }).catch((err)=>{
            console.log("Ocorreu um erro ao acessar o Banco de dados: ERRO:"+err);
        });


    //Rotas
        //Home
        app.get("/",(req,res)=>{
            res.render("comum/index");
        });

        //Fale conosco
            //Carregando os servicos
            app.get("/faleConosco",(req,res)=>{
                Servico.find().sort({date: 'desc'}).then((servicos)=>{
                    res.render("comum/faleConosco",{servicos: servicos});
        
                }).catch((err)=>{
                    console.log("Ocorreu um erro ao trazer os Servicos, ERRO:"+err);
                    res.redirect("/faleConosco");
                }); 
            })

            //Criando um Pedido
            app.post("/faleConosco/novo",(req,res)=>{

                console.log("nome = "+req.body.nome);
                console.log("email = "+req.body.email);
                console.log("telefone = "+req.body.telefone);
                console.log("Servico = "+req.body.servicos);
               
                const novoPedido = {
                    nome: req.body.nome,
                    email: req.body.email,
                    telefone: req.body.telefone,
                    servicos: req.body.servicos,
                    mensagem: req.body.mensagem
                }
                new Pedido(novoPedido).save().then(()=>{
                    console.log("Pedido criado com sucesso!");
                    res.redirect("/faleConosco");

                }).catch((err)=>{
                    console.log("Ocorreu um erro ao criar o pedido, ERRO:"+err);
                    res.redirect("/faleConosco");
                });
            });
            

        //Servicos
        app.get("/servicos",(req,res)=>{
            Servico.find().sort({date: 'desc'}).then((servicos)=>{
                res.render("comum/servicos",{servicos: servicos});
    
            }).catch((err)=>{
                console.log("Ocorreu um erro ao trazer os Servicos, ERRO:"+err);
                res.redirect("/servicos");
            }); 
        })

        //Portifolio
        app.get("/portifolio",(req,res)=>{
            res.render("comum/portifolio");
        })

        //Quem somos
        app.get("/quemSomos",(req,res)=>{
            res.render("comum/quemSomos");
        })

        //Seção do Adm
        app.use("/admin",admin);

    

    //Abrindo o servidor.
    const PORT = process.env.BD_PORT;
    app.listen(PORT,()=>{
        console.log("Servidor: ON... http://localhost:"+PORT);
})