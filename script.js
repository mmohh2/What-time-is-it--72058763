var datenew = new Date();

document.getElementById('date').innerHTML = datenew.getHours() + ':' + datenew.getMinutes() + ':' + datenew.getSeconds();

const pi = 3.14;

function dia() {
    let diam = document.getElementById('number').value;

    let answer = diam * pi;

    document.getElementById("answer").innerText = answer;
}

function opp() {
    let diam = document.getElementById('number').value;

    let answer2 = diam * diam * pi * 0.25;

    console.log(answer2);

    document.getElementById("answer2").innerText = answer2;
}

function bereken() {
    opp();
    dia();
}