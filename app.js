/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/


var score, rounsScore,activePlayer;

function intial(){
    

score=[0,0];
roundScore=0;
activePlayer=0;
document.getElementById('score-0').textContent='0';
document.getElementById('score-1').textContent='0';
document.getElementById('current-0').textContent='0';
document.getElementById('current-1').textContent='0';
    document.querySelector('#name-1').textContent='Player-2';
    document.querySelector('#name-0').textContent='Player-1';
    document.querySelector('.player-1-panel').classList.remove('winner');
        document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.add('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.dice').style.display='none';
        
}

intial();
//dice=Math.floor(Math.random()*6)+1;

//document.querySelector('#current-'+activePlayer).textContent=dice;
/*
document.querySelector('#current-'+activePlayer).innerHTML='<em>'+ dice +'</em>';
THIS TYPE OF SELECTOR "INNERHTML" IS USED TO ADD TEXT AS WELL AS WITH SOME CSS*/

//this is to show that queryselector and textcontent can be used as a getter

/*var x = document.querySelector('#score-0').textContent;
console.log(x);
*/

//this is to show you that we can also style css using the following method
/*
document.querySelector('.dice').style.display='none';
*/
alert('GAME RULES- The game has 2 players, playing in rounds - In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score - BUT, if the player rolls a 1, all his ROUND score gets lost. After that, its the next players turn - The player can choose to Hold, which means that his ROUND score gets added to his GLBAL score. After that, it s the next players turn - THE FIRST PLAYER TO REACH THE 50 points on GLOBAL score wins the game');
var score, rounsScore,activePlayer;


document.querySelector('.btn-roll').addEventListener('click',function(){
    if(score[0]>49||score[1]>49){
        alert('start a new_game plz!');
        return;
    }
    var dice = Math.floor(Math.random()*6)+1;
     var diceDom =document.querySelector('.dice');
    diceDom.style.display='block';
    diceDom.src='dice-'+dice+'.png';
    
    if(dice!==1){
       roundScore+=dice;
        document.querySelector('#current-'+activePlayer).textContent=roundScore;
        
    }
    else{
       nextPlayer();
        
        
        
    }
});

document.querySelector('.btn-hold').addEventListener('click',function(){
   if(score[0]>49||score[1]>49){
        alert('start a new_game plz!');
        return;
    }
    score[activePlayer]+=roundScore;
    
    
    document.querySelector('#score-'+activePlayer).textContent=score[activePlayer];
    
    if(score[activePlayer]>49){
        document.querySelector('#name-'+activePlayer).textContent='Winner!';
          document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
        document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');
      
         roundScore=0;
        
        document.getElementById('current-'+activePlayer).textContent='0';
        document.querySelector('.dice').style.display='none';
        activePlayer+=1;
        alert('player'+activePlayer+'won the game!');
    }
    
    else{
    nextPlayer();
    
    }
    
});

document.querySelector('.btn-new').addEventListener('click',intial);


function nextPlayer(){
     activePlayer===0?activePlayer=1:activePlayer=0;
        roundScore=0;
        
        document.getElementById('current-0').textContent='0';
        document.getElementById('current-1').textContent='0';
        
       // document.querySelector('.player-0-panel').classList.remove('active');
       // document.querySelector('.player-1-panel').classList.add('active');
        
        document.querySelector('.player-0-panel').classList.toggle('active');
       document.querySelector('.player-1-panel').classList.toggle('active');
    
}








