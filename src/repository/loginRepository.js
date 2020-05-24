const sql = require('mssql');
const dbConfig = require('../../config/dbConfig')
const usuario = require('../model/Usuario');

exports.login = (req) => {
    return sql.connect(dbConfig).then(() => {
        return sql.query(`SELECT [id], [usuario],[email],[activo] FROM [dbo].[USUARIO] WHERE [email] = '${req.email}' and [password] = '${req.password}' AND [activo] = 1`);
    }).then(result => {
        return new usuario(result.recordset[0]);
    }).catch(err => {
        console.log(`[INFO] FALLO ${err}`);
    })
};

exports.findByEmail = (req) => {
    return sql.connect(dbConfig).then(() => {
        return sql.query(`SELECT [usuario] from [dbo].[USUARIO] WHERE [email] = '${req}'`);
    }).then(result => {
        return (result.recordset.length > 0);
    }).catch(err => {
        console.log(`[INFO] FALLO ${err}`);
    })
};

exports.save = (req) => {
    return sql.connect(dbConfig).then(async () => {
        return sql.query(`INSERT INTO [dbo].[USUARIO] ([usuario],[email],[password],[activo]) VALUES ('${req.usuario}','${req.email}','${req.password}',1)`);
    }).then(result => {
        return result.rowsAffected[0] > 0 ? true : false;
    }).catch(err => {
        console.log(`[INFO] FALLO ${err}`);
    })
};


