let app = express();
app.use(express.json());

let cors = require("cors");
app.use(cors());

let {showdata,adduser} = require("./message.js");

app.get("/homeshow",async(req,res)=>{
    let list = await showdata();
    res.json(list);
})

app.post("/add-user",async(req,res)=>{
    let user = req.body;
    await adduser(message);
    res.json({message:"data added"});
})

app.listen(4000,()=>{console.log("server start")});