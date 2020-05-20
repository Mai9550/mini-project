const express=require('express')
const app =express();
const bodyParser=require('body-parser')
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cookieParser());

app.post("/api/sendMail",(req, res)=>{
    console.log(req.body);
    sendMail()
})
app.listen(3000,()=>{
    console.log("server is running at 3000");
})
