$(function() {
 

//result div
var result=$("#result"); 


var a=$(".squares");
for(var i=0; i<a.length; i++)
	a[i].letter="";
$(".squares").click(function() {
	if(checkgameover()=="No"){
		console.log("nene");
		if (this.letter==""){
		this.innerHTML="X";
		this.letter="X";
		if(checkgameover()!="No")result.html("DRAW");
		else engine();	
		}
	}
});

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
	if(checkgameover()!="No")result.html("you lost");
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
$("#restart").click(function (){
	a.letter="";
	a.html("");
	result.html("");
});

});

