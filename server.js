const express = require("express");
const jsxEngine = require('jsx-view-engine')
const Logs = require('./models/logs')
const connectDB = require('./utils/connectDB')
const methodOverride = require('method-override')
require("dotenv").config();
const app = express();
const port = 3000;

app.set('view engine', 'jsx')
app.engine('jsx', jsxEngine())

//* Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));
app.use(methodOverride("_method"));


/**
 * Create log
 * @method POST
 */
app.post('/logs', async (req, res) =>{
  const createdLog = await Logs.create(req.body)
    res.redirect('/logs');
})

//index route
app.get('/logs', async (req, res) => {
  try{
    const logs = await Logs.find({})
    res.render('Index', {logs})
  }catch(e){
    console.log(e);
  }
})

app.get('/logs/:id', (req, res) => {
  res.send('show page')
})

//new route
app.get("/logs/new", (req, res) => {
  res.render('New');
});


connectDB();
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});

