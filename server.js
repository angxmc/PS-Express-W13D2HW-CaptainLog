const express = require("express");
const jsxEngine = require("jsx-view-engine");
const Logs = require("./models/logs");
const connectDB = require("./utils/connectDB");
const methodOverride = require("method-override");
require("dotenv").config();
const app = express();
const port = 3000;

app.set("view engine", "jsx");
app.engine("jsx", jsxEngine());

//* Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));
app.use(methodOverride("_method"));

// - Root Route -
app.get("/", (req, res) => {
  res.send("working");
});

/*
 - Create Log -
  @method POST
 */
app.post("/logs", async (req, res) => {
  const createdLog = await Logs.create(req.body);
  res.redirect("/logs");
});

/*
 - Index Route - 
*/
app.get("/logs", async (req, res) => {
  try {
    const logs = await Logs.find({});
    res.render("Index", { logs });
  } catch (e) {
    console.log(e);
  }
});

/**
 * - Show Route -
 * @routes /logs/:id
 * @method GET
 * @action Show
 * @description: return the specified log
 */

app.get("/logs/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const logs = await Logs.findById(id);
    res.render("Show", { logs });
  } catch (e) {
    console.log(e);
  }
});

/**
 * - New Route -
 * @routes /logs/new
 * @method GET
 * @action New
 * @description: renders the page of new log form
 */
app.get("/logs/new", (req, res) => {
  res.render("New");
});

/**
 * - Delete Route - 
 * redirects to index page
 */
app.delete('/logs/:id', async (req,res) => {
  const {id} = req.params;
  try{
    const deletedLog = await Logs.indByIdAndDelete(id);
    res.redirect('/logs')
  }catch(e){
    console.log(e);
  }
})

/**
 * - Edit Route -
 * 
 */
app.get('logs/:id/edit', async (req, res) => {
  const {id} =req.params;
  try{
    const log =await Logs.findById(id);
    res.render('Edit', {log})
  }catch(e){
    console.log(e);
  }
})

connectDB();
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
