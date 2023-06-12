const express = require('express')
const app = express()
const routes = require("./routes/index.js")
require('dotenv').config()
const port = process.env.PORT || 6000

const helmet = require('helmet');
const cors = require('cors');
const morgan = require('morgan');

app.use(express.json());
app.use(helmet());
app.use(cors());
app.use(morgan('combined')); 

app.use("/", routes)



app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});

