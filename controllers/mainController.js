const express = require ('express');

const controlador ={
    home: (req,res) => {
        return res.render('home');
    },
    login: (req,res) =>{
        return res.render('log-in')
    },
    register: (req,res) =>{
        return res.render('register')
    },
    carrito: (req,res) =>{
        return res.render('carrito')
    },
    detalleDelProducto: (req,res) =>{
        return res.render('detalle-del-producto')
    },
};

module.exports= controlador;