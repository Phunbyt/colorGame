let but1 = document.getElementById("but1");
let but2 = document.getElementById("but2");
let but3 = document.getElementById("but3");
let but4 = document.getElementById("but4");
let but5 = document.getElementById("but5");
let but6 = document.getElementById("but6");
let but7 = document.getElementById("but7");
let but8 = document.getElementById("but8");

let counter = document.getElementById('counter');
let score = 0;

setInterval(() => {
    function randColor() {
        let availColor = ["red", "yellow", "green", "blue", "purple", "orange", "brown", "peru", "seagreen", "aqua", "chartreuse", "crimson", "chocolate", "darkgoldenrod"];
        let colorLoop = Math.floor(Math.random() * availColor.length) + 0;

        return (availColor[colorLoop]);

    }

    let randNum = Math.floor(Math.random() * 8) + 1;

    let hold1 = 1;
    if (randNum == hold1) {
        but1.style.backgroundColor = but1.innerHTML = randColor();
    } else {
        but1.style.backgroundColor = "white";
        but1.innerHTML = "";
    }



    let hold2 = 2;
    if (randNum == hold2) {
        but2.style.backgroundColor = but2.innerHTML = randColor();
    } else {
        but2.style.backgroundColor = "white";
        but2.innerHTML = "";
    }


    let hold3 = 3;
    if (randNum == hold3) {
        but3.style.backgroundColor = but3.innerHTML = randColor();
    } else {
        but3.style.backgroundColor = "white";
        but3.innerHTML = "";
    }

    let hold4 = 4;
    if (randNum == hold4) {
        but4.style.backgroundColor = but4.innerHTML = randColor();
    } else {
        but4.style.backgroundColor = "white";
        but4.innerHTML = "";
    }

    let hold5 = 5;
    if (randNum == hold5) {
        but5.style.backgroundColor = but5.innerHTML = randColor();
    } else {
        but5.style.backgroundColor = "white";
        but5.innerHTML = "";
    }

    let hold6 = 6;
    if (randNum == hold6) {
        but6.style.backgroundColor = but6.innerHTML = randColor();
    } else {
        but6.style.backgroundColor = "white";
        but6.innerHTML = "";
    }


    let hold7 = 7;
    if (randNum == hold7) {
        but7.style.backgroundColor = but7.innerHTML = randColor();
    } else {
        but7.style.backgroundColor = "white";
        but7.innerHTML = "";
    }

    let hold8 = 8;
    if (randNum == hold8) {
        but8.style.backgroundColor = but8.innerHTML = randColor();
    } else {
        but8.style.backgroundColor = "white";
        but8.innerHTML = "";
    }


    let bu1 = document.getElementById("rectangle");
    bu1.style.backgroundColor = randColor();


}, 700);

but1.addEventListener('click', (e) => {
    if ((e.target === but1) && (but1.style.backgroundColor === 'white')) {
        but1.innerText = "try again";
    } else {
        but1.innerText = "i was clicked";

        counter.innerHTML = score++;

    }
})

but2.addEventListener('click', (e) => {
    if ((e.target === but2) && (but2.style.backgroundColor === 'white')) {
        but2.innerText = "try again";
    } else {
        but2.innerText = "i was clicked";


        counter.innerHTML = score++;
    }
})

but3.addEventListener('click', (e) => {
    if ((e.target === but3) && (but3.style.backgroundColor === 'white')) {
        but3.innerText = "try again";
    } else {
        but3.innerText = "i was clicked";

        counter.innerHTML = score++;
    }
})

but4.addEventListener('click', (e) => {
    if ((e.target === but4) && (but4.style.backgroundColor === 'white')) {
        but4.innerText = "try again";
    } else {
        but4.innerText = "i was clicked";

        counter.innerHTML = score++;
    }
})

but5.addEventListener('click', (e) => {
    if ((e.target === but5) && (but5.style.backgroundColor === 'white')) {
        but5.innerText = "try again";
    } else {
        but5.innerText = "i was clicked";

        counter.innerHTML = score++;
    }
})

but6.addEventListener('click', (e) => {
    if ((e.target === but6) && (but6.style.backgroundColor === 'white')) {
        but6.innerText = "try again";
    } else {
        but6.innerText = "i was clicked";

        counter.innerHTML = score++;
    }
})

but7.addEventListener('click', (e) => {
    if ((e.target === but7) && (but7.style.backgroundColor === 'white')) {
        but7.innerText = "try again";
    } else {
        but7.innerText = "i was clicked";

        counter.innerHTML = score++;
    }
})

but8.addEventListener('click', (e) => {
    if ((e.target === but8) && (but8.style.backgroundColor === 'white')) {
        but8.innerText = "try again";
    } else {
        but8.innerText = "i was clicked";

        counter.innerHTML = score++;
    }
})

// mobile Js

let mbut1 = document.getElementById("mbut1");
let mbut2 = document.getElementById("mbut2");
let mbut3 = document.getElementById("mbut3");
let mbut4 = document.getElementById("mbut4");
let mbut5 = document.getElementById("mbut5");
let mbut6 = document.getElementById("mbut6");
let mbut7 = document.getElementById("mbut7");
let mbut8 = document.getElementById("mbut8");

let mcounter = document.getElementById('mcounter');
let mscore = 0;

