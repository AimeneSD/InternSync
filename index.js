const express = require('express');
const app = express();
require('dotenv').config();

// Pour que votre serveur puisse lire les formulaires envoyés par React
app.use(express.json());

const PORT = process.env.PORT || 5000;

// Route de test
app.get('/', (req, res) => {
    res.send("Le serveur InternSync est allumé et prêt !");
});

app.listen(PORT, () => {
    console.log(`Serveur lancé sur http://localhost:${PORT}`);
});