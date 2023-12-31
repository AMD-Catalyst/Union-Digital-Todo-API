const Todo = require("../models/Todo")

//New Todo
const newTodo = async (req, res) => {
    try {

        const {title,description} = req.body;

        if(!title) return res.status(400).json({message: "Title is required"});
        if(!description) return res.status(400).json({message: "Description is required."});

        const newTodo = new Todo(req.body);

        const savedTodo = await newTodo.save();
        res.status(201).json({ message: "Successfully Added" , data: savedTodo})
    } catch (error) {
        res.status(500).json(error);
    }
}

//Update Todo
const updateTodo = async (req, res) => {
    try {
        const { id } = req.params;

        const {title,description} = req.body;

        if(!title) return res.status(400).json({message: "Title is required"});
        if(!description) return res.status(400).json({message: "Description is required."});

        const updateTodo = await Todo.findByIdAndUpdate(
            id,
            {
                $set: req.body,
            },
            { new: true }
        )

        if (!updateTodo) return res.status(400).json({ message: 'Record not found.'});

        res.status(200).json({ message: "Successfully Updated" , data: updateTodo})
    } catch (error) {
        res.status(500).json(error);
    }
}

//Delete Todo
const deleteTodo = async (req,res) => {
    try {
        const { id } = req.params;

        const deleteTodo = await Todo.findByIdAndDelete(id);

        if(!deleteTodo) return res.status(400).json({message: 'Record not found.'})

        res.status(200).json({ message: "Successfully Deleted" , data: deleteTodo});

    } catch (error) {
        res.status(500).json(error);
    }
}

//Get All Todo
const getAllTodo = async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 5;
        
        let startP = (page - 1 ) * limit;
        const endP = ((page - 1) + 1) * limit;

        const result = {};
        const totalTodo = await Todo.countDocuments().exec();
        result.totalRecords = totalTodo; 

        if (startP > 0){
            result.previous = {
                page: page-1,
                limit: limit
            }
        }

        if (endP < totalTodo){
            result.next = {
                page: page + 1,
                limit: limit
            }
        }

        result.data = await Todo.find().sort("-updatedAt")
            .skip(startP)
            .limit(limit)
            .exec()

        res.status(200).json(result);
    } catch (error) {
        res.status(500).json(error);
    }
}

//Update Status
const updateStatus = async (req, res) => {
    try {
        const { id } = req.params;

        const {isDone} = req.body;

        if(isDone === undefined) return res.status(400).json({message: "isDone is required"});
        
        const updateTodo = await Todo.findByIdAndUpdate(
            id,
            {
                $set: req.body,
            },
            { new: true }
        )

        if (!updateTodo) return res.status(400).json({ message: 'Record not found.'});

        res.status(200).json({ message: "Todo Status Updated" , data: updateTodo})
    } catch (error) {
        res.status(500).json(error);
    }
}

module.exports = {
    newTodo,
    updateTodo,
    deleteTodo,
    getAllTodo,
    updateStatus
}