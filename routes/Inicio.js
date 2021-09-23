const express = require('express');
const router = express.Router();
const userDAO = require('../models/UsuarioDAO');

router.get('/Login',(req,res)=>{
    userDAO.getAllUsuario((data) => {
        console.log(data);
        console.log("dentro ")
        res.render('Login', {title:"Login"});
    });

});
router.get('/registro',(req,res)=>{
    res.render('Registro', {title:"Registro"});
});

router.get('/principal',(req,res)=>{
    res.render('principal', {title:"principal"});
})
/*router.get('/principal',(req,res)=>{
    res.render('principal', {title:"principal"});
});*/
/*router.get('/principal',(req,res)=>{
    if(req.isAuthenticated()){
        let idUser = req.session.passport.user.idUser;
        userDAO.idUser(idUser,(datos)=>{
            datosDAO.Diario(idUser, (data)=> {
                if(data){
                    console.log(data);
                    console.log(datos);
                    res.render('principal', {datos,data, title:"Principal"});
                }else{
                    data=0;
                    res.render('principal', {datos,data, title:"Principal"});
                }
            });
        })
    }
    else
        res.render('index');
});*/
router.post('/principal',(req,res)=>{
    let mail = req.body.mail
    let password = req.body.Password
    userDAO.obtenerUsuario(mail, (data) =>{
        if(data.contrasena == password){
            res.render('principal', {title:"principal"});
        }
        else {
            console.log("no existe el usuario");
            res.render('Login', {title:"Login"});
        }
    })
});

router.get('/producto',(req,res)=>{
    res.render('producto', {title:"producto"});
});
router.get('/quienesSomos',(req,res)=>{
    res.render('quienesSomos', {title:"quienesSomos"});
});
router.get('/elaboracion',(req,res)=>{
    res.render('elaboracion', {title:"elaboracion"});
});

module.exports = router;