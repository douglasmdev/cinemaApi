import Database from "../infra/Database.js";

class FilmeMetodos {
    static criaTabela() {
        const query = `
        CREATE TABLE IF NOT EXISTS filmes (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nome VARCHAR,
            tipo VARCHAR,
            genero VARCHAR, 
            descricao VARCHAR,
            lancamento VARCHAR
        )
        `;

        return new Promise((resolve, reject) => {
            Database.run(query, error => {
                if (error) reject(error.message);
                else resolve('tabela filme criada com sucesso!');
            });
        });
    }

    static insereFilme(filme) {
        const query = `INSERT INTO filmes VALUES (?,?,?,?,?,?)`;
        const filmeArr = Object.values(filme);
        return new Promise((resolve, reject) => {
            Database.run(query, filmeArr, error => {
                if (error) reject(error.message);
                else resolve('filme inserido com sucesso!');
            });
        });
    }

    static listaFilme() {
        const query = 'SELECT * FROM filmes';
        return new Promise((resolve, reject) => {
            Database.all(query, (error, registros) => {
                if (error) reject(error.message);
                else resolve({filme:registros});
            });
        });
    }

    static listaFilmePorId(id) {
        const query = `SELECT * FROM filmes WHERE id=${id}`;
        return new Promise((resolve, reject) => {
            Database.all(query,(error, registros) => {
                if (error) reject(error.message);
                else resolve({filme:registros});
            });
        });
    }

    static atualizaPorId(id, filme) {
        const query = `UPDATE filmes SET(id,nome,tipo,genero,descricao,lancamento)=(?,?,?,?,?,?) WHERE id=${id}`;
        const filmeArr = Object.values(filme);
        return new Promise((resolve, reject) => {
            Database.run(query, filmeArr, error => {
                if (error) reject(error.message)
                else resolve('Filme atualizado com sucesso!');
            });
        });
    }

    static deletaPorId(id) {
        const query = `DELETE FROM filmes WHERE id=${id}`;
        return new Promise((resolve, reject) => {
            Database.run(query, error => {
                if (error) reject(error.message)
                else resolve('Filme deletado com sucesso!');

            });
        });
    }
    
}

export default FilmeMetodos;