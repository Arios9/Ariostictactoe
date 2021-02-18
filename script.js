$(function() {
 
	var a=$(".squares");
	for(var i=0; i<a.length; i++)
		a[i].letter="";
	$(".squares").click(function() {
		if(checkgameover()=="No"){
			console.log("nene");
			if (this.letter==""){
			this.innerHTML="X";
			this.letter="X";
			if(checkgameover()=="No") engine();	
			}
		}
	});

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
	}

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

	const wins=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];


	function win_exists(){
		for (win of wins)
			if((a[win[0]].letter==a[win[1]].letter&&a[win[0]].letter==a[win[2]].letter&&a[win[0]].letter!=""))
				return true;
		return false;
	}

	function checkgameover(){
		if(win_exists())
		return "Win";
		else{
			for(var i=0; i<a.length; i++)
			if(a[i].letter=="")return "No";
		}
		return "Draw";
	}

	$("#restart").click(function (){
		for(var i=0; i<a.length; i++)
		a[i].letter="";
		a.html("");
	});

});

