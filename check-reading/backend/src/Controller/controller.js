const express = require('express')
const User = require('../Model/model')
const multer = require('multer')
const fs = require('fs')
const upload = multer({dest:'upload/'})

const router =  express.Router()

router.post('/check',upload.single('image'),function(req,res,next){
    try{
        const New = new User({
            name:req.body.name,
            image:{data:fs.readFileSync(req.file.path),contentType:'image/jpeg'}
        })
        New.save()
        res.send('User Created')
    }
    catch(err){
        return res.status(400).send({error:req.body})
    }
})

router.get('/check',function(req,res,next){
    User.find({},function(err,users){
        if(err){
            res.send("can not get the users")
        }

        else{
            res.send(users)
        }
    })
})

router.put('/check',upload.none(),function(req,res,next){
    let query = null
    User.findOneAndUpdate({name:req.body.name},{name:req.body.upload},function(err,users){
        if(err){
            res.send('failed to update')
        }
        else{
            res.send('update success')
        }
    })
})

router.delete('/check',upload.none(),function(req,res,next){
    User.findOneAndRemove({name:req.body.name},function(err,users){
        if(err){
            res.send('cant be deleted')
        }
        else{
            res.send('User Deleted')
        }
    })
})


module.exports = server => server.use('/api',router)