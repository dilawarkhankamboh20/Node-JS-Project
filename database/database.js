const mongoose= require("mongoose")



mongoose.connect(process.env.MONGO_CONNECTION_URL).then(()=>{


console.log("database connected");
}).catch(()=>{

    console.log("connection faild");
})