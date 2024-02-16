function runTime(){
    timeout = setInterval(function () {
        time-=1;
        $("#time").text(time);
        pointsCorrent-=100;
        if (time<=0){
            stopTime();
            pointsCorrent=1;
            
        }

    },1000)
}
function stopTime(){
    clearInterval(timeout);
}
