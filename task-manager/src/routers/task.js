// Dylan Park, 2021.
// The Complete Node.js Developer Course (3rd Edition)

const express = require('express')
const Task = require('../models/task')
const taskRouter = new express.Router()

// Create Task
taskRouter.post('/tasks', async(req, res) => {
    const task = new Task(req.body)

    try {
        await task.save()
        res.status(201).send()
    } catch (e) {
        res.status(400).send(e)
    }
})

// Read Tasks
taskRouter.get('/tasks', async(req, res) => {
    try {
        const tasks = await Task.find({})
        res.send(tasks)
    } catch (e) {
        res.status(500).send()
    }
})

// Read Task (Singular)
taskRouter.get('/tasks/:id', async(req, res) => {
    const _id = req.params.id

    try {
        const task = await Task.findById(_id)
        if (!task) {
            return res.status(404).send()
        }
        res.send(task)
    } catch (e) {
        res.status(500).send()
    }
})

// Update Task
taskRouter.patch('/tasks/:id', async(req, res) => {
    const updates = Object.keys(req.body)
    const allowedUpdates = ['description', 'completed']
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

    if (!isValidOperation) {
        return res.status(400).send({ error: 'Invalid Updates' })
    }

    try {
        const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidation: true })

        if (!task) {
            return res.status(404).send()
        }
        res.send(task)

    } catch (e) {
        res.status(400).send(e)
    }
})

// Delete Task (Singular)
taskRouter.delete('/tasks/:id', async function(req, res) {
    try {
        const task = await Task.findByIdAndDelete(req.params.id)

        if (!task) {
            return res.status(404).send({ error: 'Task not found' })
        }
        res.send(task)

    } catch (e) {
        res.status(500).send()
    }
})

module.exports = taskRouter