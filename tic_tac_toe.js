let Turn = 1;
let selectedFirstOption = '';
let selectedSecondOption = '';
let Box1 = document.getElementById('box1');
let Box2 = document.getElementById('box2');
let Box3 = document.getElementById('box3');
let Box4 = document.getElementById('box4');
let Box5 = document.getElementById('box5');
let Box6 = document.getElementById('box6');
let Box7 = document.getElementById('box7');
let Box8 = document.getElementById('box8');
let Box9 = document.getElementById('box9');
let firstOption = document.getElementById('selectbutton1');
let secondOption = document.getElementById('selectbutton2');
let optionDisplay = document.getElementById('optiondisplay');
let gameControls = document.getElementById('gamecontrols');
let SelectButtons = document.getElementById('selectbuttons');
let PlayButton = document.getElementById('playbutton');
let StartButton = document.getElementById('startbutton');
let QuitButton = document.getElementById('quitbutton');
let PlayArea = document.getElementById('playarea');
let PlayerTurns = document.getElementById('playerturns');
let MatchResult = document.getElementById('matchresult');
let DisplayMatchResult = document.getElementById('displaymatchresult');


firstOption.addEventListener("change",function(){
  selectedFirstOption=this.value;
});

secondOption.addEventListener("change",function(event){
  selectedSecondOption=event.target.value;
});

function playButton(){
  PlayButton.setAttribute('hidden','hidden');
  StartButton.removeAttribute('hidden');
  SelectButtons.removeAttribute('hidden');
}

function playAgainButton(){
  DisplayMatchResult.setAttribute('hidden','hidden');
  Turn = 1;
  document.getElementById('playagainbutton').setAttribute('hidden','hidden');
  StartButton.removeAttribute('hidden');
  SelectButtons.removeAttribute('hidden');
}

function startButton(){
  if(selectedFirstOption === '' || selectedSecondOption === ''){
    optionDisplay.removeAttribute('hidden');
    optionDisplay.innerHTML = 'YOU SHOULD CHOOSE AN OPTION.';
    return;
  }
  else if(selectedFirstOption === selectedSecondOption){
    optionDisplay.removeAttribute('hidden');
    optionDisplay.innerHTML = 'BOTH ARE SAME!!!! TRY AGAIN!';
    return;
  }
  else{ 
    optionDisplay.setAttribute('hidden','hidden');
    StartButton.setAttribute('hidden','hidden');
    QuitButton.removeAttribute('hidden');
    SelectButtons.setAttribute('hidden','hidden');
    document.getElementById('xbutton').innerHTML = selectedFirstOption;
    document.getElementById('obutton').innerHTML = selectedSecondOption;
    gameControls.removeAttribute('hidden');
    PlayArea.removeAttribute('hidden');
    PlayArea.style.display = "grid";
    PlayerTurns.removeAttribute('hidden');
    PlayerTurns.innerHTML = 'PLAYER 1 TURN';
  }
}

function quitButton(){
  PlayButton.removeAttribute('hidden');
  endGame();
  document.getElementById('playagainbutton').setAttribute('hidden','hidden');
}
  
function box(position){
  if(Turn <= 9 && document.getElementById(`box${position}`).innerHTML === ''){
    if(Turn % 2 === 1){
      if(Turn < 9){
        PlayerTurns.innerHTML = 'PLAYER 2 TURN';
        document.getElementById(`box${position}`).innerHTML = selectedFirstOption; 
        matchResult(selectedFirstOption); 
        Turn++; 
      }    
      else if(Turn === 9){
        document.getElementById(`box${position}`).innerHTML = selectedFirstOption; 
        matchResult(selectedFirstOption); 
        Turn++;
      }
    }
    else if(Turn % 2 === 0){
      if(Turn < 9){
        document.getElementById(`box${position}`).innerHTML = selectedSecondOption;
        PlayerTurns.innerHTML = 'PLAYER 1 TURN';
        matchResult(selectedSecondOption);
        Turn++;
      }
      if(Turn === 9){
        PlayerTurns.innerHTML = 'LAST TURN!';
      }      
    }
  }
  
} 

