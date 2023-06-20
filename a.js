function validarCampos() {
    limpiarErrores();
    var camposValidos = true;
  
    var nombre = document.getElementById('nombre').value;
    var apellido = document.getElementById('apellido').value;
    var edad = document.getElementById('edad').value;
    var contrasena = document.getElementById('contrasena').value;
    var ciudad = document.querySelector('input[name="ciudad"]:checked');
    var fechaNacimiento = document.getElementById('fecha_nacimiento').value;
    var genero = document.getElementById('genero').value;
    var correo = document.getElementById('correo').value;
    var robot = document.getElementById('robot').checked;
  
    if (nombre.trim() === '') {
      mostrarError('nombre', 'El campo Nombre es obligatorio');
      camposValidos = false;
    }
  
    if (apellido.trim() === '') {
      mostrarError('apellido', 'El campo Apellido es obligatorio');
      camposValidos = false;
    }
  
    if (edad.trim() === '') {
      mostrarError('edad', 'El campo Edad es obligatorio');
      camposValidos = false;
    } else {
      var edadNum = parseInt(edad);
      if (isNaN(edadNum) || edadNum < 0) {
        mostrarError('edad', 'El campo Edad debe ser un número positivo');
        camposValidos = false;
      }
    }
  
    if (contrasena.trim() === '') {
      mostrarError('contrasena', 'El campo Contraseña es obligatorio');
      camposValidos = false;
    }
  
    if (!ciudad) {
      mostrarError('ciudad', 'Debe seleccionar una Ciudad');
      camposValidos = false;
    }
  
    if (fechaNacimiento.trim() === '') {
      mostrarError('fecha_nacimiento', 'El campo Fecha de Nacimiento es obligatorio');
      camposValidos = false;
    }
  
    if (genero.trim() === '') {
      mostrarError('genero', 'Debe seleccionar un Género');
      camposValidos = false;
    }
  
    if (correo.trim() === '') {
      mostrarError('correo', 'El campo Correo Electrónico es obligatorio');
      camposValidos = false;
    } else if (!validarCorreoElectronico(correo)) {
      mostrarError('correo', 'El campo Correo Electrónico no es válido');
      camposValidos = false;
    }
  
    if (!robot) {
      mostrarError('robot', 'Debe marcar la opción No soy un robot');
      camposValidos = false;
    }
  
    return camposValidos;
  }
  