import cors from 'cors';
import express from 'express';
import {
    ApolloServer
} from 'apollo-server-express';

import 'dotenv/config';
import models, {
    sequelize
} from './models';
const app = express();

app.use(cors());

const server = new ApolloServer({});

server.applyMiddleware({
    app,
    path: '/CF'
});

app.listen({
    port: 5432
}, () => {
    console.log('Apollo Server on http://localhost:5432/CF');
});




sequelize.sync().then(async () => {
    app.listen({
        port: 5432 // you could change this to process.env.PORT if you wish
    }, () => {
        console.log('Apollo Server on http://localhost:5432/CF');
    });
});