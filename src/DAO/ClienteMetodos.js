import Database from "../infra/Database";

class ClienteMetodos{
    static listaClientes() {
        const query = 'SELECT * FROM clientes';
        return new Promise((resolve, reject) =>{
            Database.all(query, (error, registros) => {
                if (error) reject(error.message);
                else resolve({clientes: registros});    
            });
        });
    }
}