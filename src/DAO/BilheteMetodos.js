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
    
    static insereBilhete(bilhete) {
        const query = `INSERT INTO bilhetes VALUES (?,?,?,?)`
        const bilheteArr = Object.values(bilhete);
        return new Promise ((resolve, reject) => {
            Database.run(query, bilheteArr, error => {
                if(error) reject(error.message);
                else resolve('Bilhete inserido com sucesso!');
            }); 
        });
    }
    
    static listaBilhetes() {
        const query = 'SELECT * FROM bilhetes';
        return new Promise((resolve, reject) => {
            Database.all(query, (error, registros) => {
                if (error) reject(error.message);
                else resolve({bilhetes: registros});    
            });
        });
    }

    static listaBilhetePorId(id) {
        const query = `SELECT * FROM bilhetes WHERE id = ${id}`;
        return new Promise((resolve, reject) =>{
            Database.all(query,(error, registros) => {
                if (error) reject(error.message);
                else resolve({bilhete: registros});
            });
        });
    }


}

export default BilheteMetodos;