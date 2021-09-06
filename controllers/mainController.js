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
    products: (req,res) =>{
        return res.render('products')
    },
    create: (req,res) =>{
        return res.render('create')
    },
    id: (req,res) =>{
        return res.render('')
    },    

};

module.exports= controlador;