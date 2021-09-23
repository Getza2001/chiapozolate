const  db = require('../config/ConecctionDB');

module.exports  = {
    getAllUsuario: (callback) => {
        let sql = 'SELECT * FROM usuario';
        db.query(sql,(err,data)=> {
            if(err) throw err;
            if(data.length > 0) return callback(data);
            return callback(null);
        });
    },
    obtenerUsuario:(mail,callback) => {
        //let sql = 'SELECT * FROM usuario WHERE correo=\'' + mail + '\' and contrasena= \''+ password + '\'';
        let sql = 'SELECT * FROM usuario WHERE correo=\'' + mail + '\'';

        db.query(sql,mail
            , (err,data) => {
                if (err) throw err;
                if(data.length > 0) return callback(data[0]);
                return callback(null);
            });
    }
    /*findDato:(nombre,callback) => {
        console.log("ENTRO A findato");
        let sql = 'SELECT * FROM datos WHERE NombreDiario=\'' + nombre + '\'';
        db.query(sql,nombre
            , (err,data) => {
                if (err) throw err;
                if(data.length > 0) return callback(data[0]);
                return callback(null);
            });
    },
    getAllDatos: (callback) => {
        let sql = 'SELECT * FROM datos';
        db.query(sql,(err,data)=> {
            if(err) throw err;
            if(data.length > 0) return callback(data);
            return callback(null);
        });
    },

    insertDiario: (datos, callback) => {
        let sql = 'INSERT INTO datos SET ?';
        db.query(sql,datos, (err,data) => {
            if(err) throw err;
            return callback(data);
        });
    },
    deleteDiario: (idDatos, callback) => {
        let sql = 'DELETE FROM datos WHERE idDatos= ?';
        db.query(sql, idDatos,(err,data) => {
            if(err) throw err;
            return callback(data);
        });
    },
    Diario: (idUser,callback) => {
        let sql = 'SELECT * FROM datos where idUser=\'' + idUser + '\'';
        db.query(sql,(err,data)=> {
            if(err) throw err;
            if(data.length > 0) return callback(data);
            return callback(null);
        });
    },
    idDatos:(id,callback) => {
        let sql = 'SELECT * FROM datos WHERE idDatos=\'' + id + '\'';
        db.query(sql,id, (err,data) => {
            if (err) throw err;
            if(data.length > 0) return callback(data[0]);
            return callback(null);
        });
    },
    updateDatos: (datos, callback) =>{
        console.log(datos.idDatos)
        let sql = 'UPDATE datos SET NombreDiario= ?, Date= ?,Texto= ?, Fotografia= ? WHERE idDatos= ?';
        //let sql = 'UPDATE datos SET NombreDiario=\''+datos.NombreDiario+ '\', Date=\''+datos.Date+'\', Texto=\''+datos.Texto+'\', Fotografia=\''+datos.Fotografia+'\' WHERE idDatos= ?';

        db.query(sql,[datos.NombreDiario, datos.Date, datos.Texto, datos.Fotografia, datos.idDatos], (err,data) => {
            if(err) throw err;
            return callback(data);
        });
    }*/
};