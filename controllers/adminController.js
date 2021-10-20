const express = require ('express');

const controladorAdmin ={
    admin: (req,res) => {
        return res.render('admin');
}}

module.exports= controladorAdmin;