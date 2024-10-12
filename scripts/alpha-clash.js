// function play() {
//     // hide the home screen. to hide the screen add the class hidden to the home section
//     const homeSection = document.getElementById('home-screen')
//     homeSection.classList.add('hidden');

//     // show the playground
//     const playGround = document.getElementById('playground-screen')
//     playGround.classList.remove('hidden')
// }

function handleKeyboardButtonPress(event) {
    const playerPressed = event.key;
    console.log('player pressed' ,playerPressed);

    if (playerPressed === 'Escaped') {
        gameOver()
    }

    // get the expected to press
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLocaleLowerCase();
    console.log(playerPressed, expectedAlphabet);

    // check matched or not
    if(playerPressed === expectedAlphabet){
        console.log('point');

        const currentScore = getTextElementValueById('current-score')
        const updatedScore = currentScore + 1;
        setTextElementValueById('current-score', updatedScore)

        // // 1. get the current score
        // const currentScoreElement = document.getElementById('current-score');
        // const currentScoreText = currentScoreElement.innerText;
        // const currentScore = parseInt(currentScoreText);

        // 2. increase the score by 1
        const newScore = currentScore + 1;
        
        // 3. show the updated score
        // currentScoreElement.innerText = newScore;

        removeBackgroundColorById(playerPressed);
        continueGame();
    }
    else{
        console.log('lost a life')
        const currentLife = getTextElementValueById('current-life')
        const updatedLife = currentLife - 1;
        setTextElementValueById('current-life', updatedLife)

        if (updatedLife === 0 ) {
            gameOver()
            
        }

        // 1. get the current Life number
        // const currentLifeElement = document.getElementById('current-life');
        // const currentLifeText = currentLifeElement.innerText;
        // const currentLife = parseInt(currentLifeText);

        // // 2 reduce the life count
        // const newLife = currentLife -1;

        // // 3. display the updated life
        // currentLifeElement.innerText = newLife;

    }
}


document.addEventListener('keyup', handleKeyboardButtonPress)

function continueGame() {
    // step -1: generate a random alphabet
    const alphabet = getARandomAlphabet();
    // console.log(alphabet);


    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;

    // set background color
    setBackgroundColorById(alphabet);
}

function play() {
    hideElementById('home-screen');
    hideElementById('final-score')
    showElementById('playground-screen');

    setTextElementValueById('current-life', 5)
    setTextElementValueById('current-score', 0)
    continueGame()
}

function gameOver() {
    console.log('game over');
    hideElementById('playground-screen')
    showElementById('final-score')
    const finalScore = getTextElementValueById('current-score')
    // const gameFinalScore = document.getElementById('game-final-score')
    // gameFinalScore.innerText = finalScore
    setTextElementValueById('game-final-score', finalScore)


    // clear the last selected alphabet background
    const currentAlphabet = getTextElementValueById('current-alphabet')
    console.log(currentAlphabet);
    removeBackgroundColorById('current-alphabet')
}