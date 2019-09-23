export class Usuario {
    private nombre;
    private apellido;
    public userName;
    private password;
    private rol;
    private documento;
    private foto;


    
    setNombre(nombre) {
        this.nombre = nombre;
    }
    getNombre() {
        return this.nombre;
    }

    setApellido(apellido) {
        this.apellido = apellido;
    }
    getApellido() {
        return this.apellido;
    }

    setUserName(userName) {
        this.userName = userName;
    }
    getUserName() {
        return this.userName;
    }

    setPassword(password) {
        this.password = password;
    }
    public getPassword() {
        return this.password;
    }

    setRol(rol) {
        this.rol = rol;
    }
    getRol() {
        return this.rol;
    }

    setDocumento(documento) {
        this.documento = documento;
    }
    getDocumento() {
        return this.documento;
    }

    setFoto(foto) {
        this.foto = foto;
    }
    getFoto() {
        return this.foto;
    }
}
