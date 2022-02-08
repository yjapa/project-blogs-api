const express = require('express');
const bodyParser = require('body-parser');

const { userRouter, loginRouter } = require('./routes');
const middlewares = require('./controllers/middlewares');

const app = express();
app.use(bodyParser.json());

app.use('/login', loginRouter);
app.use('/user', userRouter);

app.use(middlewares.domainError);

app.use(middlewares.error);

app.listen(3000, () => console.log('ouvindo porta 3000!'));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});
