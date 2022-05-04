import FilmeModel from "../models/FilmeModel.js";
import FilmeMetodos from "../DAO/FilmeMetodos.js";
import FilmeValidacoes from "../services/FilmeValidacoes.js";

class FilmeController {
    static rotas(app) {
        app.post('/filmes', async (req, res) => {
            const filmeValido = FilmeValidacoes.validaNome(req.body.nome) &&
                                FilmeValidacoes.validaTipo(req.body.tipo) &&
                                FilmeValidacoes.validaGenero(req.body.genero) &&
                                FilmeValidacoes.validaDescricao(req.body.descricao) &&
                                FilmeValidacoes.validaLancamento(req.body.lancamento);
            try {
                if (filmeValido) {
                    const filme = new FilmeModel(...Object.values(req.body));
                    const resposta = await FilmeMetodos.insereFilme(filme);
                    res.status(201).json({mensagem: resposta});
                } else {
                    throw new Error('Requisição fora dos padrões.');
                }
            } catch (error) {
                res.status(400).json({erro: error.message});
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
                res.status(200).json({mensagem: resposta});
            } catch (error) {
                res.status(400).json({erro: error.message});
            }
        });

        app.delete('/filmes/:id', async (req, res) => {
            try {
                const id = req.params.id;
                const resposta = await FilmeMetodos.deletaPorId(id); 
                res.status(200).json({mensagem: resposta});
            } catch (error) {
                res.status(400).json({erro: error.message});
            }            
        });

    }
}

export default FilmeController;