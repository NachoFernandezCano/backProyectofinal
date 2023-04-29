const express = require("express");
const dotenv = require("dotenv");
const app = express();
dotenv.config();
const cors = require("cors");
const connectDb = require("./Db/connectDb");
const router = require("./routes");
let port = process.env.API_PORT || 3000;

connectDb();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/api", router);

app.get("/", (req, res) => {
    res.json({ message: "Backend encontrado" });
});

app.listen(port,'0.0.0.0', () => console.log("Servidor funcionando"));
