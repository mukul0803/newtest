const express = require('express');
const app = express();

// app.set('view engine','ejs');

app.use(express.json());


app.get('/',(req,res)=> {

    res.send("Hello");
    // res.render('home',{obj});
    
});



app.listen(4000);