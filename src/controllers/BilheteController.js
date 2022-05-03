import BilheteMetodos from "../DAO/BilheteMetodos.js";
import BilheteModel from "../models/BilheteModel.js";

class BilheteController {
    static rotas(app) {
        app.post('/bilhetes', async (req, res) => {
            try {
                const bilhete = new BilheteModel(...Object.values(req.body));
                const resposta = await BilheteMetodos.insereBilhete(bilhete);
                res.status(201).json({mensagem: resposta});
            } catch (error) {
                res.status(400).json({erro: error.message});
            } 
        });
    }
}

export default BilheteController;