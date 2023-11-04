var rect = document.querySelector("#center");
rect.addEventListener("mousemove",function(details){
  var rectLocation = rect.getBoundingClientRect();
  var insiderectval = details.clientX - rectLocation.left;

  if(insiderectval< rectLocation.width/2){
    console.log("left");
  }
  else{
    console.log("right");
  }
});