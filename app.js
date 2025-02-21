const express = require('express'); 
const dotenv = require('dotenv');

dotenv.config();

const port = process.env.PORT || 3001;

const app = express();

app.listen(port, () => {
    console.log(`Server strarted on http://localhost:${port}`);
    
})