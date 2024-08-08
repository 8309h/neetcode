const express =  require("express");

const app =  express();

let port = 8000;

app.get('/' ,(req,res)=> {
    res.send("Basic endpoint")
})


app.listen(port, ()=> {
    console.log(`serer runs on the port ${port}`)
})