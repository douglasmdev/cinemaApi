import ClienteModel from "../models/ClienteModel";
import ClienteMetodos from "../DAO/ClienteMetodos";

class ClienteController{
    static rotas(app) {
        app.get('/clientes', async (req, res) => {
            try {
                const resposta = await ClienteMetodos.listaClientes();
                res.status(200).json({mensagem: resposta});
            } catch (error) {
                res.status(400).json({erro: error.message});
            }
        });
        
        app.get('/clientes/:cpf', async (req, res) => {
            try {
                const cpf = req.params.cpf;
                const resposta = await ClienteMetodos.listaClientesPorCpf(cpf);
                res.status(200).json({mensagem: resposta});
            } catch (error) {
                res.status(400).json({erro: error.message})
            }
        });       
    }
}


