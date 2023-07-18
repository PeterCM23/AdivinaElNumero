# AdivinaElNumero
Practica HTML,CSS,JS

1. `const secretNumber = Math.floor(Math.random() * 10) + 1;`
   - Esta línea de código genera un número aleatorio entre 1 y 10 utilizando la función `Math.random()`. `Math.floor()` se utiliza para redondear el número hacia abajo, asegurando así que esté dentro del rango deseado.

2. `let attempts = 3;`
   - Aquí se declara la variable `attempts` e inicializa con un valor de 3. Esta variable se utiliza para rastrear el número de intentos restantes del jugador.

3. `const guessInput = document.getElementById("guess-input");`
   - Se obtiene una referencia al elemento `<input>` del HTML con el id "guess-input". Esto permite acceder al número ingresado por el jugador.

4. `const submitBtn = document.getElementById("submit-btn");`
   - Se obtiene una referencia al elemento `<button>` del HTML con el id "submit-btn". Esto permite agregar un evento de escucha al botón para capturar el clic del jugador.

5. `const resultMessage = document.getElementById("result-message");`
   - Se obtiene una referencia al elemento `<p>` del HTML con el id "result-message". Esto permite mostrar mensajes de resultado al jugador.

6. `const resetBtn = document.getElementById("reset-btn");`
   - Se obtiene una referencia al elemento `<button>` del HTML con el id "reset-btn". Esto permite agregar un evento de escucha al botón de reinicio para capturar el clic del jugador.

7. `submitBtn.addEventListener("click", function() { ... });`
   - Aquí se agrega un evento de escucha al botón "Adivinar". Cuando el jugador hace clic en el botón, se ejecuta la función proporcionada como argumento.

8. `const guess = parseInt(guessInput.value);`
   - Se obtiene el valor ingresado por el jugador en el campo de entrada y se convierte a un número entero utilizando `parseInt()`.

9. `if (isNaN(guess)) { ... }`
   - Esta condición verifica si el valor ingresado por el jugador no es un número. `isNaN()` se utiliza para comprobar si el valor no es un número válido.

10. `attempts--;`
    - Se decrementa el contador de intentos restantes en 1 después de cada intento del jugador.

11. `if (guess === secretNumber) { ... }`
    - Aquí se verifica si el número ingresado por el jugador es igual al número secreto. Si es así, el jugador adivinó el número y se muestra el mensaje correspondiente. El botón de "Adivinar" se desactiva y se muestra el botón de reinicio.

12. `else if (attempts === 0) { ... }`
    - Esta condición verifica si el jugador ha agotado todos los intentos. Si es así, se muestra el mensaje indicando que el jugador perdió y se revela el número secreto. El botón de "Adivinar" se desactiva y se muestra el botón de reinicio.

13. `else if (guess < secretNumber) { ... }`
    - Aquí se verifica si el número ingresado por el jugador es menor que el número secreto. Se muestra un mensaje indicando que el número es mayor y se muestra el número de intentos restantes.

14. `else if (guess > secretNumber) { ... }`
    - Esta condición verifica si el número ingresado por el jugador es mayor que el número secreto. Se muestra un mensaje indicando que el número es menor y se muestra el número de intentos restantes.

15. `guessInput.value = "";`
    - Después de cada intento, se borra el campo de entrada para que el jugador pueda ingresar un nuevo número.

16. `resetBtn.addEventListener("click", function() { ... });`
    - Aquí se agrega un evento de escucha al botón de reinicio. Cuando el jugador hace clic en el botón, se ejecuta la función proporcionada como argumento.

17. `attempts = 3;`
    - Se restablece el contador de intentos a 3.

18. `secretNumber = Math.floor(Math.random() * 10) + 1;`
    - Se genera un nuevo número aleatorio entre 1 y 10 para el siguiente juego.

19. `submitBtn.disabled = false;`
    - El botón de "Adivinar" se habilita nuevamente después de reiniciar el juego.

20. `resetBtn.style.display = "none";`
    - El botón de reinicio se oculta nuevamente después de reiniciar el juego.

21. `resultMessage.textContent = "";`
    - Se borra el mensaje de resultado para preparar el juego para un nuevo intento.
