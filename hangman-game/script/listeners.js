document.addEventListener('DOMContentLoaded', firstAnimation());

startGameBtn.addEventListener('click', () => {
    startGame();
    playAudio(audioBackground);
});

form.addEventListener('submit', (e) => submitHandler(e));

tryAgainBtn.forEach(btn => btn.addEventListener('click', (e) => {
    restartGame(e.target);
    playAudio(audioBackground);
}));