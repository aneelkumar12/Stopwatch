var min_id = document.getElementById("min");
var sec_id = document.getElementById("sec");
var milisec_id = document.getElementById("milisec");
var min = 0;
var sec = 0;
var mili = 0;
var Interval2


function start(){
    Interval2= setInterval(timer,17)
    document.getElementById('start').setAttribute("disabled" ,true)
    document.getElementById('pause').removeAttribute("disabled")
    
}

function timer(){
mili++;
milisec_id.innerText = mili;
if(mili>60){
    sec++;
    sec_id.innerText = sec;
    mili = 0;

}
if(sec>60){
    min++;
    min_id.innerText = min;
    sec= 0;
}
}

function pause(){
    clearInterval(Interval2)
    document.getElementById("start").removeAttribute("disabled");
    document.getElementById("pause").setAttribute("disabled" ,true);
   
   
}
   
function reset(){
    mili = 0, ":";
    min =  0,  ":";
    sec =  0, ":";
    milisec_id.innerText = mili;
    sec_id.innerText = sec;
    min_id.innerText = min;
    clearInterval(Interval2)
    document.getElementById("start").removeAttribute("disabled");
}




