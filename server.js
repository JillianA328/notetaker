const express = require("express");
const routes = require("./routes");
const app = express();

const PORT = process.env.PORT || 3000;


//Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));


app.use(routes);
// app.use("./routes/htmlRoutes");

app.listen(PORT, () => {
    console.log(`Server is on ${PORT}`);
});