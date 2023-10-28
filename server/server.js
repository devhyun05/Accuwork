
const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000; 

app.use(cors());
app.use(express.static(path.join(__dirname, '../client/build')));

app.use('/contracts', express.static(path.join(__dirname, './artifcats'))); 

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`); 
})