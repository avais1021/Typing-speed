const setOfWords = [
    "You do not find the happy life. You make it." ,
    "The most wasted of days is one without laughter." ,
    "Stay close to anything that makes you glad you are alive." ,
    "Make each day your masterpiece." ,
    "Happiness is not by chance, but by choice." ,
    "Impossible is for the unwilling."
];

const msg = document.getElementById("msg");
const typeWords = document.getElementById("myWords");
const btn = document.getElementById("btn");
let startTime,endTime; 


const playGame = () =>{
    let randomNumber = Math.floor( Math.random()*setOfWords.length);
    msg.innerText = setOfWords[randomNumber];
    let date = new Date();
    startTime = date.getTime();
    btn.innerText = "Done";
    console.log(startTime);
}

// const endplay = () => {
//     let date = new Date();
//     endTime = date.getTime();
//     let totalTime = ((endTime - startTime)/1000);
//     console.log(totalTime);

//     let toatalStr = typeWords.value;
//     let wordCount = wordCounter(toatalStr);

//     let speed = Math.round((wordCount/totalTime) * 60);

//     let finalMsg = " You typed at " +speed+ " words per minutes";
//     msg.innerText = finalMsg;
// }

const wordCounter = (str) =>{
    let responce = str.split(" ").length;
    console.log(responce);
    return responce;
}
  

// --
typeWords.disabled = true;
// --

btn.addEventListener ('click' , function(){
    console.log(this);
    if(this.innerText == "START"){
        typeWords.disabled = false;
        // alert(2)
        playGame();
    }
    else if (this.innerText == "DONE")
    {
        typeWords.disabled = true ; 
        btn.innerText = "Start";
        // alert(1)
        // endplay();
    }
});


