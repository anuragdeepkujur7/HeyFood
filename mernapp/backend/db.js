const mongoose = require( 'mongoose' );
const MongoClient = require("mongodb").MongoClient;
const mongoURI ="mongodb+srv://anuragdeepkujur758:AnuragDeepKujur@cluster0.dblujda.mongodb.net/gofoodmern?appName=Cluster0";

const mongoDB =async() =>{
    await mongoose.connect(mongoURI,{ useNewUrlParser: true },async(err,result)=>{
        if(err) constle.log("canlknknkcl",err)
        else{
            console. log( "connectedaaaaaaa") ;
            const fetched_data= await mongoose.connection.db.collection("food_items");
            fetched_data.find({}).toArray( function(err,data){
                if(err) console.log();
                else console.log();
                
            })
        }
    });
}
module.exports= mongoDB();

/*const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://anuragdeepkujur758:AnuragDeepKujur@cluster0.dblujda.mongodb.net/?appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);*/
