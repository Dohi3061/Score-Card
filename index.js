let home = 0;
let away = 0;

let homeF = document.getElementById("homeScore");
let awayF = document.getElementById("awayScore");

function rest(){
    home = 0;
    away = 0;
    homeF.textContent = 0;
    awayF.textContent = 0;
}

function plusOne(){
    home+=1;
    homeF.textContent = home;
}
function plusTwo(){
    home+=2;
    homeF.textContent = home;
}
function plusThree(){
    home+=3;
    homeF.textContent = home;
}

function awayPlusOne(){
    away+=1;
    awayF.textContent = away;
}
function awayPlusTwo(){
    away+=2;
    awayF.textContent = away;
}
function awayPlusThree(){
    away+=3;
    awayF.textContent = away;
}