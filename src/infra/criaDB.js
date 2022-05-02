import DatabaseMetodos from "../DAO/DatabaseMetodos.js";
import LojaMetodos from "../DAO/LojaMetodos.js"

try {
    // DatabaseMetodos.ativaChavesEstrangeiras();
    await LojaMetodos.criaTabela();
} catch (error) {
    console.log(error.message);
}