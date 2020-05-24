'use strict';

const jwt = require('jwt-simple');
const moment = require('moment');
const jwtConfig = require('../../config/jwtConfig')

function crearToken(user){
    const payload ={
        sub: user._id,
        iat: moment().unix(),
        exp: moment().add(14, 'days').unix()
    }
    return jwt.encode(payload, jwtConfig.SECRET_TOKEN)
}
 
module.exports = crearToken;