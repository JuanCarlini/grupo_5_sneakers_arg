const express = require ('express');
const { validationResult }= require('express-validator');

const profileImages ={
    register: (req,res) =>{
         res.render('register');
    }
}

module.exports= profileImages;