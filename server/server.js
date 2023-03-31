const  express = require('express');
const app = express();
const mongoose = require ('mongoose')
const dotenv = require ('dotenv')
const cors = require ('cors')
const routerUrls = require ('./routes/Routes')


dotenv.config()
async function connect ()
{
    try 
    {
       mongoose.connect(process.env.DATABASE_ACCESS)
       console.log('connect mongodb successfully');
    }
       catch (error)
       {
        console.error(error);
       }
}
connect();

app.use(express.json())
app.use(cors())
app.use('/app' , routerUrls)
app.listen(8000,()=>console.log('server running successfully'));

