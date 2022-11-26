const teamOne = document.getElementById('team-one');
const teamTwo = document.getElementById('team-two');

// buttons 
const teamBtnOne = document.getElementById('team-one-1');


let countOne = 0;
let countTwo = 0;

teamBtnOne.addEventListener('click', onePoint)


// function for each button
function onePoint() {
    countOne += 1;
    teamOne.textContent = countOne;
}

function twoPoint() {
    countOne += 1;
    teamOne.textContent = countOne;
}

function threePoint() {
    countOne += 1;
    teamOne.textContent = countOne;
}

function twoPoint() {
    countOne += 2;
    countTwo += 2;

    teamOne.textContent = countOne;
    teamTwo.textContent = countTwo;
}

function threePoint() {
    countOne += 3;
    countTwo += 3;

    teamOne.textContent = countOne;
    teamTwo.textContent = countTwo;
}