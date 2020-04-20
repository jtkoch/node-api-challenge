const express = require("express")
const router = express.Router()
const projects = require("../data/helpers/projectModel")

router.get('/', async (req, res, next) => {
  try {
    const project = await projects.get()
    res.status(200).json(project)
  } catch(err) {
    next(err)
  }
})

router.get('/:id', async (req, res, next) => {
  try {
    const project = await projects.getProjectActions(req.params.id)
    res.status(200).json(project)
  } catch(err) {
    next(err)
  }
})

router.post('/', async (req, res, next) => {
  try {
    const project = await projects.insert(req.body)
    res.status(201).json(project)
  } catch(err) {
    next(err)
  }
})

router.put('/:id', async (req, res, next) => {
  try {
    const project = await projects.update(req.params.id, req.body)
    res.status(200).json(project)
  } catch(err) {
    next(err)
  }
})

router.delete('/:id', async (req, res, next) => {
  try {
    await projects.remove(req.params.id)
    res.status(200).end()
  } catch(err) {
    next(err)
  }
})


module.exports = router;