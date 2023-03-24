const {default:mongoose} = require("mongoose");
const Schema = mongoose.Schema;

//Modelo
const Pedido = new Schema({
    nome:{
        type: String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    telefone:{
        type:String,
        required:true
    },
   
    mensagem:{
        type:String
    },
    status:{
        type:String,
        default: "Despachado"
    },
    descricao:{
        type:String
    },
    valor:{
        type:Number
    },
    servicos:{
        type: Schema.Types.ObjectId,
        ref: "servicos"
    },
    data:{
        type:Date,
        default: Date.now()
    }
});

module.exports = mongoose.models.pedidos || mongoose.model("pedidos",Pedido);
