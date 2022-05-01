import LojaMetodos from "../DAO/LojaMetodos.js";
import LojaModel from "../models/LojaModel.js";

class LojaController {
    static rotas(app) {
        app.post('/lojas', async (req, res) => {
            try {
                const Loja = new LojaModel(...Object.values(req.body));
                const resposta = await LojaMetodos.insereLojas(Loja);
                res.status(201).json({mensagem: resposta});
            } catch (error) {
                res.status(401).json({erro: error.message});
            }
        });

        app.get('/lojas', async (req, res) => {
            try {
                const resposta = await LojasMetodos.listaLojas();
                res.status(200).json({mensagem: resposta});
            } catch (error) {
                res.status(400).json({erro: error.message});
            }
        });

        app.get('/lojas/:id', async (req, res) => {
            try {
                const id = req.params.id;
                const resposta = await LojasMetodos.listaLojaPorId(id);
                res.status(200).json({mensagem: resposta});
            } catch (error) {
                res.status(400).json({erro: error.message});
            }
        });

        app.put('/lojas/:id', async (req, res) => {
            try {
                const id = req.params.id;
                const lojaAtualizada = new LojaModel(...Object.values(req.body));
                const resposta = await LojasMetodos.atualizaPorid(id, lojaAtualizada);
                res.status(202).json({mensagem: resposta});
            } catch (error) {
                res.status(402).json({erro: error.message});
            }
        });

        app.delete('/lojas/:id', async (req, res) => {
            try {
                const id = req.params.id;
                const resposta = await LojasMetodos.deletaPorid(id);
                res.status(203).json({mensagem: resposta});
            } catch (error) {
                res.status(403).json({erro: error.message});
            }
        });
    }
}

export default LojaController;