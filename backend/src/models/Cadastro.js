const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const CadastroSchema = new mongoose.Schema({
    empresa: {
        cnpj: {
            type: String,
            required: true
        },
        razaoSocial: {
            type: String,
            required: true
        },
        nomeResponsavel: {
            type: String,
            required: true
        },
        cpf: {
            type: String,
            required: true
        },
        enderecoEmpresa: {
            type: String,
            required: true
        },
        bairro: {
            type: String,
            required: true
        },
        cep: {
            type: String,
            required: true
        },
        cidade: {
            type: String,
            required: true
        },
        estado: {
            type: String,
            required: true
        },
        complemento: {
            type: String,
            required: true
        },
        createdAt: {
            type: Date,
            default: Date.now
        }
    }
});

CadastroSchema.plugin(mongoosePaginate);

mongoose.model('Cadastro', CadastroSchema);