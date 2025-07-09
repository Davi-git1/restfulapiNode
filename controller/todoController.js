const Todo = require("../models/Todo");

exports.createTarefa = async (req, res) => {
    const { titulo, descricao } = req.body;
    if (!descricao || !titulo) {
        return res.status(400).json({ erro: "Preencha descrição/titulo" })
    }
    try {
        const novaTarefa = new Todo({titulo, descricao });
        await novaTarefa.save();
        res.status(201).json(novaTarefa);
    } catch (error) {
        res.status(500).json({ erro: "Erro ao iniciar tarefa" });
    }
};

exports.updateTarefa = async (req, res) => {
  const { id } = req.params;
  const { titulo } = req.body;
  const { descricao } = req.body;
  if (!descricao) {
    return res.status(400).json({ erro: "Preencha a nova descrição!" });
  }
  try {
   const tarefas = await Todo.findByIdAndUpdate(
   id,
   { titulo,descricao },
   { new: true }
  )
  if (!tarefas) {
   return res.status(404).json({ erro: "Tarefa não existe!" })
  }
  res.json(tarefas)
  } catch (error) {
   res.status(500).json({ error: "Erro ao buscar dados no banco" });
  }
};