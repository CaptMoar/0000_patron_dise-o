//IMPORTANTE SUSTITUIR POR DOTENV

module.exports = {
    "user": 'USUARIO',
    "password": 'CONTRASEÑA',
    "server": 'IPSERVER.CL',
    "database": 'BASEDEDATO',
    "pool": {
        "max": 10,
        "min": 0,
        "idleTimeoutMillis": 30000
    },
    "options": {
    "encrypt": false,
    "enableArithAbort": true
    }
};
