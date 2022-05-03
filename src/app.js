import express from "express";
import * as dotenv from "dotenv";
import ClienteController from "./controllers/ClienteController.js"; 
import LojaController from "./controllers/LojaController.js"
import FilmeController from "./controllers/FilmeController.js";
import BilheteController from "./controllers/BilheteController.js";

dotenv.config();
const port = process.env.PORT || 3001;

const app = express();
app.use(express.json());

app.listen(port, () => {
    console.log(`Servidor lançado na porta ${port}`);
});

ClienteController.rotas(app);
LojaController.rotas(app);
FilmeController.rotas(app);
BilheteController.rotas(app);