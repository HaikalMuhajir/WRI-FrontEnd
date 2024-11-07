const counterDisplay = document.querySelector('h2');
const minusButton = document.getElementById('minus');
const resetButton = document.getElementById('reset');
const plusButton = document.getElementById('plus');

let counter = 0;

minusButton.addEventListener('click', () => {
    if(counter != 0){
        counter--;
        updateDisplay();
    }
});

resetButton.addEventListener('click', () => {
    counter = 0;
    updateDisplay();
});

plusButton.addEventListener('click', () => {
    counter++;
    updateDisplay();
});

function updateDisplay() {
    counterDisplay.textContent = counter;
}
