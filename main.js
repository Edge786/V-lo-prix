const express = require('express');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', async (req, res) => {
  try {
    const response = await axios.get(
      'https://api.coingecko.com/api/v3/simple/price?ids=velodrome-finance&vs_currencies=eur'
    );
    const price = response.data['velodrome-finance'].eur.toFixed(4);

    res.json({
      frames: [
        {
          text: `VELO : ${price} €`,
          icon: 'a11837'
        }
      ]
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Erreur serveur');
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Serveur actif sur le port ${PORT}`);
});