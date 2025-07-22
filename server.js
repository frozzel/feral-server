//// import module dependencies ////
const express = require('express');
require('dotenv').config();
require('./config/database.js'); // import database connection
var cors = require('cors');


//// use middleware ////
const app = express();
app.use(express.static('public'));
app.use(express.json());
app.use(cors());

//// import routes ////
const userRoutes = require('./routes/user.js');




//// use routes ////
app.use('/api/users', userRoutes);



//// set up server ////
const PORT = process.env.PORT || 8080;
const server = require('http').createServer(app);

/////////////////////// test server running ///////////////////////
app.get('/', (req, res) => {
    const date = new Date();
    res.send(`<body style="background: #333; display: flex">
        <div style="width: 30%; height: auto"></div>
        <div style="display: flex-column; position: relative; top: 25%; width: 100%; height: 15%; box-shadow: 0 0 3px 2px #cec7c759; padding: 1em; border-radius: 8px;">
        <h1 style="text-align: center; color: white;">🚀  Server Running  🚀</h1> \n 
        <h3 style="text-align: center; color: white">${date.toString().slice(0, 24)}</h3>
        </div><div style="width: 30%; height: auto"></div>
        </body>`
     );
});


server.listen(PORT,  () => {// start express server on port 8080
    console.log(`................................................`)
    console.log(`🚀  Server running on http://localhost:${PORT}, 🚀`)
    console.log(`...............................................`)
    console.log(`...............Starting Database...............`)
   
    
})