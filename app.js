const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

//Traigo ruta
const mainRoute = require("./routes/main");

//Middlewares
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(cors());
app.use("/streams", mainRoute);

//Conecto a MongoDB
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Conectado a MongoDB");
  });

mongoose.connection.on("error", (err) => {
  console.log(`Error de conexión con MongoDB: ${err.message}`);
});

//Levanto server
const port = 4000;
app.listen(port, () => {
  console.log(`El servidor está corriendo en el puerto ${port}`);
});
