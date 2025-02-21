const express = require('express'); 
const dotenv = require('dotenv');
const carrierRouter = require('./routes/carrierRouts');

dotenv.config();

const port = process.env.PORT || 3001;

const app = express();

app.use(express.json()); //req.body  data from request. Body parser.

app.use('/api/v1/carriers', carrierRouter);

app.listen(port, () => {
    console.log(`Server strarted on http://localhost:${port}`);
    
})