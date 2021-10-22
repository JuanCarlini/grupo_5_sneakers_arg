const express = require ('express');

const profileImages ={
    register: (req,res) =>{
         res.render('register');
    },

    body: (req,res) =>{
        req.body
    },
    file: (req,res) =>{
        req.file
    }
}

module.exports= profileImages;
