const express = require('express');
require("./config/db");
const tarefasRoutes = require("./routes/todoRoutes");
const Todo = require("./models/Todo");
const app = express();
const PORT = 8080;
const cors = require("cors");

app.use(cors());
app.use(express.json());

app.get("/", function (req, res) {
    res.sendFile(__dirname + "front-end.html");
});



app.delete("/postar/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const tarefas = await Todo.findByIdAndDelete(id);
        if (!tarefas) {
            return res.status(404).json({ erro: "Taferas não encontrada!" });
        }
        res.status(204).send()
    } catch (error) {
        res.status(500).json({ erro: "Erro ao remover tarefa" });
    }
});

app.get("/mostrar", async (req, res) => {
    try {
        const mostrar = await Todo.find();
        res.json(mostrar);
    } catch (err) {
        console.error("Erro!", err);
        res.status(500).json({ error: "Erro ao buscar dados no banco" });
    };
});

app.use("/tarefas", tarefasRoutes);



app.listen(PORT, function () {
    console.log("Servidor rodando na url http://localhost:8080");
});