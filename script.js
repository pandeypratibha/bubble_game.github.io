function makebubble() {
  var clutter = "";
  for (var i = 1; i <= 168; i++) {
    var rn = Math.floor(Math.random() * 10);
    clutter += `<div class="bubble">${rn}</div>`;
  }
  document.querySelector("#pbtm").innerHTML = clutter;
}
var timerint = 60;
var score=0;
var hitrn=0;


function increaseScore(){
    //Jispe click karoge wo element par event raise hoga , aur event listner naa milne par event element ke parent par listner dhundhega waha bhi naa milne par event parent ke parent par listner dhundhega.
    score += 10;
    document.querySelector("#scoreval").textContent = score;

}

function hitValue() {
  hitrn = Math.floor(Math.random() * 10);
  document.querySelector("#hitval").textContent = hitrn;
}

function runTimer() {
  var timer = setInterval(function () {
    if (timerint > 0) {
      timerint--;
      document.querySelector("#timerval").textContent = timerint;
    } else {
      clearInterval(timer);
      document.querySelector("#pbtm").innerHTML =`<h1>GAME OVER...</h1>&#128532;`;
    }
  }, 1000);
}

document.querySelector("#pbtm").addEventListener("click", function(details){
    var clicked =(Number(details.target.textContent));  //identify which bubble had clicked

    if(clicked===hitrn){
        increaseScore();
        makebubble();
        hitValue();
    }
})

runTimer();
makebubble();
hitValue();
