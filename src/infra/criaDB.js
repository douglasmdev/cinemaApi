import DatabaseMetodos from "../DAO/DatabaseMetodos.js";

try {
    DatabaseMetodos.ativaChavesEstrangeiras();
} catch (error) {
    console.log(error.message);
}