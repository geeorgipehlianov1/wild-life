const express = require('express');
const expressConfig = require('./config/express');
const databaseConfig = require('./config/database');
const routesConfig = require('./config/routes');
const { notFound } = require('./controllers/notFound');


start()

async function start() {
    const app = express();
    expressConfig(app);
    await databaseConfig(app);
    routesConfig(app);
    app.all('*', notFound)
    app.listen(3000, () => console.log('Server is listenning on port 3000...'))
}