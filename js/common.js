// (function(){
// })();
    
let inputNum = 1;

window.onload = function(){
    moveFocus(inputNum);
}

function moveFocus(curNum){
    const guessFirst = document.querySelector(`input[data-index="${curNum}"]`);
    guessFirst.addEventListener("keyup",function(event){
        if(curNum == inputNum){
            inputNum++;
            document.querySelector(`input[data-index="${inputNum}"]`).focus();
        }
    })
}