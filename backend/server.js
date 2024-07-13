const express = require('express');
const connectToMongo = require('./db');
const app = express();
const port = 5000;
connectToMongo();
const cors = require('cors');

app.use(cors());
app.use(express.json());

app.use('/api/auth', require('./routes/auth'));
app.use('/api/notes', require('./routes/notes'));

app.listen(port, () => {
    console.log(`Port listening at http://localhost:${port}`);
})