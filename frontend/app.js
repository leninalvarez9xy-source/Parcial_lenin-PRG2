// Atrapamos el formulario cuando el usuario le da a "Ingresar"
document.getElementById('loginForm').addEventListener('submit', function(e) {

```
e.preventDefault();

// Obtenemos los datos
const usuario = document.getElementById('usuario').value;
const password = document.getElementById('password').value;
const mensaje = document.getElementById('mensaje');

// Validación
if(usuario === "admin" && password === "1234") {

    // Ventana emergente
    alert("Gracias por entrar");

    // Redirecciona a la página éxito
    window.location.href = "/exito";

} else {

    mensaje.style.color = "red";
    mensaje.textContent = "Usuario o contraseña incorrectos.";

}
```

});
