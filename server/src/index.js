const config = require('../config/config')
const authorController = require('./controllers/authorController.js')
const convertController = require('./controllers/convertController.js');
const userController = require('./controllers/userController.js');

const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

const session = require('express-session');
const MongoStore = require('connect-mongo');

const app = express()
const authorRouter = express.Router()
const convertRouter = express.Router()
const userRouter = express.Router()

mongoose.connect('mongodb://localhost:27017/bookstore')

app.use(session({
    secret: 'foo',
    resave: true,
    saveUninitialized: true,
    store: MongoStore.create({ mongoUrl: 'mongodb://localhost:27017/bookstore' })
  }));

app.use(cors(
    {
        origin: 'http://localhost:8080',
        credentials: true,
        // exposedHeaders: ['set-cookie']
    }
))

app.listen(process.env.PORT || config.port,
    () => console.log(`Server start on port ${config.port} ...`))


authorRouter.get("/", authorController.index);
authorRouter.get("/:id", authorController.getAuthor);
authorRouter.post("/", authorController.createAuthor);
authorRouter.put("/:id", authorController.updateAuthor);
authorRouter.delete("/:id", authorController.deleteAuthor);

convertRouter.get('/', convertController.convertSum);
convertRouter.post('/', convertController.convertSum);

userRouter.post('/registration', userController.register);
userRouter.post('/login', userController.login);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/convert", convertRouter);
app.use("/user", userRouter);
app.use("/authors", authorRouter);