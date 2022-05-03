import DatabaseMetodos from "../DAO/DatabaseMetodos.js";
import FilmeMetodos from "../DAO/FilmeMetodos.js";

try {
    // DatabaseMetodos.ativaChavesEstrangeiras();
    const criaTabelaFilme = await FilmeMetodos.criaTabela();
    console.log(criaTabelaFilme);
} catch (error) {
    console.log(error.message);
}