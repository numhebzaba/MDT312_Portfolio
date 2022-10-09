window.onload = pageLoad;

function pageLoad(){
    timeStart()
	// var start = document.getElementById("start");
	// start.onclick = startGame;
}

function startGame(){
	timeStart();
}

function timeStart(){
	var TIMER_TICK = 1000;
	var timer = null;
	var second = 7; 
	var x = document.getElementById('clock');
	//setting timer using setInterval function
	timer = setInterval(timeCount,TIMER_TICK);
	var count = second+1;
	function timeCount(){
        count = count-1;
        console.log(count);
        if(count == 0){
            count = second;
		}
		if(count <= 7 && count > 6){
            
			document.getElementById("rainbow").style.color = "rgb( 148, 0, 211)";
		}
		else if (count <= 6 && count > 5){
			document.getElementById("rainbow").style.color = "rgb(75, 0, 130)";
		}
        else if (count <= 5 && count > 4){
			document.getElementById("rainbow").style.color = "rgb(0, 0, 255)";
		}
        else if (count <= 4 && count > 3){
			document.getElementById("rainbow").style.color = "rgb(0, 255, 0)";

		}
        else if (count <= 3 && count > 2){
			document.getElementById("rainbow").style.color = "rgb(255, 255, 0)";

		}
        else if (count <= 2 && count > 1){
			document.getElementById("rainbow").style.color = "rgb(255, 127, 0)";

		}
        else if (count <= 1 && count > 0){
            document.getElementById("rainbow").style.color = "rgb(255, 0 , 0)";
		}
		
       
	}
}