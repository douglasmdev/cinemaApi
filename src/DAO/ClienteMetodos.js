import Database from "../infra/Database.js";

class ClienteMetodos{
    static listaClientes() {
        const query = 'SELECT * FROM clientes';
        return new Promise((resolve, reject) => {
            Database.all(query, (error, registros) => {
                if (error) reject(error.message)
                else resolve({clientes: registros});    
            });
        });
    }

    static listaClientePorCpf(cpf) {
        const query = `SELECT * FROM clientes WHERE cpf = ${cpf}`;
        return new Promise((resolve, reject) =>{
            Database.all(query,(error, registros) => {
                if (error) reject(error.message)
                else resolve({clientes: registros});
            });
        });
    }

    static insereCliente(cliente){
        const query = `INSERT INTO clientes VALUES (?,?,?,?)`
        const clienteArr = Object.values(cliente);
        return new Promise ((resolve, reject) => {
            Database.run(query, clienteArr, error => {
                if(error) reject(error.message)
                else resolve('Cliente inserido com sucesso!');
            }); 
        });
    }

    static atualizaPorCpf(cpf, cliente) {
        const query = `UPDATE clientes SET(cpf,nome,tel,email)=(?,?,?,?) WHERE cpf=${cpf}`;
        const clienteArr = Object.values(cliente);
        return new Promise((resolve, reject) => {
            Database.run(query, clienteArr, error => {
                if (error) reject(error.message)
                else resolve('Cliente atualizado com sucesso!');
            });
        });
    }

    static deletaPorCpf(cpf) {
        const query = `DELETE FROM clientes WHERE cpf=${cpf}`;
        return new Promise((resolve, reject) => {
            Database.run(query, error => {
                if (error) reject(error.message)
                else resolve('Cliente deletado com sucesso!');

            });
        });
    }
}

export default ClienteMetodos