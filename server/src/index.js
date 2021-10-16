const config = require('../config/config')

const bookController = require('./controllers/bookController.js')
const userController = require('./controllers/userController.js')
const authorController = require('./controllers/authorController.js')

const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')

const app = express()
const userRouter = express.Router()
const bookRouter = express.Router()
const authorRouter = express.Router()

mongoose.connect('mongodb://localhost:27017/bookstore')

app.use(cors())


app.listen(process.env.PORT || config.port,
    () => console.log(`Server start on port ${config.port} ...`))

app.get('/posts', (req, res) => {
    res.send(
        [{
            title: "Hello World!",
            description: "Hi there! How are you?"
        }]
    )
});

bookRouter.get('/', bookController.getBook);
bookRouter.post('/', bookController.createBook);
bookRouter.put('/:id', bookController.updateBook);
bookRouter.delete('/:id', bookController.deleteBook);

authorRouter.get("/", authorController.index);
authorRouter.get("/:id", authorController.getAuthor);
authorRouter.post("/", authorController.createAuthor);
authorRouter.put("/:id", authorController.updateAuthor);
authorRouter.delete("/:id", authorController.deleteAuthor);


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/books', bookRouter);
app.use("/authors", authorRouter);