const cal = document.form.textview.value
function insert(num){
    document.form.textview.value = document.form.textview.value + num;
}
function equal(){
    var exp = document.form.textview.value;
    if(exp){
        document.form.textview.value = eval(exp)
    }
}
function clean(){
    document.form.textview.value = '';
}
function back(){
    var exp = document.form.textview.value;
    document.form.textview.value = exp.substring(0,exp.length-1);
}




//The EqualTo button plays Answer Audio
const x = document.getElementById('answer');

function playAudio(){
        x.play()
};
//The rest buttons plays Ticksound Audio
const y = document.getElementById('ticksound');

function playAudioo(){
        y.play()
};
//On windowload autoplay Intro Audio
const z = document.getElementById('intro');
window.onload = function playAudio(){
    z.play()
};