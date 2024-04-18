const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());
const uri = "mongodb+srv://appuser:aKJ2chnsNFI0tZbC@cluster0.96fj9dt.mongodb.net/BookList?retryWrites=true&w=majority";
mongoose.connect(uri);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database successfully connected");
})

const bookListRouter = require('./routes/bookList.js');

app.use('/', bookListRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});