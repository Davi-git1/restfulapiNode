const mongoose = require("mongoose");

const TodoSchema = new mongoose.Schema({
  titulo: {
    type: String
  },
  descricao: {
    type: String, required: true 
}
});

module.exports = mongoose.model("Todo", TodoSchema);