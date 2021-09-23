const express = require('express');
const router = express.Router();
var data;
var pago2;
router.post('/pago',(req,res)=>{
     data = {
        cant : req.body.select.valueOf(),
        nombre : req.body.nombre.valueOf(),
        precio : req.body.precio.valueOf(),
    };
    res.render('Pago', {data,title:"Pago"});
});

router.post('/divisa1',(req,res)=>{
    pago2 = {
        divisas : req.body.Divisa1.valueOf(),
        total : data.cant * data.precio,
        nombre : data.nombre,
        cant:  data.cant
    };
    res.render('Pago2', {pago2, title:"Pago"});
});
router.post('/divisa2',(req,res)=>{
    let unDolar = 0.050;
    let precio = data.precio * unDolar;
    pago2 = {
        divisas : req.body.Divisa2.valueOf(),
        total : data.cant * precio,
        nombre : data.nombre,
        cant:  data.cant
    };
    res.render('Pago2', {pago2, title:"Pago"});
});

router.get('/aceptar',(req,res)=>{
    res.render('Pago3', {pago2, title:"Pago"});
});
router.get('/pagoRealizado',(req,res)=>{
    res.render('RegistrarCompra', {pago2, title:"RegistrarCompra"});
});
router.get('/finalizarC',(req,res)=>{
    res.render('Envio', {title:"Envio"});
});
router.get('/guardarEnvio',(req,res)=>{
    console.log("pedido enviado");
    res.render('Principal', {title:"Principal"});
});


module.exports = router;