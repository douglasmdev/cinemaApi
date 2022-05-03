import ClienteMetodos from "../DAO/ClienteMetodos.js";
import DatabaseMetodos from "../DAO/DatabaseMetodos.js";
import LojaMetodos from "../DAO/LojaMetodos.js"
import FilmeMetodos from "../DAO/FilmeMetodos.js";
import BilheteMetodos from "../DAO/BilheteMetodos.js";

try {
    DatabaseMetodos.ativaChavesEstrangeiras();
    // const criaTabelaClientes = await ClienteMetodos.criaTabela(); 
    // const criaTabelaFilmes = await FilmeMetodos.criaTabela();
    // const criaTabelaLojas = await LojaMetodos.criaTabela();
    // console.log(criaTabelaClientes);
    // console.log(criaTabelaFilmes);
    // console.log(criaTabelaLojas);
    const criaTabelaBilhetes = await BilheteMetodos.criaTabela();
    console.log(criaTabelaBilhetes);
} catch (error) {
    console.log(error.message);
}