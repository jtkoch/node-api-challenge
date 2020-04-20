const express = require("express")
const router = express.Router()
const actions = require("../data/helpers/actionModel")
const projects = require("../data/helpers/projectModel")

router.get('/', async (req, res, next) => {
  try {
    const action = await actions.get()
    res.status(200).json(action)
  } catch(err) {
    next(err)
  }
})

router.get('/:id', async (req, res, next) => {
  try {
    const action = await actions.get(req.params.id)
    res.status(200).json(action)
  } catch(err) {
    next(err)
  }
})

router.post('/', async (req, res, next) => {
  try {
    const action = await actions.insert(req.body)
    res.status(201).json(action)
  } catch(err) {
    next(err)
  }
})

router.put('/:id', async (req, res, next) => {
  try {
    const action = await actions.update(req.params.id, req.body)
    res.status(200).json(action)
  } catch(err) {
    next(err)
  }
})

router.delete('/:id', async (req, res, next) => {
  try {
    await actions.remove(req.params.id)
    res.status(200).end()
  } catch(err) {
    next(err)
  }
})


module.exports = router;