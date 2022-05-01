import express from "express";
import * as dotenv from "dotenv";

dotenv.config();
const port = process.env.PORT || 3001;

const app = express();
app.use(express.json());

app.listen(port, () => {
    console.log(`Servidor lançado na porta ${port}`);
});