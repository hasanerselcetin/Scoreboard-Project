let homeScore = 0;
let guestScore = 0;

const hscoreBtn1 = document.querySelector(".hscore-btn1");
const hscoreBtn2 = document.querySelector(".hscore-btn2");
const hscoreBtn3 = document.querySelector(".hscore-btn3");
const ascoreBtn1 = document.querySelector(".ascore-btn1");
const ascoreBtn2 = document.querySelector(".ascore-btn2");
const ascoreBtn3 = document.querySelector(".ascore-btn3");
const endBtn = document.querySelector(".end-btn");

const homeScoreText = document.querySelector(".home-score-text");
const guestScoreText = document.querySelector(".guest-score-text");

homeScoreText.textContent = homeScore;
guestScoreText.textContent = guestScore;

function updateScores() {
    homeScoreText.textContent = homeScore;
    guestScoreText.textContent = guestScore;

    if (homeScore === 24) {
        homeScoreText.style.color = "green";
        resetScores();
        setTimeout(() => {
            homeScoreText.style.color = "#F94F6D";
        }, 1000);
    } else if (guestScore === 24) {
        guestScoreText.style.color = "green";
        resetScores();
        setTimeout(() => {
            guestScoreText.style.color = "#F94F6D";
        }, 1000);
    }
}

function resetScores() {
    homeScore = 0;
    guestScore = 0;
    homeScoreText.textContent = homeScore;
    guestScoreText.textContent = guestScore;
}

hscoreBtn1.addEventListener("click", () => {
    homeScore += 1;
    updateScores();
});

hscoreBtn2.addEventListener("click", () => {
    homeScore += 2;
    updateScores();
});

hscoreBtn3.addEventListener("click", () => {
    homeScore += 3;
    updateScores();
});

ascoreBtn1.addEventListener("click", () => {
    guestScore += 1;
    updateScores();
});

ascoreBtn2.addEventListener("click", () => {
    guestScore += 2;
    updateScores();
});

ascoreBtn3.addEventListener("click", () => {
    guestScore += 3;
    updateScores();
});

endBtn.addEventListener("click", () => {
    if (homeScore > guestScore) {
        homeScoreText.style.color = "green";
        resetScores();
        setTimeout(() => {
            homeScoreText.style.color = "#F94F6D";
        }, 1000);
    } else if (homeScore < guestScore) {
        guestScoreText.style.color = "green";
        resetScores();
        setTimeout(() => {
            guestScoreText.style.color = "#F94F6D";
        }, 1000);
    } else {
        alert("Berabere sonuçlandı");
        resetScores();
    }
});








