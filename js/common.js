// (function(){
// })();
    
let inputNum = 1;
let spellCount = 5;
let questName = 'guess-first'
const answer = 'truck';

const guessBtn = document.querySelector('#guess-btn');
const historybox = document.querySelector('#history');
const guessInputs = document.querySelectorAll(`#${questName} input`);

guessBtn.addEventListener('click',function(){

    checkAnswer();
})


function moveFocus(currentNum){
    const guessFirst = document.querySelector(`input[data-index="${currentNum}"]`);
    guessFirst.addEventListener("keyup",function(event){
        if(currentNum < spellCount){
            document.querySelector(`input[data-index="${currentNum*1+1}"]`).focus();
        }
    })
}

function checkAnswer(){
    let inputAnswer = getInputAnswer();
    appendAnswer(inputAnswer);

    if(inputAnswer == answer){
        alert('정답')
    }else{
        alert('오답')
    }
}

function getInputAnswer(){
    
    let guessAnswer = '';

    guessInputs.forEach(function(element) {
        guessAnswer += element.value
    });

    return guessAnswer;
}


function appendAnswer(inputAnswer){
    let li = document.createElement('li');
    li.append(inputAnswer);
    historybox.append(li);
}