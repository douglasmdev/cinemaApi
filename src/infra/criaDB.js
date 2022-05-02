import ClienteMetodos from "../DAO/ClienteMetodos.js";
import DatabaseMetodos from "../DAO/DatabaseMetodos.js";
import LojaMetodos from "../DAO/LojaMetodos.js"

try {
    DatabaseMetodos.ativaChavesEstrangeiras();
    const criaTabelaClientes = await ClienteMetodos.criaTabela(); 
    const criaTabelaLojas = await LojaMetodos.criaTabela();
    console.log(criaTabelaClientes);
    console.log(criaTabelaLojas);
} catch (error) {
    console.log(error.message);
}