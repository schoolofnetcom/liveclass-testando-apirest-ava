import test from 'ava';
import req from 'supertest';
import mongoose from 'mongoose';

import app from './../src/app';

test('TaskRoute::create - Should create a new task', async t => {
    const { status, body: { task } } = await req(app).post('/tasks').send({ title: 'Task 2' });

    t.is(status, 201);
    t.is(task.title, 'Task 2');
    t.true(mongoose.Types.ObjectId.isValid(task._id));
});

test('TaskRoute::findAll - Should find all tasks', async t => {
    const { status, body: { tasks } } = await req(app).get('/tasks');

    t.is(status, 200);
    t.true(Array.isArray(tasks));
});
