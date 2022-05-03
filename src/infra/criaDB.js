import DatabaseMetodos from "../DAO/DatabaseMetodos.js";
import FilmeMetodos from "../DAO/FilmeMetodos.js";

try {
    // DatabaseMetodos.ativaChavesEstrangeiras();
    await FilmeMetodos.criaTabela();
    const criaTabalelaFilme = await FilmeMetodos.criaTabela();
        console.log(criaTabelaFilme);
} catch (error) {
    console.log(error.message);
}