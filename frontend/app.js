// Atrapamos el formulario cuando el usuario le da a "Ingresar"
document.getElementById('loginForm').addEventListener('submit', function(e) {

```
e.preventDefault();

// Datos ingresados
const usuario = document.getElementById('usuario').value;
const password = document.getElementById('contraseña').value;
const mensaje = document.getElementById('mensaje');

// Validación
if(usuario === "admin" && password === "1234") {

    mensaje.style.color = "green";
    mensaje.textContent = "Acceso correcto";

    setTimeout(() => {
        window.location.href = "/exito";
    }, 1000);

} else {

    mensaje.style.color = "red";
    mensaje.textContent = "Datos incorrectos";

}
```

});
