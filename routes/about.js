const express = require('express')
const Car = require('../models/about')
const {Shema ,model} =require("mongoose")
const Task = require('../models/models')
const router = express.Router()

router.get('/', (req, res) => {
    const car=new Car({
        email:'sabarishwaran@gmail.com',
        vechile:'car',
        type:[{gear:[{system:'automatic',system2:'manual'}],
        tyre:'tubeless',
            fuel: 'petrol',
        }]


    })
    car.save((err,doc)=>
    {
        if(err) console.log(err)
        console.log(doc)
    })
//    Car.aggregate([
//         {
//             $lookup:
//             {
//                 from: "datas",
//                 localField: "email",
//                 foreignField: "email",
//                 as: "inventory_docs"
//             }
//         }
    // ])
    // console.log()
    // $lookup:
    // {
    //     from: <collection to join>,
    //         localField: <field from the input documents>,
    //             foreignField: <field from the documents of the "from" collection>,
    //             as: <output array field>
    //  }
   
    // // Car.find((err, docs) => {
    //     if (err) console.log(err)
    //     res.json(docs)
    // })

})

router.post('/', (req, res) => {
    const car = new Car(req.body)
    car.save((err, doc) => {
        if (err) console.log(err)
        res.json(doc)
    })
})


router.put('/:id', (req, res) => {

    Car.findOneAndUpdate({
        _id: req.params.id
    }, req.body, {
        new: true
    }, (err, docs) => {
        if (err) console.log(err)
        res.json(docs)
    })
})


router.delete('/:id', (req, res) => {
    Car.findByIdAndDelete(req.params.id, (err, doc) => {
        if (err) console.log(err)
        res.json(doc)
    })
})
module.exports = router