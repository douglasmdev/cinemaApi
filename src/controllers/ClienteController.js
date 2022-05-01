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
                const resposta = await ClienteMetodos.listaClientePorCpf(cpf);
                res.status(200).json({mensagem: resposta});
            } catch (error) {
                res.status(400).json({erro: error.message});
            }
        }); 
        
        app.post('/clientes', async (req, res) => {
            try {
                const cliente = new ClienteModel(...Object.values(req.body));
                const resposta = await ClienteController.insereCliente(cliente);
                res.status(201).json({mensagem: resposta});
            } catch (error) {
                res.status(401).json({erro: error.message});
            }

        });

        app.put('/clientes/:cpf', async (req, res) => {
            try {
                const cpf = req.params.cpf;
                const clienteAtualizado = new ClienteModel(...Object.values(req.body));
                const resposta = await ClienteMetodos.atualizaPorCpf(cpf, clienteAtualizado);
                res.status(202).json({mensagem: resposta});
            } catch (error) {
                res.status(402).json({erro: error.message});
            }
        });

        app.delete('/clientes/:cpf', async (req, res) => {
            try {
                const cpf = req.params.cpf;
                const resposta = await ClienteMetodos.deletaPorCpf(cpf); 
                res.status(203).json({mensagem: resposta});
            } catch (error) {
                res.status(403).json({erro: error.message});
            }            
        });
    }
}


