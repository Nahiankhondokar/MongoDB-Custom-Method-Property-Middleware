import express from 'express';
import dotenv from "dotenv";
import colors from 'colors';
import mongoDBConnection from './db.js';
import testController from './controller/testController.js';

dotenv.config();
const app = express();

const PORT = process.env.PORT || 9000;


testController();








app.listen(PORT, () => {
    mongoDBConnection();
    console.log(`server is runnin on ${PORT}`.bgYellow);

});