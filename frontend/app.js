// Atrapamos el formulario cuando el usuario le da a "Ingresar"
document.getElementById('loginForm').addEventListener('submit', function(e) {

```
e.preventDefault(); // Evita que la página se recargue

// Obtenemos los datos ingresados
const usuario = document.getElementById('usuario').value;
const password = document.getElementById('password').value;
const mensaje = document.getElementById('mensaje');

// Validación simple
if(usuario === "admin" && password === "1234") {

    // Redirecciona a la página de éxito
    window.location.href = "/exito";

} else {

    mensaje.style.color = "red";
    mensaje.textContent = "Usuario o contraseña incorrectos.";

}
```

});
