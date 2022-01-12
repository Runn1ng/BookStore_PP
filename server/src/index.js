const config = require('../config/config')
const authorController = require('./controllers/authorController.js')
const convertController = require('./controllers/convertController.js');
const userController = require('./controllers/userController.js');
const bookController = require('./controllers/bookController.js');
const publisherController = require('./controllers/publisherController.js');
const saleController = require('./controllers/saleController.js');
const purchaseController = require('./controllers/purchaseController.js');

const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

const session = require('express-session');
const MongoStore = require('connect-mongo');

const app = express()
const authorRouter = express.Router()
const convertRouter = express.Router()
const userRouter = express.Router()
const bookRouter = express.Router()
const publisherRouter = express.Router()
const saleRouter = express.Router()
const purchaseRouter = express.Router()

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


// Работа с издательством
publisherRouter.get("/", publisherController.index);
publisherRouter.get("/:id", publisherController.getPublisher);
publisherRouter.post("/", publisherController.createPublisher);
publisherRouter.put("/:id", publisherController.updatePublisher);
publisherRouter.delete("/:id", publisherController.deletePublisher);

// Работа с продажей
saleRouter.get("/", saleController.index);
saleRouter.get("/:id", saleController.getSale);
saleRouter.post("/", saleController.createSale);
saleRouter.put("/:id", saleController.updateSale);
saleRouter.delete("/:id", saleController.deleteSale);

// Работа с закупкой
purchaseRouter.get("/", purchaseController.index);
purchaseRouter.get("/:id", purchaseController.getPurchase);
purchaseRouter.post("/", purchaseController.createPurchase);
purchaseRouter.put("/:id", purchaseController.updatePurchase);
purchaseRouter.delete("/:id", purchaseController.deletePurchase);

// Работа с автором
authorRouter.get("/", authorController.index);
authorRouter.get("/:id", authorController.getAuthor);
authorRouter.post("/", authorController.createAuthor);
authorRouter.put("/:id", authorController.updateAuthor);
authorRouter.delete("/:id", authorController.deleteAuthor);

// Конвертация в валюту
convertRouter.get('/', convertController.convertSum);
convertRouter.post('/', convertController.convertSum);

// Авторизация
userRouter.post('/registration', userController.register);
userRouter.post('/login', userController.login);
userRouter.get('/:id', userController.getUser);

// Работа с каталогом
bookRouter.get('/', bookController.index);
bookRouter.post('/', bookController.createBook);
bookRouter.get('/:id', bookController.getBook);
bookRouter.put('/:id', bookController.updateBook);
bookRouter.delete('/:id', bookController.deleteBook);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/convert", convertRouter);
app.use("/authors", authorRouter);
app.use("/books", bookRouter);
app.use("/user", userRouter);
app.use("/purchase", purchaseRouter);
app.use("/sale", saleRouter);
app.use("/publisher", publisherRouter);