setInterval(() => {
    function mrandColor() {
        let mavailColor = ["red", "yellow", "green", "blue", "purple", "orange", "brown", "peru", "seagreen", "aqua", "chartreuse", "crimson", "chocolate", "darkgoldenrod"];
        let mcolorLoop = Math.floor(Math.random() * mavailColor.length) + 0;

        return (mavailColor[mcolorLoop]);

    }

    const mrandWords = () => {
        let words = ['Holla!', 'Catch Me!', "I'm here!"];
        let wordLoop = Math.floor(Math.random() * words.length) + 0;

        return (words[wordLoop]);
    }

    let mrandNum = Math.floor(Math.random() * 8) + 1;

    let mhold1 = 1;
    if (mrandNum == mhold1) {
        mbut1.style.backgroundColor = mrandColor();
        mbut1.innerHTML = mrandWords();
    } else {
        mbut1.style.backgroundColor = "white";
        mbut1.innerHTML = "";
    }



    let mhold2 = 2;
    if (mrandNum == mhold2) {
        mbut2.style.backgroundColor = mrandColor();
        mbut2.innerHTML = mrandWords();
    } else {
        mbut2.style.backgroundColor = "white";
        mbut2.innerHTML = "";
    }


    let mhold3 = 3;
    if (mrandNum == mhold3) {
        mbut3.style.backgroundColor = mrandColor();
        mbut3.innerHTML = mrandWords();
    } else {
        mbut3.style.backgroundColor = "white";
        mbut3.innerHTML = "";
    }

    let mhold4 = 4;
    if (mrandNum == mhold4) {
        mbut4.style.backgroundColor = mrandColor();
        mbut4.innerHTML = mrandWords();
    } else {
        mbut4.style.backgroundColor = "white";
        mbut4.innerHTML = "";
    }

    let mhold5 = 5;
    if (mrandNum == mhold5) {
        mbut5.style.backgroundColor = mrandColor();
        mbut5.innerHTML = mrandWords();
    } else {
        mbut5.style.backgroundColor = "white";
        mbut5.innerHTML = "";
    }

    let mhold6 = 6;
    if (mrandNum == mhold6) {
        mbut6.style.backgroundColor = mrandColor();
        mbut6.innerHTML = mrandWords();
    } else {
        mbut6.style.backgroundColor = "white";
        mbut6.innerHTML = "";
    }


    let mhold7 = 7;
    if (mrandNum == mhold7) {
        mbut7.style.backgroundColor = mrandColor();
        mbut7.innerHTML = mrandWords();
    } else {
        mbut7.style.backgroundColor = "white";
        mbut7.innerHTML = "";
    }

    let mhold8 = 8;
    if (mrandNum == mhold8) {
        mbut8.style.backgroundColor = mrandColor();
        mbut8.innerHTML = mrandWords();
    } else {
        mbut8.style.backgroundColor = "white";
        mbut8.innerHTML = "";
    }


    let mbu1 = document.getElementById("mrectangle");
    mbu1.style.backgroundColor = mrandColor();


}, 700);

mbut1.addEventListener('click', (e) => {
    if ((e.target === mbut1) && (mbut1.style.backgroundColor === 'white')) {
        mbut1.innerText = "try again";
    } else {
        mbut1.innerText = "i was clicked";

        mcounter.innerHTML = mscore++;

    }
})

mbut2.addEventListener('click', (e) => {
    if ((e.target === mbut2) && (mbut2.style.backgroundColor === 'white')) {
        mbut2.innerText = "try again";
    } else {
        mbut2.innerText = "i was clicked";


        mcounter.innerHTML = mscore++;
    }
})

mbut3.addEventListener('click', (e) => {
    if ((e.target === mbut3) && (mbut3.style.backgroundColor === 'white')) {
        mbut3.innerText = "try again";
    } else {
        mbut3.innerText = "i was clicked";

        mcounter.innerHTML = mscore++;
    }
})

mbut4.addEventListener('click', (e) => {
    if ((e.target === mbut4) && (mbut4.style.backgroundColor === 'white')) {
        mbut4.innerText = "try again";
    } else {
        mbut4.innerText = "i was clicked";

        mcounter.innerHTML = mscore++;
    }
})

mbut5.addEventListener('click', (e) => {
    if ((e.target === mbut5) && (mbut5.style.backgroundColor === 'white')) {
        mbut5.innerText = "try again";
    } else {
        mbut5.innerText = "i was clicked";

        mcounter.innerHTML = mscore++;
    }
})

mbut6.addEventListener('click', (e) => {
    if ((e.target === mbut6) && (mbut6.style.backgroundColor === 'white')) {
        mbut6.innerText = "try again";
    } else {
        mbut6.innerText = "i was clicked";

        mcounter.innerHTML = mscore++;
    }
})

mbut7.addEventListener('click', (e) => {
    if ((e.target === mbut7) && (mbut7.style.backgroundColor === 'white')) {
        mbut7.innerText = "try again";
    } else {
        mbut7.innerText = "i was clicked";

        mcounter.innerHTML = mscore++;
    }
})

mbut8.addEventListener('click', (e) => {
    if ((e.target === mbut8) && (mbut8.style.backgroundColor === 'white')) {
        mbut8.innerText = "try again";
    } else {
        mbut8.innerText = "i was clicked";

        mcounter.innerHTML = mscore++;
    }
})