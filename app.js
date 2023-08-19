var current=document.getElementById("counter-placeholder");
var btnIncr = document.getElementById("btn-increment");
var btnDecr = document.getElementById("btn-decrement");

var number = 0;

function changeColor(number){
  var color="";
  if(number<0){
    color ="red";
  }
  else if(number>0){
    color ="green";
  }
  else{
    color="white";
  }
  return color;
}

btnIncr.addEventListener("click",function(){
  number++;
   current.textContent = number;
   current.style.color =changeColor(number);
});

btnDecr.addEventListener("click",function(){
  number--;
  current.innerHTML = number;
  current.style.color =changeColor(number);
});
