const express = require('express');
const mongoose = require('mongoose');
const applications = require('../models/applicationSchema');
const bodyParser = require('body-parser');
const router = express.Router();

//get route
router.get('/', async (req,res)=>{
const list = await applications.find();
res.json(list)
});

//post route
router.post('/', async(req,res)=> {
    const applicationForm = new applications ({
        name : req.body.name,
        email : req.body.email,
        discription : req.body.discription
    });
    try {
        const newApplicationForm = await applicationForm.save();
        console.log(newApplicationForm);
        
    } catch (error) {
        res.status(401).json({
            message : 'failed to upload'
        })
        
    }
        
    });

    router.put('/:id',async (req,res)=>{
        applications.findByIdAndUpdate({_id : req.params.id}, req.body)
        .then(function(result){
            res.send('updated')
        })
        
    })


router.delete('/:id',async(req,res)=>{
    const rmv = applications.findById(req.params.id);
    try {
        await rmv.remove();
        res.send('deleted');

    } catch (error) {
        res.send(error)
        
    }
})

router.get('/:id',(req,res)=>{
    const applicant = applications.findById(req.params.id);
    res.json(applicant)
})

module.exports = router;