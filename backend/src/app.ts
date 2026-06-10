import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import medicalCategories from './api/routes/categories.routes.js';

dotenv.config();

const PORT = process.env.PORT || 3001;
const API_BASE_URL = process.env.API_BASE_URL || 'http://localhost:3001';
const API_BASE_PATH = '/api';

const app = express();
app.use(cors());

app.use(API_BASE_PATH, medicalCategories);



app.listen(PORT, () => {
    console.log(
        `Server is listening on port ${PORT}. API Base URL: ${API_BASE_URL}. Api Base Path: ${API_BASE_PATH}`
    );
});

export default app;