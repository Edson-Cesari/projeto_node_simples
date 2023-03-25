const express = require('express');
const router = app.Router();
const mongoose = require('mongoose');

//Chama o usuario
require('../models/Usuario');
const usuario = mongoose.model('usuarios');


//Rotas
    //cadastrar - Ir para a pagina.
    router.get("/cadastro",(req,res)=>{
        res.render("usuario/cadastrar");
    });

    //cadastrar - fazer inclusao do formulario no banco de dados
    router.post("/cadastro/novo",(req,res)=>{
        
    });