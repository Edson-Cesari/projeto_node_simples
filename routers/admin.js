
const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const nodemailer = require("nodemailer");

//Chamando o modelo de Servico
require("../models/Servico");
const Servico = mongoose.model("servicos");

//Chamando o modelo de pedido
require("../models/Pedido");
const Pedido = mongoose.model("pedidos");

//Rotas 
    //home
    router.get("/",(req,res)=>{
        res.render("admin/index");
    });

    //Lista de servicos
        //Busca no Banco de dados
        router.get("/servicos",(req,res)=>{
            Servico.find().sort({date: 'desc'}).then((servicos)=>{
                res.render("admin/servicos",{servicos: servicos});

            }).catch((err)=>{
                console.log("Ocorreu um erro ao trazer os Servicos, ERRO:"+err);
                res.redirect("/admin/servicos");
            }); 
        })

        //Exclusao no banco de dados
        router.post("/servicos/deletar",(req,res)=>{
            Servico.deleteOne({_id: req.body.id}).then(()=>{
                req.flash("success_msg","Servico apagado com Sucesso!");
                console.log("Servico deletado com sucesso!");
                res.redirect("/admin/servicos");

            }).catch((err)=>{
                req.flash("error_msg","Ocorreu um erro ao apagar o serviço, por favor tente novamente.")
                console.log("Ocorreu um erro ao apagar o servico:"+err);
                res.redirect("/admin/servicos");
            });
        });

        //Edicao no banco de dados, carregando informações no formulario.
        router.get("/servicos/edit/:id",(req,res)=>{
            Servico.findOne({_id: req.params.id}).then((servicos)=>{
                console.log("Servico carregado com sucesso!");
                res.render("admin/editServicos",{servicos: servicos});
            }).catch((err)=>{
                req.flash("error_msg","Ocorreu um erro ao carregar o serviço, por favor tente novamente.")
                console.log("Ocorreu um erro ao carregar o arquivo:"+err);
                res.redirect("/admin/servicos");
            });
        });


        //Edicao para salvar no banco dados as mudancas.
        router.post("/servicos/edit",(req,res)=>{
            Servico.findOne({_id: req.body.id}).then((servicos)=>{
                servicos.nome = req.body.nome;
                servicos.descricao = req.body.descricao;

                servicos.save().then(()=>{
                    req.flash("success_msg","Servico editado com Sucesso!");
                    console.log("Servico editado com sucesso!");
                    res.redirect("/admin/servicos");
                }).catch((err)=>{
                    req.flash("error_msg","Ocorreu um erro ao editar o serviço, por favor tente novamente.")
                    console.log("Ocorreu um erro ao salvar o servico:"+err);
                    res.redirect("/admin/servicos");
                });

            }).catch((err)=>{
                req.flash("error_msg","Ocorreu um erro ao salvar o serviço, por favor tente novamente.")
                console.log("Ocorreu um erro ao salvar o servico:"+err);
                res.redirect("/admin/servicos");
            });
        });
    
    //Add Servico
        //rota
        router.get("/addServicos",(req,res)=>{
            res.render("admin/addServicos");
        })

        //Inclusao no banco de dados (Formulario).
        router.post("/addServicos/novo",(req,res)=>{

                const novoServico = {
                    nome: req.body.nome,
                    descricao: req.body.descricao
                }
                new Servico(novoServico).save().then(()=>{
                    req.flash("success_msg","Servico salvo com Sucesso!");
                    console.log("Servico salvo com Sucesso!");
                    res.redirect("/admin/servicos");

                }).catch((err)=>{
                    req.flash("error_msg","Ocorreu um erro ao salvar o serviço, por favor tente novamente.")
                    console.log("Ocorreu um erro ao salvar o servico, ERRO:"+err);
                    res.redirect("/admin/addServicos");
                });
        });

    //Adm Pedidos
        //Lista de pedidos dos clientes
        router.get("/pedidos",(req,res)=>{
            Pedido.find().populate("servicos").sort({date:'desc'}).then((pedidos)=>{
                res.render("admin/pedidos",{pedidos: pedidos});
            }).catch((err)=>{
                req.flash("error_msg","Ocorreu um erro ao carregar os pedidos, por favor tente novamente.")
                console.log("Ocorreu um erro ao trazer os pedidos");
                res.redirect("/admin/");
            });

        });


        //Edicao de pedidos => Carregando as info no formulario.
        router.get("/pedidos/edit/:id",(req,res)=>{
            Pedido.findOne({_id: req.params.id}).populate("servicos").then((pedidos)=>{
                console.log("Pedido carregado com sucesso");
                res.render("admin/admPedidos",{pedidos: pedidos});

            }).catch((err)=>{
                req.flash("error_msg","Ocorreu um erro ao carregar os pedidos, por favor tente novamente.")
                console.log("Ocorreu um erro durante o carregamento do pedido"+err);
                res.redirect("/admin/pedidos");
            });
        })
        
        //Edicao de pedidos => Salvando no banco de dados.
        router.post("/pedidos/edit",(req,res)=>{
            Pedido.findOne({_id: req.body.id}).then((pedidos)=>{
                /*
                pedidos.nome = req.body.nome;
                pedidos.email = req.body.email;
                pedidos.telefone = req.body.telefone;
                pedidos.servicos = req.body.servicos;
                pedidos.data = req.body.data;
                pedidos.mensagem = req.body.mensagem;
                */
                pedidos.status = req.body.status;
                pedidos.descricao = req.body.descricao;
                pedidos.valor = req.body.valor;

                pedidos.save().then(()=>{
                    req.flash("success_msg","Servico Editado com Sucesso!");
                    console.log("Servico editado com sucesso!");
                    res.redirect("/admin/pedidos");
                }).catch((err)=>{
                    req.flash("error_msg","Ocorreu um erro ao editar os pedidos, por favor tente novamente.")
                    console.log("Ocorreu um erro ao editar o pedido."+err);
                    res.redirect("/admin/pedidos");
                });

            }).catch((err)=>{
                req.flash("error_msg","Ocorreu um erro ao carregar os pedidos, por favor tente novamente.")
                console.log("Ocorreu um erro durante o carregamento do pedido"+err);
                res.redirect("/admin/pedidos");
            });
        })

        //Deletando pedidos
        router.post("/pedidos/deletar",(req,res)=>{
            Pedido.deleteOne({_id: req.body.id}).then(()=>{
                req.flash("success_msg","Servico apagado com Sucesso!");
                console.log("Pedido apagado com sucesso!");
                res.redirect("/admin/pedidos");
            }).catch((err)=>{
                req.flash("error_msg","Ocorreu um erro ao deletar o pedido, por favor tente novamente.")
                console.log("Ocorreu um erro ao apagar o pedido, ERRO:"+err);
                res.redirect("/admin/pedidos");
            });

        })

        //Enviando pedido por email.
        router.post("/pedidos/email",(req,res)=>{
            Pedido.findOne({_id: req.body.id}).populate("servicos").then((pedidos)=>{

                //config do transporter
                let transporter = nodemailer.createTransport({
                    host: process.env.SMTP,
                    service: process.env.SERVICO,
                    port: process.env.PORT,
                    secure: false,
                    auth:{
                        user: process.env.EMAIL,
                        pass: process.env.PASSWORD
                    }
                });

                //corpo do email
                transporter.sendMail({
                    from: `Future4Tech<${process.env.EMAIL}>`,
                    to: `${pedidos.email}`,
                    subject: `Future4Tech: Proposta referente ao servico ${pedidos.servicos.nome}`,
                    html:`
                    <h1>Future4Tech</h1>
                    <h2>Proposta Referente ao servico ${pedidos.servicos.nome}</h2>
                    <hr>
                    <h3>Dados do Cliente</h3>
                    <p>Nome: ${pedidos.nome}</p>
                    <p>Email:${pedidos.email}</p>
                    <small>Data Abertura:${pedidos.data}</small>
                    <hr>
                    <h3>Servico: ${pedidos.servicos.nome}</h3>
                    <p>Descrição: ${pedidos.servicos.descricao} (variavel)</p>
                    <p>Mensagem do Cliente: ${pedidos.mensagem} </p>
                    <hr>
                    <h3>Proposta apresentada, detalhes</h3>
                    <p>${pedidos.descricao}</p>
                    <hr>
                    <h3>Status da negociação</h3>
                    <p>${pedidos.status}</p>
                    <hr>
                    <h3>Valor total</h3>
                    <p>Valores sujeitos a mudanças. Valor ${pedidos.valor}</p>
                    `
                }).then((message)=>{
                    console.log("Sucesso email"+message);
                }).catch((err)=>{
                    console.log("ERRO email:"+err);
                });

               res.redirect("/admin/pedidos/");
            }).catch((err)=>{
                console.log("Ocorreu um erro ao carregar o pedido."+err);
            });
        })

module.exports = router;