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
    }
}


