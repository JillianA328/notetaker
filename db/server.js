const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;


//Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express,json());
app.use(express.static("public"));

Routes
app.use("./routes/apiRoutes");
app.use("./routes/htmlRoutes");

app.listen(PORT, () => {
    console.log(`Server is on ${PORT}`);
});