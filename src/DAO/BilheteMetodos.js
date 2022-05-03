import Database from "../infra/Database.js";

class BilheteMetodos {
    static criaTabela() {
        const query = `
        CREATE TABLE IF NOT EXISTS bilhetes (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            cpfCliente VARCHAR,
            idFilme INTEGER,
            idLoja INTEGER,
            FOREIGN KEY (cpfCliente) REFERENCES clientes (cpf),
            FOREIGN KEY (idFilme) REFERENCES filmes (id),
            FOREIGN KEY (idLoja) REFERENCES lojas (id)
        )`;

        return new Promise ((resolve, reject) => {
            Database.run(query, error =>{
                if (error) reject(error.message);
                else resolve('Tabela bilhetes criada com sucesso!');
            });
        }); 
    }

}

export default BilheteMetodos;