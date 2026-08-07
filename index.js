import 'dotenv/config';
import express from 'express'; 


const port = process.env.PORT || 3000;
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        message: "Funcionando"
    });
});

app.listen(port, () => {
    console.log(`Backend rodando na porta ${port}!`);
});