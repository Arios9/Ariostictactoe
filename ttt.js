 
 
//array of the 9 squares
var a=[
document.getElementById("a"),
document.getElementById("b"),
document.getElementById("c"),
document.getElementById("d"),
document.getElementById("e"),
document.getElementById("f"),
document.getElementById("g"),
document.getElementById("h"),
document.getElementById("i"),
];

//result div
var result=document.getElementById("result"); 

//setting attributes and events to the elements
for(var i=0; i<a.length; i++){
a[i].letter="";
a[i].onclick = 
function () {
	if(checkgameover()=="No"){
	if (this.letter==""){
	this.innerHTML="X";
	this.letter="X";
	if(checkgameover()!="No")result.innerHTML="DRAW";
	else engine();	}
}
};}
// functions that starts the engine
function engine(){
	var maxscore=-10;
	var bestsquare,score;
	for(var i=0; i<a.length;i++){
		if (a[i].letter==""){
			a[i].letter="O";
			score=minmax(false);
			if(score>maxscore){
				maxscore=score;
				bestsquare=i;
			}
			a[i].letter="";
		}
	}
	a[bestsquare].letter="O";	
	a[bestsquare].innerHTML="O";
	if(checkgameover()!="No")result.innerHTML="you lost";
}
/// a recurcive function that finds the best move
function minmax(enginesturn){	
	if(enginesturn){
		var score=checkgameover();		
		if(score=="Win")return -1;
		if(score=="Draw")return 0;
		var maxscore=-10;
		for(var i=0; i<a.length; i++){
		if(a[i].letter==""){
			a[i].letter="O";
			maxscore=Math.max(maxscore,minmax(false));
			a[i].letter="";
		}}
		return maxscore;
	}else{
		var score=checkgameover();		
		if(score=="Win")return 1;
		if(score=="Draw")return 0;
		var minscore=10;
		for(var i=0; i<a.length; i++){
		if(a[i].letter==""){
			a[i].letter="X";
			minscore=Math.min(minscore,minmax(true));
			a[i].letter="";
		}}
		return minscore;
	}
}
//fuction that checks if the game ended
function checkgameover(){
	if((a[0].letter==a[1].letter&&a[0].letter==a[2].letter&&a[0].letter!="")||
	   (a[3].letter==a[4].letter&&a[3].letter==a[5].letter&&a[3].letter!="")||
	   (a[6].letter==a[7].letter&&a[6].letter==a[8].letter&&a[6].letter!="")||
	   (a[0].letter==a[3].letter&&a[0].letter==a[6].letter&&a[0].letter!="")||
	   (a[1].letter==a[4].letter&&a[1].letter==a[7].letter&&a[1].letter!="")||
	   (a[2].letter==a[5].letter&&a[2].letter==a[8].letter&&a[2].letter!="")||
	   (a[0].letter==a[4].letter&&a[0].letter==a[8].letter&&a[0].letter!="")||
	   (a[2].letter==a[4].letter&&a[2].letter==a[6].letter&&a[2].letter!=""))
       return "Win";
	else{
		for(var i=0; i<a.length; i++)
		if(a[i].letter=="")return "No";
	}
	return "Draw";
}
//restart function
function restart(){
	for(var i=0; i<a.length; i++){
		a[i].letter="";
		a[i].innerHTML="";
	}
	result.innerHTML="";
}

