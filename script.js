let total = 141;
let hits = 0;
let specialShown = false;

const specialImage = "https://npr.brightspotcdn.com/dims3/default/strip/false/crop/2901x1632+0+0/resize/1100/quality/50/format/jpeg/?url=http%3A%2F%2Fnpr-brightspot.s3.amazonaws.com%2Ff4%2F99%2F7f300fdd4a068052973c3476c06c%2Ffcbcf713-d95e-4f4d-9f27-8bf889ae5ae0.jpg";

const alertSound = document.getElementById("alertSound");
const changeBtn = document.getElementById("changeBtn");
const resetBtn = document.getElementById("resetBtn");

function updateChance() {
    let chance = (hits / total) * 100;
    changeBtn.textContent = "Chance : " + chance.toFixed(2) + "%";
}

updateChance();

/* --- Bouton principal --- */
changeBtn.addEventListener("click", () => {
    if (specialShown) return;

    hits++;
    updateChance();

    let roll = Math.random() * total;

    if (roll < hits - 1) {
        document.body.style.backgroundImage = `url(${specialImage})`;
        document.body.style.backgroundColor = "transparent";
        specialShown = true;
        alertSound.volume = 1.0;
        alertSound.play();
        return;
    }

    // couleur random
    let randomColor = `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, '0')}`;

    document.body.style.backgroundImage = "none";
    document.body.style.backgroundColor = randomColor;
});

/* --- Bouton RESET --- */
resetBtn.addEventListener("click", () => {
    hits = 0;
    specialShown = false;
    updateChance();

    document.body.style.backgroundImage = "none";
    document.body.style.backgroundColor = "#000000"; // background reset

    // stop le son si jamais il joue
    alertSound.pause();
    alertSound.currentTime = 0;
});
