// (function(){
// })();
    
let inputNum = 1;
let spellCount = 5;
let questName = 'guess-first'
const answer = 'truck';

const guessBtn = document.querySelector('#guess-btn');
const historybox = document.querySelector('#history');
const guessInputs = document.querySelectorAll(`#${questName} input`);

guessInputs.forEach(function(boxOne){
    let inputIndex = boxOne.dataset.index;
    boxOne.addEventListener("keyup",function(event){
        // console.log(boxOne.value)
        if(!!boxOne.value){
            // console.log(event.key)
            boxOne.value = event.key;
        }
        if(inputIndex < spellCount){
            document.querySelector(`input[data-index="${inputIndex*1+1}"]`).focus();
        }
    })
})

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
    let inputAnswer = getInputAnswerWord();
    appendAnswer(inputAnswer);

    if(inputAnswer == answer){
        alert('정답')
    }else{
        alert('오답')
    }
}

function getInputAnswerWord(){
    
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