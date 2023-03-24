const {default:mongoose} = require("mongoose");
const Schema = mongoose.Schema;

//Modelo
const Servico = new Schema({
    nome:{
        type:String,
        required: true
    },
    descricao:{
        type:String,
        required:true
    },
    data:{
        type:Date,
        default: Date.now()
    }
});

module.exports = mongoose.models.servicos || mongoose.model("servicos",Servico); 