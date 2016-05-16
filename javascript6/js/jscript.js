/* ********* global variables ************ */
var parentElem = document.body;
var timer_id;
var starStop = true;
var nStop=0;
var nSplit=0;


var milisecond = document.getElementById("milisecond");
var second = document.getElementById("second");
var minut = document.getElementById("minut");
var hour = document.getElementById("hour");

/* **********  OBJECT ************ */

var mainPage = {

};

/* ********* functions ************ */

function start_func(){
    if (starStop) {
        console.log("Start");
        start.value="Stop"; 
        starStop=false;
        timer_id = setInterval(addTimer, 5);
    }else{
        nStop++;
        starStop=true;
        start.value="Start";
        clearInterval(timer_id);
        var history = document.getElementById("history");
        var p = document.createElement('p');
        p.innerHTML = nStop + ' ' + 'Stop: ' + hour.innerHTML + ':' + minut.innerHTML + ':' + second.innerHTML + '.' + milisecond.innerHTML;
        history.appendChild(p);
    }   
};

function split_func(){
    if (!starStop) {
        console.log("split");
        nSplit++;      
        var history = document.getElementById("history");
        var p = document.createElement('p');
        p.innerHTML = nSplit + ' ' + 'Split: ' + hour.innerHTML + ':' + minut.innerHTML + ':' + second.innerHTML + '.' + milisecond.innerHTML;
        history.appendChild(p);
    };
};

function reset_func(){
    console.log("reset");
    clearInterval(timer_id);
    
    hour.innerHTML="00";
    minut.innerHTML="00";
    second.innerHTML="00";
    milisecond.innerHTML="000";
    var history = document.getElementById("history");
    for (var i = 0; i <(nStop+nSplit); i++) {
        var del = history.querySelector('p');
        history.removeChild(del);
    }
    nSplit=0;
    nStop=0;
    starStop=true;
    start.value="Start";
};


function two_zero(x){
    switch(String(x).length){
        case 1:
            x='00'+x;
            break;
        case 2:
            x='0'+x;
            break;
    }
    return x;
};

function one_zero(x){
    
     switch(String(x).length){
        case 1:
            x='0'+x;
            break;
    }
    return x;
};

function addTimer(){
    var mili = +milisecond.innerHTML
    var sec = +second.innerHTML
    var min = +minut.innerHTML
    var h = +hour.innerHTML
    if (+mili+5>999){
        mili=0;
        if ((+sec+1)>59) {
            sec=0;
            if ((+min+1)>59) {
                min=0;
                +h++;
            }else{
                min++;    
            }
        }else{
            sec++;
        }
    }else{
        mili=+mili+5;    
    };
    milisecond.innerHTML=two_zero(mili);
    second.innerHTML = one_zero(sec);
    minut.innerHTML=one_zero(min);
    hour.innerHTML=one_zero(h);
};

/* *********  < MAIN > ************ */

var start = document.getElementById("start");
start.addEventListener('click', start_func);

var split = document.getElementById("split");
split.addEventListener('click', split_func);

var reset = document.getElementById("reset");
reset.addEventListener('click', reset_func);