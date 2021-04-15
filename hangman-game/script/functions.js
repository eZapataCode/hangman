const selectRandomWord = words => words[Math.floor(Math.random() * 12)];

const createLetterDivs = (word) => {
    let divs = '';
    [...word].forEach(letter =>
       divs += `<div class="word-container__block">
        <div class="word-container__letter">${letter}</div>
        </div>`);
    return divs;
};

const findCoincidences = (divs, letter) => {
    return [...divs].filter(div => div.innerHTML === letter);
};

const changeImgSrc = fails => `img/hang${fails}.png`;

const checkGameStatus = divs => {
    if (fails === 6) {
        loseAnimation();
        stopAudio(audioBackground);
        setTimeout(() => {playAudio(audioCrack)}, 300);
        setTimeout(() => {playAudio(audioScream)}, 600);
        setTimeout(() => {showPopup(gameOverPopup)}, 2000);
    };
    const hasWon = [...divs].filter(div => div.classList.length === 1);
    if (hasWon.length === 0) {
        winAnimation();
        setTimeout(() => {showPopup(youWinPopup)}, 1000)
    };
};

const restartGame = (e) => {
    fails = 0;
    img.setAttribute('src', changeImgSrc(fails));
    startGame();
    const popupContainer = e.parentElement.parentElement;
    hidePopup(popupContainer);
};

// CALLERS

const startGame = () => {
    hidePopup(startGamePopup);
    const {word, hint} = selectRandomWord(words);
    wordContainer.innerHTML = createLetterDivs(word);
    hintBar.innerHTML = hint;
    startGameAnimation();
};

const submitHandler = (e) => {
    e.preventDefault();
    const letterDivs = document.querySelectorAll('.word-container__letter');
    const coincidences = findCoincidences(letterDivs, letterInput.value);
    
    if (coincidences.length === 0 ) {
        fails++;
        img.setAttribute('src', changeImgSrc(fails));
    } else {
        coincidences.forEach(div => div.classList.add('show-letter'));
    };
    
    checkGameStatus(letterDivs);
    letterInput.value = "";
};

const playAudio = (audio) => {
    audio.play();
    (audio.id === 'background-audio') ? audio.volume = 0.4 : null;
};

const stopAudio = (audio) => {
    audio.pause();
    audio.currentTime = 0;
}