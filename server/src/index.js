const config = require('../config/config')

const bookController = require('./controllers/bookController.js')
const userController = require('./controllers/userController.js')

const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()
const userRouter = express.Router()
const bookRouter = express.Router()

app.use(bodyParser.json())
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

app.use('/books', bookRouter);