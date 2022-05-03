import DatabaseMetodos from "../DAO/DatabaseMetodos.js";
import FilmeModel from "../models/FilmeModel.js";
import FilmeMetodos from "../DAO/FilmeMetodos.js";

class FilmeController {
    static rotas(app) {
        app.post('/filmes', async (req, res) => {
            try {
                const filme = new FilmeModel(...Object.values(req.body));
                const resposta = await FilmeMetodos.insereFilme(filme);
                res.status(201).json({mensagem: resposta});
            } catch (error) {
                res.status(401).json({erro: error.message});
            }
        });

        app.get('/filmes', async (req, res) => {
            try {
                const resposta = await FilmeMetodos.listaFilme();
                res.status(200).json({mensagem: resposta});
            } catch (error) {
                res.status(400).json({erro: error.message});
            }
        });

        app.get('/filmes/:id', async (req, res) => {
            try {
                const id = req.params.id;
                const resposta = await FilmeMetodos.listaFilmePorId(id);
                res.status(200).json({mensagem: resposta});
            } catch (error) {
                res.status(400).json({erro: error.message});
            }
        });

        app.put('/filmes/:id', async (req, res) => {
            try {
                const id = req.params.id;
                const filmeAtualizado = new FilmeModel(...Object.values(req.body));
                const resposta = await FilmeMetodos.atualizaPorId(id, filmeAtualizado);
                res.status(202).json({mensagem: resposta});
            } catch (error) {
                res.status(402).json({erro: error.message});
            }
        });

        app.delete('/filmes/:id', async (req, res) => {
            try {
                const id = req.params.id;
                const resposta = await FilmeMetodos.deletaPorId(id); 
                res.status(203).json({mensagem: resposta});
            } catch (error) {
                res.status(403).json({erro: error.message});
            }            
        });

    }
}

export default FilmeController;