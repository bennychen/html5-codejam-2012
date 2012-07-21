function OnEnterInGameState()
{	
	//register key functions
	document.onkeydown = handleKeyDown;
	document.onkeyup = handleKeyUp;
	
	initLevel();
	
	controller.startGame();
	//start game timer
	
	Ticker.addListener(window);
}

function OnExitInGameState()
{
	document.onkeydown = null;
	document.onkeyup = null;
	
	controller.stopGame();
	Ticker.removeListener(window)
}

	
//allow for WASD and arrow control scheme
function handleKeyDown(e) {
	//cross browser issues exist
	if(!e){ var e = window.event; }
	switch(e.keyCode) {
		case KEYCODE_LEFT:	lfHeld = true; return false;
		case KEYCODE_RIGHT: rtHeld = true; return false;
	}
}

function handleKeyUp(e) {
	//cross browser issues exist
	if(!e){ var e = window.event; }
	switch(e.keyCode) {
		case KEYCODE_LEFT:	lfHeld = false; break;
		case KEYCODE_RIGHT: rtHeld = false; break;
	}
}

	
function tick() {

	controller.interaction();
	controller.update();
	
}

var InGameState = new State( OnEnterInGameState, OnExitInGameState );

