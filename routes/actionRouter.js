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

router.get('/:id', validateProject, async (req, res, next) => {
  try {
    const action = await actions.get(req.params.id)
    res.status(200).json(action)
  } catch(err) {
    next(err)
  }
})

router.post('/', validateProject, async (req, res, next) => {
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

function validateProject(req, res, next) {
  console.log(req.body.project_id)
  projects.get(req.body.project_id).then((res) => {
    if (res === null) {
      res.status(400).json({
        error: "Please enter a valid project id.",
      })
    } else {
      next()
    }
  })
}


module.exports = router;