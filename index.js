const express = require('express');
const cors = require('cors');
const path = require('path'); // Import path module
const app = express();
const port = 43922;
// Allow all cross-origin requests
app.use(cors());
// Middleware to parse JSON bodies
app.use(express.json());
// Nuestra aplicación esta lista para recibir peticiones
app.get('/', (req, res) => {
        
        try{
            console.log(__dirname)
            res.sendFile(path.join(__dirname, 'index.html'));   
        } catch(e){
            res.status(500).send({'error': 'Internal server error'})
        }    
    }
);