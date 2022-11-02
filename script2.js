const setOfWords = [
    "You do not find the happy life. You make it.",
    "The most wasted of days is one without laughter.",
    "Stay close to anything that makes you glad you are alive.",
    "Make each day your masterpiece.",
    "Happiness is not by chance, but by choice.",
    "Impossible is for the unwilling."
];

// console.log(setOfWords);

const msg = document.getElementById("msg");
const typeWords = document.getElementById("myWords");
const btn = document.getElementById("btn");
let startTime, endTime;


const playGame = () => {
    let randomNumber = Math.floor(Math.random() * setOfWords.length);
    msg.innerText = setOfWords[randomNumber];
    //  console.log(randomNumber);
    let date = new Date();
    startTime = date.getTime();
    btn.innerText = "DONE";
    //  console.log(startTime);
}

const endGame = () => {
    let date = new Date();
    endTime = date.getTime();
    let totalTime = ((endTime - startTime) / 1000);

    let totalstr = typeWords.value;
    let wordCount = wordCounter(totalstr);

    let speed = Math.round((wordCount / totalTime) * 60);

    let finalMsg = "You typed total at " + speed + " words per minutes, ";
    finalMsg += compareWords(msg.innerText, totalstr)
    msg.innerText = finalMsg;
    console.log(speed);
}

const compareWords = (str1, str2) => {
    let words1 = str1.split(" ");
    let words2 = str2.split(" ");
    let cnt = 0;

    words1.forEach(function (item, index) {
        if (item == words2[index]) {
            cnt++;
        }
    })

    let errorWords = (words1.length - cnt);
    return (cnt + " correct out of " + words1.length + " words and the total number of error are " + errorWords + " .");
    alert("error")
}

const wordCounter = (str) => {
    let responce = str.split(" ").length;
    console.log(responce);
    return responce;
}


btn.addEventListener("click", function () {
    if (this.innerText == "START") {
        typeWords.disabled = false;
        playGame();
    } else if (this.innerText == "DONE") {
        typeWords.disabled = true;
        btn.innerText = "START";
        msg.setAttribute("style", "color:#fb6969;")
        endGame();
    }
});