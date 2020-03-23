const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const helmet = require('helmet');
const morgan = require('morgan');

const httpError = require('./models/http-error');
const toodosRouter = require('./router/todosRouter');
const userRouter = require('./router/userRouter');

const app = express();
require('dotenv').config();

//for cors problem
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin,X-Requested-With, Content-Type, Accept, Authorization'
  );
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');
  next();
});

//Middleware
app.use('/image', express.static('images'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(morgan('dev'));
app.use(helmet());

app.use('/', toodosRouter);
app.use('/', userRouter);
app.use((error, req, res, next) => {
  if (error.name === 'UnauthorizedError') {
    res.status(401).json({ error: 'invalid token...' });
  }
});
app.use((req, res, next) => {
  const error = new httpError('not found for this route', 404);
  next(error);
});

const connectDB = async (req, res, next) => {
  try {
    await mongoose.connect(process.env.mongoURI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: true
    });
    console.log('DB connected...');
  } catch (error) {
    next(new httpError('failed Connect to DB', 500));
  }
};

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on ${port}`));
connectDB();
