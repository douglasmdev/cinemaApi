import BilheteMetodos from "../DAO/BilheteMetodos.js";
import BilheteModel from "../models/BilheteModel.js";

class BilheteController {
    static rotas(app) {
        app.post('/bilhetes', async (req, res) => {
            try {
                const bilhete = new BilheteModel(...Object.values(req.body));
                const resposta = await BilheteMetodos.insereBilhete(bilhete);
                res.status(201).json({mensagem: resposta});
            } catch (error) {
                res.status(400).json({erro: error.message});
            } 
        });
        
        app.get('/bilhetes', async (req, res) => {
            try {
                const resposta = await BilheteMetodos.listaBilhetes();
                res.status(200).json({mensagem: resposta});
            } catch (error) {
                res.status(400).json({mensagem: error.message});
            }  
        });

        app.get('/bilhetes/:id', async (req, res) => {
            try {
                const id = req.params.id;
                const resposta = await BilheteMetodos.listaBilhetePorId(id);
                res.status(200).json({mensagem: resposta});
            } catch (error) {
                res.status(400).json({mensagem: error.message});
            }  
        });

        app.put('/bilhetes/:id', async (req, res) => {
            try {
                const id = req.params.id;
                const bilheteAtualizado = new BilheteModel(...Object.values(req.body));
                const resposta = await BilheteMetodos.atualizaPorId(id, bilheteAtualizado);
                res.status(200).json({mensagem: resposta});
            } catch (error) {
                res.status(400).json({erro: error.mensagem});
            }  
        });

        app.delete('/bilhetes/:id', async (req, res) => {
            try {
                const id = req.params.id;
                const resposta = await BilheteMetodos.deletaPorId(id);
                res.status(201).json({mensagem: resposta});
            } catch (error) {
                res.status(400).json({erro: error.message});
            }  
        });

    }
}

export default BilheteController;