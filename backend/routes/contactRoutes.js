const express = require("express");
const router = express.Router();

const Contact = require("../models/contact");

router.post("/", async (req,res)=>{

    try{

        const contact = new Contact(req.body);

        await contact.save();

        res.status(201).json({
            message:"Message Saved Successfully"
        });

    }

    catch(error){

        res.status(500).json({
            message:error.message
        });

    }

});

module.exports = router;