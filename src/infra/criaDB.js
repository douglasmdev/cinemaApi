// import DatabaseMetodos from "../DAO/DatabaseMetodos.js";
import ClienteMetodos from "../DAO/ClienteMetodos.js";
try {
    // DatabaseMetodos.ativaChavesEstrangeiras();
    const criaTabelaClientes = await ClienteMetodos.criaTabela(); 
} catch (error) {
    console.log(error.message);
}