const express = require('express');
const { validationResult }= require('express-validator');


const profileImages ={
    processRegister: (req,res) =>{
   const resultValidation = validationResult(req);
   
   if(resultValidation.errors.length > 0){
    return res.render('register',{
        errors: resultValidation.mapped()
    })   

        }
    }
}

module.exports= profileImages;

