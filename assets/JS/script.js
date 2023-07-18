const secretNumber = Math.floor(Math.random()*10)+1;
let attempts = 3;

const guessInput = document.getElementById("guess-input");
const submitBtn = document.getElementById("submit-btn");
const resultMessage = document.getElementById("result-message");
const resetBtn = document.getElementById("reset-btn");

submitBtn.addEventListener("click", function(){
    const guess = parseInt(guessInput.value);

    if(isNaN(guess)){
        resultMessage.textContent="Ingresa un numero valido.";
    }else{
        attempts--;

        if(guess === secretNumber) {
            resultMessage.textContent="Adivinaste el numero!";
            submitBtn.disabled=true;
            resetBtn.style.display="block";
        }else if (attempts===0){
            resultMessage.textContent= `Perdiste. El numero era ${secretNumber}.`;
            submitBtn.disabled = true;
            resetBtn.style.display = "block";
        } else if (guess< secretNumber) {
            resultMessage.textContent= `El numero es mayor. Intentos restantes: ${attempts}.`;
        }else if (guess>secretNumber){
            resultMessage.textContent=`El numero es menor. Intentos restantes: ${attempts}.`;
        }
    }
    guessInput.value = "";
});
resetBtn.addEventListener("click",function(){
    attempts = 3;
    secretNumber = Math.floor(Math.random()*10)+1;

    submitBtn.disabled = false;
    resetBtn.style.display = "none";
    resultMessage.textContent= "";
});