function matchResult(player){
  if(Box1.textContent != '' && Box1.textContent === Box2.textContent && Box2.textContent === Box3.textContent){
    if(player === Box1.textContent && player === selectedFirstOption){
      DisplayMatchResult.removeAttribute('hidden');
      DisplayMatchResult.innerHTML = 'PLAYER 1 WON!!!!!';
      endGame();
    }
    else if(player === Box1.textContent && player === selectedSecondOption){
      DisplayMatchResult.removeAttribute('hidden');
      DisplayMatchResult.innerHTML = 'PLAYER 2 WON!!!!!';
      endGame();
    }
  }
  else if(Box4.textContent != '' && Box4.textContent === Box5.textContent && Box5.textContent === Box6.textContent){
    if(player === Box4.textContent && player === selectedFirstOption){
      DisplayMatchResult.removeAttribute('hidden');
      DisplayMatchResult.innerHTML = 'PLAYER 1 WON!!!!!';
      endGame();
    }
    else if(player === Box4.textContent && player === selectedSecondOption){
      DisplayMatchResult.removeAttribute('hidden');
      DisplayMatchResult.innerHTML = 'PLAYER 2 WON!!!!!';
      endGame();
    }
  }
  else if(Box7.textContent != '' && Box7.textContent === Box8.textContent && Box8.textContent === Box9.textContent){
    if(player === Box7.textContent && player === selectedFirstOption){
      DisplayMatchResult.removeAttribute('hidden');
      DisplayMatchResult.innerHTML = 'PLAYER 1 WON!!!!!';
      endGame();
    }
    else if(player === Box7.textContent && player === selectedSecondOption){
      DisplayMatchResult.removeAttribute('hidden');
      DisplayMatchResult.innerHTML = 'PLAYER 2 WON!!!!!';
      endGame();
    }
  }
  else if(Box1.textContent != '' && Box1.textContent === Box4.textContent && Box4.textContent === Box7.textContent){
    if(player === Box1.textContent && player === selectedFirstOption){
      DisplayMatchResult.removeAttribute('hidden');
      DisplayMatchResult.innerHTML = 'PLAYER 1 WON!!!!!';
      endGame();
    }
    else if(player === Box1.textContent && player === selectedSecondOption){
      DisplayMatchResult.removeAttribute('hidden');
      DisplayMatchResult.innerHTML = 'PLAYER 2 WON!!!!!';
      endGame();
    }
  }
  else if(Box2.textContent != '' && Box2.textContent === Box5.textContent && Box5.textContent === Box8.textContent){
    if(player === Box2.textContent && player === selectedFirstOption){
      DisplayMatchResult.removeAttribute('hidden');
      DisplayMatchResult.innerHTML = 'PLAYER 1 WON!!!!!';
      endGame();
    }
    else if(player === Box2.textContent && player === selectedSecondOption){
      DisplayMatchResult.removeAttribute('hidden');
      DisplayMatchResult.innerHTML = 'PLAYER 2 WON!!!!!';
      endGame();
    }
  }
  else if(Box3.textContent != '' && Box3.textContent === Box6.textContent && Box6.textContent === Box9.textContent){
    if(player === Box3.textContent && player === selectedFirstOption){
      DisplayMatchResult.removeAttribute('hidden');
      DisplayMatchResult.innerHTML = 'PLAYER 1 WON!!!!!';
      endGame();
    }
    else if(player === Box3.textContent && player === selectedSecondOption){
      DisplayMatchResult.removeAttribute('hidden');
      DisplayMatchResult.innerHTML = 'PLAYER 2 WON!!!!!';
      endGame();
    }
  }
  else if(Box1.textContent != '' && Box1.textContent === Box5.textContent && Box5.textContent === Box9.textContent){
    if(player === Box1.textContent && player === selectedFirstOption){
      DisplayMatchResult.removeAttribute('hidden');
      DisplayMatchResult.innerHTML = 'PLAYER 1 WON!!!!!';
      endGame();
    }
    else if(player === Box1.textContent && player === selectedSecondOption){
      DisplayMatchResult.removeAttribute('hidden');
      DisplayMatchResult.innerHTML = 'PLAYER 2 WON!!!!!';
      endGame();
    }
  }     
  else if(Box3.textContent === Box5.textContent && Box5.textContent === Box7.textContent){
    if(player === Box3.textContent && player === selectedFirstOption){
      DisplayMatchResult.removeAttribute('hidden');
      DisplayMatchResult.innerHTML = 'PLAYER 1 WON!!!!!';
      endGame();
    }
    else if(player === Box3.textContent && player === selectedSecondOption){
      DisplayMatchResult.removeAttribute('hidden');
      DisplayMatchResult.innerHTML = 'PLAYER 2 WON!!!!!';
      endGame();
    }
  }
  else if(Box1.textContent != '' && Box2.textContent != '' && Box3.textContent != '' && Box4.textContent != '' && Box5.textContent != '' && Box6.textContent != '' && Box7.textContent != '' && Box8.textContent != '' && Box9.textContent != ''){
    DisplayMatchResult.removeAttribute('hidden');
    DisplayMatchResult.innerHTML = 'Match Drawn!!!!';
    endGame();
  }
}

function endGame(){
  Turn = 1;
  Box1.innerHTML = '';
  Box2.innerHTML = '';
  Box3.innerHTML = '';
  Box4.innerHTML = '';
  Box5.innerHTML = '';
  Box6.innerHTML = '';
  Box7.innerHTML = '';
  Box8.innerHTML = '';
  Box9.innerHTML = '';
  PlayerTurns.innerHTML = '';
  PlayArea.style.display = "none";
  QuitButton.setAttribute('hidden','hidden');
  gameControls.setAttribute('hidden','hidden');
  optionDisplay.setAttribute('hidden','hidden');
  PlayArea.setAttribute('hidden','hidden');
  document.getElementById('playagainbutton').removeAttribute('hidden');
}
