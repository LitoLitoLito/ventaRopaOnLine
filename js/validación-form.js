
document.getElementById('registrationForm').addEventListener('submit', function(event) {
event.preventDefault(); // Evita el envío del formulario por defecto
    
var nombre = document.getElementById('nombre').value;
        var apellido = document.getElementById('apellido').value;
        var dni = document.getElementById('dni').value;
        var ciudad = document.getElementById('ciudad').value;
        var email = document.getElementById('email').value;
        var password = document.getElementById('password').value;
        var rating = document.querySelector('input[name="rating"]:checked');
        var terms = document.getElementById('terms').checked;
    
        if (!nombre || !apellido || !dni || !ciudad || !email || !password || !rating || !terms) {
          alert('Todos los campos son obligatorios y debes aceptar los términos y condiciones');
        } else {
          // Mostrar mensaje de éxito
          document.getElementById('successMessage').style.display = 'block';
    
          // Opcionalmente, puedes limpiar el formulario
          document.getElementById('registrationForm').reset();
          
          // Si deseas redirigir a otra página después de un tiempo
          // setTimeout(function() {
          //   window.location.href = 'otra-pagina.html';
          // }, 3000); // Redirigir después de 3 segundos
        }
      });
