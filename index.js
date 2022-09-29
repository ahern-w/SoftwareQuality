const express = require ('express');


const{db_connection} = require ('./database/connection'); 
const app = express ();

app.set("port", process.env.PORT || 3080)
app.use(express.json());



app.all('*',function(req,res,next){
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Headers","*");
    res.header("Access-Control-Allow-Methods",'PUT,POST,GET,DELETE,OPTIONS'); 
    next();
}); 


app.use('/api/users',require('./routes/user'));
  

try {
    const db_status = db_connection.authenticate();
    console.log("Connection has b en estanblishd successfully.");
  }  catch(error){
        console.error("Unable to connect to the database.",error);
}

 

app.listen(app.get('port'),() =>   {
  console.log('server in port:', 3080);
});