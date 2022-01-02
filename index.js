const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;
const { MongoClient } = require("mongodb");

app.use(express.json());
app.use(cors());

//MongoDB setup =========
//userName: corner-shop
//password: uLIJlAIShCaX8xsb

const uri = "mongodb+srv://corner-shop:uLIJlAIShCaX8xsb@cluster0.szq9k.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function run() {
  try {
    await client.connect();
    const database = client.db("corner-shop");
    const users = database.collection("users");
    const products = database.collection("products");

    console.log("Connected successfully to server");

    // upsert data  
    // https://docs.mongodb.com/drivers/node/current/fundamentals/crud/write-operations/upsert/


  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);













app.get('/', (req, res)=>{
    res.send('server is working')
})

app.listen(port, ()=>{
    console.log('server is runing on: ', port)
})