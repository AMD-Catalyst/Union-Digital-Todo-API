const app = require('../app')
const request = require('supertest')

describe('New todo', () => {
    it('return status 201 if successfully added', async()=>{
        const res = await request(app).post('/api/todo/new').send({
            title: "Test20",
            description: "test description20"
        })

        expect(res.statusCode).toEqual(201);
    })

    it('return bad request if title is missing', async()=>{
        const res = await request(app).post('/api/todo/new').send({
            description: "test description"
        })

        expect(res.statusCode).toEqual(400);
        expect(res.body.message).toEqual("Title is required");
    })

    it('return bad request if description is missing', async()=>{
        const res = await request(app).post('/api/todo/new').send({
            title: "Test"
        })

        expect(res.statusCode).toEqual(400);
        expect(res.body.message).toEqual("Description is required.");
    })
})

describe('Update todo', () => {
    it('return status 200 if successfully updated', async()=>{
        const res = await request(app).put('/api/todo/update/64a4137344dc569489f1ee62').send({
            title: "Test21",
            description: "test description21"
        })

        expect(res.statusCode).toEqual(200);
    })

    it('return bad request if title is missing', async()=>{
        const res = await request(app).put('/api/todo/update/64a4137344dc569489f1ee62').send({
            description: "test description21"
        })

        expect(res.statusCode).toEqual(400);
        expect(res.body.message).toEqual("Title is required");
    })

    it('return bad request if description is missing', async()=>{
        const res = await request(app).put('/api/todo/update/64a4137344dc569489f1ee62').send({
            title: "Test21"
        })

        expect(res.statusCode).toEqual(400);
        expect(res.body.message).toEqual("Description is required.");
    })

    it('return bad request if record not found', async()=>{
        const res = await request(app).put('/api/todo/update/64a3f2763837c08a5b58658b').send({
            title: "Test21",
            description: "test description21"
        })

        expect(res.statusCode).toEqual(400);
        expect(res.body.message).toEqual("Record not found.");
    })
})

describe('Update todo status', () => {
    it('return status 200 if successfully updated status', async()=>{
        const res = await request(app).patch('/api/todo/update_status/64a4137344dc569489f1ee62').send({
            isDone: true
        })

        expect(res.statusCode).toEqual(200);
    })

    it('return bad request if isDone is missing', async()=>{
        const res = await request(app).patch('/api/todo/update_status/64a4137344dc569489f1ee62')

        expect(res.statusCode).toEqual(400);
        expect(res.body.message).toEqual("isDone is required");
    })

})

describe('Delete todo', () => {
    it('return status 200 if successfully deleted', async()=>{
        const res = await request(app).delete('/api/todo/delete/64a3f2763837c08a5b58658b')

        expect(res.statusCode).toEqual(200);
    })

    it('return bad request if record not found', async()=>{
        const res = await request(app).delete('/api/todo/delete/64a3f4bc1cea715576761b82')

        expect(res.statusCode).toEqual(400);
        expect(res.body.message).toEqual("Record not found.");
    })

})

describe('Get todo', () => {
    it('return status 200 if successfully fetched', async()=>{
        const res = await request(app).get('/api/todo?page=1&limit=5')
        expect(res.statusCode).toEqual(200);
    })
})