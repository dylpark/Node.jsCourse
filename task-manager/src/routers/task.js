// Dylan Park, 2021.
// The Complete Node.js Developer Course (3rd Edition)

const express = require('express')
const Task = require('../models/task')
const taskRouter = new express.Router()
const auth = require('../middleware/auth')

// Create Task
taskRouter.post('/tasks', auth, async(req, res) => {
    const task = new Task({
        ...req.body,
        owner: req.user._id
    })

    try {
        await task.save()
        res.status(201).send(task)
    } catch (e) {
        res.status(400).send(e)
    }
})

// Read Tasks
taskRouter.get('/tasks', auth, async(req, res) => {
    try {
        const tasks = await Task.find({ owner: req.user._id })
        res.send(tasks)
    } catch (e) {
        res.status(500).send()
    }
})

// Read Task (Singular)
taskRouter.get('/tasks/:id', auth, async(req, res) => {
    const _id = req.params.id

    try {
        const task = await Task.findOne({ _id, owner: req.user._id })

        if (!task) {
            return res.status(404).send()
        }
        res.send(task)
    } catch (e) {
        res.status(500).send()
    }
})

// Update Task
taskRouter.patch('/tasks/:id', auth, async(req, res) => {
    const updates = Object.keys(req.body)
    const allowedUpdates = ['description', 'completed']
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

    if (!isValidOperation) {
        return res.status(400).send({ error: 'Invalid updates!' })
    }

    try {
        const task = await Task.findOne({ _id: req.params.id, owner: req.user._id })

        if (!task) {
            return res.status(404).send()
        }
        updates.forEach((update) => task[update] = req.body[update])
        await task.save()

        res.send(task)
    } catch (e) {
        res.status(400).send(e)
    }
})

// Delete Task (Singular)
taskRouter.delete('/tasks/:id', auth, async function(req, res) {
    try {
        const task = await Task.findOneAndDelete({ _id: req.params.id, owner: req.user._id })

        if (!task) {
            return res.status(404).send({ error: 'Task not found' })
        }
        res.send(task)

    } catch (e) {
        res.status(500).send()
    }
})

module.exports = taskRouter