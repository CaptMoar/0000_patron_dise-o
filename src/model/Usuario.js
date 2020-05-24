class Usuario {
  constructor (req) {
    req = req || undefined;
    this.id = req.id || '';
    this.email = req.email || '';
    this.password = req.password || '';
    this.usuario = req.usuario || '';
    this.activo = req.activo || ''; 
    //this.encode = this._getState();
  }

  _getDecode(pass) {
    //Aca insertar Decode
    return pass;
  }
  _getEncode(pass) {
    //Aca insertar Encode
    return pass;
  }
}

module.exports = Usuario;