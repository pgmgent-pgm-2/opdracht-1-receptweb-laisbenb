const express = require('express');
const middleware = require('./middleware/development');
const app = express();
const recipeRoutes = require('./routes/recipeRoutes');
const cors = require('cors');
require('dotenv').config();

app.use(cors());
app.use(recipeRoutes);

app.listen(process.env.API_URL, () => {
    console.log(`Server is gestart op poort ${process.env.API_URL}!`);
});