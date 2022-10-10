const mongoose = require("mongoose");
const express = require("express");
const app = express();

app.use(express.json());
app.use(require("./routes/twitter.route"));
app.use(require("./routes/comments.route"));
app.use(require("./routes/likes.route"));
app.use(require("./routes/saves.route"));
app.use(require("./routes/users.route"));

mongoose
  .connect(
    "mongodb+srv://Khizir:Khizir123@cluster0.w6mzslx.mongodb.net/twitter?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("Успешно соединились с сервером MongoDB"))
  .catch(() => console.log("Ошибка при соединении с сервером MongoDB"));

app.listen(4000, () => {
  console.log("Сервер запущен успешно");
});
