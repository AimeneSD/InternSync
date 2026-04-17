const express = require('express');
const app = express();
require('dotenv').config();

// Pour que votre serveur puisse lire les formulaires envoyés par React
app.use(express.json());