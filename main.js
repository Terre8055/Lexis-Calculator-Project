const textview = document.form.textview; //Assign the class attribute 'textview to the variable
const answerAudio = document.getElementById('answer'); //Audio for Equals button
const tickSoundAudio = document.getElementById('ticksound');//Audio for all buttons except (=)
const introAudio = document.getElementById('intro');//To be played upon window onload


function insert(key){
    textview.value += key;
}

function equal(){
    const keyExpression = textview.value;
    if(keyExpression){ //Evaluate textview field if not empty
        textview.value = eval(keyExpression)
    }
}

function clearScreen(){
    textview.value = ''
}

function backSpace(){
    const keyExpression = textview.value;
    textview.value = keyExpression.substring(0, keyExpression.length-1);
}


function playAnswerAudio(){
    answerAudio.play();
}


function playTickSoundAudio(){
    tickSoundAudio.play();
}

window.onload = function() {
    introAudio.play();
};