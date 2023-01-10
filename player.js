var play=0;
var muted=1;
function pal(){
var vide=document.getElementById("vid");
if(play==1){
palbtn.src="pause.png";
vide.play();
play=0;
}
else{
palbtn.src="play.png";
vide.pause();
play=1;
}
}
function aum(){
var vide=document.getElementById("vid");
if(muted==1){
aumbtn.src="muted.png";
vide.muted=true;
muted=0;
}
else{
aumbtn.src="audio.png";
vide.muted=false;
muted=1;
}
}