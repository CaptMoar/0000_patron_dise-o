const loginRepository   = require('../repository/loginRepository');
const Usuario           = require('../model/Usuario');
const jwt               = require('jsonwebtoken');
const secret            = require('../../config/jwtConfig')
const moment            = require('moment');

exports.login = async (req) => {
    const usuario = new Usuario(req);
    const token = jwt.sign({id: usuario.email}, secret.SECRET_TOKEN, {expiresIn: moment().add(14, 'days').unix()})
    user = await loginRepository.login(usuario);
    return {user, token};
};

exports.insert = async (req) => {
    const usuario = new Usuario(req);
    return await loginRepository.save(usuario);
};