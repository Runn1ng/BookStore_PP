const config = require('../config/config')
const authorController = require('./controllers/authorController.js')

const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

const app = express()
const authorRouter = express.Router()

mongoose.connect('mongodb://localhost:27017/bookstore')

app.use(cors())


app.listen(process.env.PORT || config.port,
    () => console.log(`Server start on port ${config.port} ...`))


authorRouter.get("/", authorController.index);
authorRouter.get("/:id", authorController.getAuthor);
authorRouter.post("/", authorController.createAuthor);
authorRouter.put("/:id", authorController.updateAuthor);
authorRouter.delete("/:id", authorController.deleteAuthor);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/authors", authorRouter);