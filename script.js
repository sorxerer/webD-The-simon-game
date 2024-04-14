
let level= 0;
let started=false ;
let gamePattern=[];
let choosenPattern=[];
let colorPattern= ["red", "blue", "green", "yellow"];
let score=0;

function gameMain(){
    
    if(!started){console.log('game started');
        nextSequence();
        started=true;
        document.querySelector('.simongame').innerHTML='Simon game';
        document.querySelector('#gameon').innerHTML='In game';
        
    }
}

//click button choosen color 
for(let i=0 ; i<colorPattern.length ; i++){
  
    document.querySelectorAll('.b')[i].addEventListener('click' ,handleclick)
}

function handleclick(){
  if(started){
        let choosenColor = this.getAttribute("id");
        choosenPattern.push(choosenColor);
        console.log(choosenPattern);
        playSound(choosenColor);
        // console.log(choosenPattern.length-1);
        checkAnswer(choosenPattern.length-1);
        }
}

//check choosen color and game pattern
function checkAnswer(number){
  console.log('cleck reached');
  if(started){
  if(gamePattern[number]=== choosenPattern[number]){
      if(gamePattern.length=== choosenPattern.length){
          setTimeout(function () {
        nextSequence();
      }, 1000);
      }
     
 
    }
    else{
      console.log('gameover');
        playSound('wrong');

        document.querySelector("body").classList.add('over');
        setTimeout(function(){
            document.querySelector("body").classList.remove('over');
        },200);
        
        gameover();
    }}
  }


function nextSequence(){

    choosenPattern=[];
    console.log(choosenPattern);
    level++;
    score=level;
    document.querySelector("#level").innerHTML=`level : ${level}`;
    let randomNumber= Math.floor(Math.random()*3 )+1 ;
    console.log(randomNumber);
    randomChoosenColor=colorPattern[randomNumber];
    console.log(randomChoosenColor);
    gamePattern.push(randomChoosenColor);
    console.log(gamePattern);
    document.querySelector('#'+ randomChoosenColor).classList.add('animate');
    setTimeout(
        function(){
            document.querySelector('#'+ randomChoosenColor).classList.remove('animate');
        },200
    )  ;
    playSound(randomChoosenColor);
}

//sound animation
function playSound(color){
    let sound= new Audio(`./sounds/${color}.mp3`);
    sound.play();
}

function gameover(){
        document.querySelector('.simongame').innerHTML='game over';
        document.querySelector('#gameon').innerHTML='restart';
        level = 0;
        document.querySelector('#level').innerHTML=`level: ${level}`;
        document.querySelector('#score').innerHTML=`score: ${score}`;
        gamePattern = [];
        started = false;
}