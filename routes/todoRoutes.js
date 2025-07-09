const express = require("express");
const todoController = require("../controller/todoController");

const router = express.Router();
router.post("/", todoController.createTarefa);
router.get("/tarefas", todoController.armazenaTarefa);
router.put("/:id", todoController.updateTarefa);

module.exports = router;