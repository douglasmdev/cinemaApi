import Database from "../infra/Database.js";

class LojaMetodos {
    static criaTabela() {
        const query = `
        CREATE TABLE IF NOT EXISTS lojas (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            idFilme INTEGER,
            salas INTEGER,
            assentos INTEGER,
            FOREIGN KEY (idFilmes) REFERENCES filmes (id)
        )
        `;

        return new Promise((resolve, reject) => {
            Database.run(query, error => {
                if (error) reject(error.message);
                else resolve('tabela lojas criada com sucesso!');
            });
        });
    }

    static insereLojas(loja) {
        const query = `INSERT INTO lojas VALUES (?,?,?,?)`;
        const lojasArr = Object.values(loja);
        return new Promise((resolve, reject) => {
            Database.run(query, lojasArr, error => {
                if (error) reject(error.message);
                else resolve('Loja inserido com sucesso!');
            });
        });
    }

    static listaLojas() {
        const query = 'SELECT * FROM lojas';
        return new Promise((resolve, reject) => {
            Database.all(query, (error, registros) => {
                if (error) reject(error.message);
                else resolve({lojas:registros});
            });
        });
    }

    static listaLojaPorId(id) {
        const query = `SELECT * FROM lojas WHERE id=${id}`;
        return new Promise((resolve, reject) => {
            Database.all(query,(error, registros) => {
                if (error) reject(error.message);
                else resolve({lojas:registros});
            });
        });
    }

    static atualizaPorId(id, loja) {
        const query = `UPDATE lojas SET(id,nome,tel,email)=(?,?,?,?) WHERE id=${id}`;
        const lojaArr = Object.values(loja);
        return new Promise((resolve, reject) => {
            Database.run(query, lojaArr, error => {
                if (error) reject(error.message)
                else resolve('loja atualizado com sucesso!');
            });
        });
    }

    static deletaPorid(id) {
        const query = `DELETE FROM lojas WHERE id=${id}`;
        return new Promise((resolve, reject) => {
            Database.run(query, error => {
                if (error) reject(error.message)
                else resolve('loja deletado com sucesso!');

            });
        });
    }
}

export default LojaMetodos;