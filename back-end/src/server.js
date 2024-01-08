const express = require('express');
const middleware = require('./middleware/development');
const app = express();
const userRoutes = require('./routes/userRoutes');

app.use(middleware.logData);
app.use(userRoutes);

app.listen(3000, () => {
    console.log('Server is gestart op poort 3000!');
});