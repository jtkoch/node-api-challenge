const express = require("express")
const cors = require("cors")
const actionRouter = require("./routes/actionRouter")
const projectRouter = require("./routes/projectRouter")

const server = express()
const port = 9000

server.use(express.json())
server.use(cors())
server.use("/api/actions", actionRouter)
server.use("/api/projects", projectRouter)

server.get("/", (req, res) => {
  res.status(200).json({
    message: "Main route is working fine"
  })
})

server.use((err, req, res, next) => {
  console.log(err)
  res.status(500).json({
    message: "Something went wrong",
  })
})

server.listen(port, () => {
  console.log(`Server is listening on http://localhost:${port}`)
})