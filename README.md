# Union-Digital-Todo-API

To Get List
http://localhost:5000/api/todo
http://localhost:5000/api/todo?page=0&limit=5

To Add Todo
http://localhost:5000/api/todo/new

Body
{
    "title": "Test",
    "description": "test description"
}

To Update Todo
http://localhost:5000/api/todo/update/<id>

Body
{
    "title": "Test",
    "description": "test description",
    "isDone": true
}

To Delete Todo
http://localhost:5000/api/todo/delete/<id>