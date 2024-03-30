const express = require("express"); // to use express we need to import expre ss
const mongoose = require("mongoose");
const BrandName = require("./brand");

const app = express(); // here we initialize for project as app

// to handle in a local server code request body json format of API(postman) body we have to use expressjs.json middle ware
app.use(express.json());
/* 
var databaseConnection = await MongoClient.connect(connectionString, {
    ssl: true,
}); */

mongoose
  .connect("url", {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("db connected...");
  })
  .catch((err) => console.log(err));
app.post("/brandnames", async (request, response) => {
  const { brandname } = request.body;
  try {
    const newData = new BrandName({ brandname }); // we are creating a new objec for schema (new object means one row )
    // new BrandName(parameter or variable passing an argument to store in db)
    await newData.save();
    return response.json(await BrandName.find());
  } catch {}
});
app.get("/getbrands", async (request, response) => {
  try {
    return response.json(await BrandName.find());
  } catch (err) {
    console.log(err);
  }
});
app.get("/getbrands/:id", async (request, respones) => {
  try {
    return respones.json(await BrandName.findById(request.params.id));
  } catch (error) {
    console.log(error.message);
  }
});
app.get("/delete/:id", async (request, respones) => {
  try {
    return respones.json(await BrandName.deleteOne(request.params.id));
  } catch (error) {
    console.log(error.message);
  }
});
app.listen(3000, () => {
  console.log("serve running...");
}); // to run our server on 5000 port number

//to make start the server, the server should be json format
// npm start
