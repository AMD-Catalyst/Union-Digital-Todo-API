const router = require("express").Router();

const {
    newTodo,
    updateTodo,
    deleteTodo,
    getAllTodo
} = require("../controllers/todo")

router.post('/new', newTodo);
router.put('/update/:id', updateTodo);
router.delete('/delete/:id', deleteTodo);
router.get('/', getAllTodo);

module.exports = router;