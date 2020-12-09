require("dotenv").config();
const express = require("express");
const massive = require("massive");
const productsController = require("./productsController");

const app = express();

const { SERVER_PORT, CONNECTION_STRING } = process.env;

massive({
connectionString: CONNECTION_STRING,
ssl: {rejectUnauthorized: false}
})
  .then(dbInstance => {
    console.log("db ready")
    app.set("db", dbInstance);
  })
  .catch(err => console.log(err));

app.use(express.json());

app.post('/api/products', productsController.create);
app.get('/api/products', productsController.getAll);
app.get('/api/products/:id', productsController.getOne);
app.put('/api/products/:id', productsController.update);
app.delete('/api/products/:id', productsController.delete);

app.listen(SERVER_PORT, () => {
  console.log(`Server listening on port ${SERVER_PORT}.`);
});

