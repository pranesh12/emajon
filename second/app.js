
const express =require("express");
const app = express();
const bodyParser = require("body-parser");


const adminRoutes = require("./routes/admin")
const shopRoutes = require("./routes/shop");


app.use(bodyParser.urlencoded({extended:false}));

app.use("/",(req,res,next) => {
    console.log("<h1>Hello From express</h1>");
    next();
})

app.use('/about',(req,res,next)=> {
    res.send("<h1>hello form about page </h1>")
})



app.use('/admin',adminRoutes);
app.use(shopRoutes);

app.use((req,res,next)=> {
    res.status(404).send("<h1>Page not found</h1>")
})

app.listen(3000,()=> {
    console.log("server is running on port 3000");
})