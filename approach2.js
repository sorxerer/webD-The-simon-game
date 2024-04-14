

let buttonArray=["red","green","blue","yellow"];
let gamesPattern=[];
let level=0;
let score=0;
let hs=0;
let randomChosenColor;

// let choosenButton= $("button").css("color") ;
function nextSequence(){
    let randomNumber=(Math.floor(Math.random()*4));
    randomChosenColor= buttonArray[randomNumber];
    return randomChosenColor;
}
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


async function gameMain(){

    let cooler=nextSequence();
    gamesPattern.push(cooler);
    let select= `.${gamesPattern[gamesPattern.length-1]}`;
    document.querySelector(select).classList.add('animate');
    await delay(500);
    document.querySelector(select).classList.remove('animate');

    // alert(gamesPattern);
    let gameOver= false;
    // alert(choosenButton);
    for(let i=0; i< (gamesPattern.length) ; i++){
        let choosenButton = await new Promise(resolve => setTimeout(() => {
           
            resolve(prompt('type something'));
          
        }, 100));
  
    
    if(choosenButton!=gamesPattern[i]){
        gameOver=true;
        break;
    }}
   



    if (gameOver) {
        let over = new Audio("./sounds/wrong.mp3");
        over.play();
        delay(1000);
        document.querySelector(".simongame").innerHTML = 'Game over';
        document.getElementById("level").innerHTML = 'Level:0';
        gamesPattern = [];
        level = 0;
        document.getElementById("gameon").innerHTML = "restart";
        console.log(level);
        // if(level>score){
        document.getElementById('score').innerHTML =` score: ${score}`;
        // else{
        // document.getElementById('score').innerHTML =` score: ${score}`;
        // }
        // if( hs<=score){
        //     document.getElementById('highest').innerHTML =` highest Score: ${score}`;
        // }
        // if(level)
        // document.getElementById('highest').innerHTML =` highest Score: ${score}`;
        score=0;
    }
    else{
       console.log('level up entered');
       level++;
       score++;
       console.log(level);
       document.getElementById('level').innerHTML =` level: ${level}`;
       console.log(score);

        gameMain();
    }
    

}
