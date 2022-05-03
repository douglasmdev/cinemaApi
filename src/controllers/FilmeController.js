import DatabaseMetodos from "../DAO/DatabaseMetodos.js";
import FilmeModel from "../models/FilmeModel.js";

class FilmeController {
    static rotas(app) {
        app.post('/filme', async (req, res) => {
            try {
                const filme = new FilmeModel(...Object.values(req.body));
                const resposta = await DatabaseMetodos.insereFilme(filme);
                res.status(201).json({mensagem: resposta});
            } catch (error) {
                res.status(401).json({erro: error.message});
            }
        });

        app.get('/filme', async (req, res) => {
            try {
                const resposta = await DatabaseMetodos.listaFilme();
                res.status(200).json({mensagem: resposta});
            } catch (error) {
                res.status(400).json({erro: error.message});
            }
        });

        app.get('/filme/:id', async (req, res) => {
            try {
                const id = req.params.id;
                const resposta = await DatabaseMetodos.listaFilmePorId(id);
                res.status(200).json({mensagem: resposta});
            } catch (error) {
                res.status(400).json({erro: error.message});
            }
        });

        app.put('/filme/:id', (req, res) => {
            res.send('filme atualizado com sucesso!');
        });

        app.delete('/filme/:id', (req, res) => {
            res.send('filme deletado com sucesso!');
        });
    }
}

export default FilmeController;