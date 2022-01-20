var register = require('../models/register')

exports.store = (req,res) => {
    console.log("working from store")

    
    const task = new register(req.body)
    task.save((err, doc) => {
        if (err) console.log(err)
        res.json(doc)
    })
}
exports.index=(req,res)=>{
    // register.findOne({username:req.body.username},(err,doc)=>{
    //     if(err) console.log(err)
    //     res.json(doc)
    // })

   const data= register.find({ username: req.body.username ,password:req.body.password}, (err, doc)=> //find if a value exists
    {
if(err){
    console.log(err)
}
        // if (doc)  //if it does
        // {
        //     if(doc[0].role == 'admin'){
        //       res.json(doc)
        //     }
        //     else if(doc[0].role=='user'){
        //        res.json(doc)
        //     }
        //     else{
        //         res.send("empty")
        //     }
           
        //         // print out what it sends back
        // }
      
    });
   if(data){
       console.log("data exists")
       console.log(data)
   }
   else{
       console.log("data not exists")
   }

}
