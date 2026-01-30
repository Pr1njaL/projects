let randomNumber = Math.floor(Math.random() * 100) + 1;
let guessesLeft = 10;
let previousGuesses = [];

const inputField = document.getElementById('guessInput');
const submitBtn = document.getElementById('submitBtn');
const restartBtn = document.getElementById('restartBtn');
const messageEl = document.getElementById('message');
const remainingEl = document.getElementById('remaining-count');
const prevGuessesEl = document.getElementById('prev-guesses');
const progressFill = document.getElementById('progress-fill');
const gameContainer = document.querySelector('.game-container');

submitBtn.addEventListener('click', checkGuess);

// Allow pressing "Enter" key to submit
inputField.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        checkGuess();
    }
});

restartBtn.addEventListener('click', resetGame);

function checkGuess() {
    const userGuess = parseInt(inputField.value);

    // Validation
    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        showMessage('⚠️ Please enter a number between 1 and 100', '#ff7675');
        return;
    }

    if (previousGuesses.includes(userGuess)) {
        showMessage('🚫 You already guessed that number!', '#ff7675');
        return;
    }

    // Logic
    guessesLeft--;
    previousGuesses.push(userGuess);
    updateStats(userGuess);

    if (userGuess === randomNumber) {
        endGame(true);
    } else if (guessesLeft === 0) {
        endGame(false);
    } else {
        // Wrong Guess
        gameContainer.classList.add('shake');
        setTimeout(() => gameContainer.classList.remove('shake'), 500);
        
        if (userGuess < randomNumber) {
            showMessage('📉 Too Low! Try higher.', '#74b9ff');
        } else {
            showMessage('📈 Too High! Try lower.', '#fab1a0');
        }
    }
    
    inputField.value = '';
    inputField.focus();
}

function updateStats(lastGuess) {
    remainingEl.innerText = guessesLeft;
    
    // Add chip
    const chip = document.createElement('span');
    chip.classList.add('chip');
    chip.innerText = lastGuess;
    prevGuessesEl.appendChild(chip);

    // Update Progress Bar Width
    const percentage = (guessesLeft / 10) * 100;
    progressFill.style.width = percentage + '%';

    // Update Progress Bar Color based on urgency
    if (guessesLeft < 4) {
        progressFill.style.backgroundColor = '#ff7675'; // Red warning
    } else if (guessesLeft < 7) {
        progressFill.style.backgroundColor = '#fdcb6e'; // Yellow warning
    }
}

function showMessage(msg, color) {
    messageEl.innerText = msg;
    messageEl.style.color = color;
}

function endGame(won) {
    inputField.disabled = true;
    submitBtn.disabled = true;
    inputField.value = '';
    
    if (won) {
        showMessage(`🎉 Correct! The number was ${randomNumber}`, '#55efc4');
        progressFill.style.backgroundColor = '#55efc4';
    } else {
        showMessage(`💀 Game Over! It was ${randomNumber}`, '#ff7675');
        progressFill.style.width = '0%';
    }

    restartBtn.classList.remove('hidden');
}

function resetGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    guessesLeft = 10;
    previousGuesses = [];
    
    remainingEl.innerText = 10;
    prevGuessesEl.innerHTML = '';
    messageEl.innerText = 'Good Luck! Start guessing.';
    messageEl.style.color = 'white';
    
    progressFill.style.width = '100%';
    progressFill.style.backgroundColor = '#00cec9';

    inputField.disabled = false;
    submitBtn.disabled = false;
    restartBtn.classList.add('hidden');
    inputField.focus();
}