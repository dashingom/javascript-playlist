function updateTimer(deadline){
  var time = deadline - new Date();

  return {
    "Days": Math.floor(time/(1000*60*60*24)),
    "Hours": Math.floor(time/(1000*60*60) % 24),
    "Minutes": Math.floor(time/(1000*60) % 60),
    "Seconds": Math.floor(time/(1000) % 60),
    "total": time
  };
}

function animateClock(span){
  span.className = "turn";
  setTimeout(function(){
    span.className = "";
  }, 700);
}

function startTimer(id, deadline){
  var timeInterval = setInterval(function(){
    var clock = document.getElementById(id);
    var timer = updateTimer(deadline);

    clock.innerHTML = "<span>" + timer.Days + "</span>"
                    + "<span>" + timer.Hours + "</span>"
                    + "<span>" + timer.Minutes + "</span>"
                    + "<span>" + timer.Seconds + "</span>"

    var spans = document.getElementsByTagName("span");
    animateClock(spans[3]);
    if(timer.Seconds == 59) animateClock(spans[2]);
    if(timer.Minutes == 59 && timer.Seconds == 59) animateClock(spans[1]);
    if(timer.Hours == 23 && timer.Minutes == 59 && timer.Seconds == 59) animateClock(spans[0]);
    if(timer < 1){
      clearInterval(timeInterval);
      clock.innerHTML = "<span>0</span><span>0</span><span>0</span><span>0</span>";
    }
  }, 1000);
}

window.onload = function(){
  var deadline = new Date("June 19, 2018 16:00:00");
  startTimer("clock", deadline);
}