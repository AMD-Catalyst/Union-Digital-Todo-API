# Union-Digital-Todo-API

To Get List
http://localhost:5000/api/todo

http://localhost:5000/api/todo?page=1&limit=5

To Add Todo
http://localhost:5000/api/todo/new

Body
{
    "title": "Test",
    "description": "test description"
}

To Update Todo
http://localhost:5000/api/todo/update/{id}

Body
{
    "title": "Test",
    "description": "test description"
}

To Delete Todo
http://localhost:5000/api/todo/delete/{id}

To Update Status
http://localhost:5000/api/todo/update_status/{id}

Body 
{
    "isDone": true
}

Unit Tests
just type,
npm run test