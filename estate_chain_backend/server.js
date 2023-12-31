const express = require('express');
const path = require('path'); 
const cors = require('cors');
const app = express();

const corsOptions = {
    origin: [
        'https://accuwork-b5cbb33f1f1a.herokuapp.com/',
        "http://localhost:3000" // frontend 
    ],
};

app.use(cors(corsOptions)); 

app.use(express.static(path.join(__dirname + "/public"))); 

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`); 
})