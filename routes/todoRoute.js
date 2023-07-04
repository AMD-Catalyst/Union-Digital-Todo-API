const router = require("express").Router();

const {
    newTodo,
    updateTodo,
    deleteTodo,
    getAllTodo,
    updateStatus
} = require("../controllers/todo")

router.post('/new', newTodo);
router.put('/update/:id', updateTodo);
router.patch('/update_status/:id', updateStatus);
router.delete('/delete/:id', deleteTodo);
router.get('/', getAllTodo);

module.exports = router;