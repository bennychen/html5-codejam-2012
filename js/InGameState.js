
var loader;
var assets;
var manifest;
var sky;
function OnEnterInGameState()
{	
	//register key functions
	document.onkeydown = handleKeyDown;
	document.onkeyup = handleKeyUp;
	
	initLevel();
	
	orderSummary = new OrderSummary();
	
	controller.setOnCatchIngredient( OnCatchIngredient )
	controller.startGame();
	//start game timer
	
	
	assets = [];

	manifest = [
		{src:'./img/verticalsky.jpg', id:"sky"}
	];
	
	loader = new PreloadJS();
	loader.useXHR = false; //Loads the images using tag loading.
	
	loader.onFileLoad = handleFileLoad;
	loader.onComplete = handleComplete;
	
	loader.loadManifest(manifest);
	
	
	
	
	
	
}

function handleFileLoad(event) {

		assets.push(event);
	}

	function handleComplete() {
		for(var i=0;i<assets.length;i++) {
			var item = assets[i]; //loader.getResult(id);
			var id = item.id;
			var result = item.result;
			
			if (item.type == PreloadJS.IMAGE) {
				var bmp = new Bitmap(result);
			}

			switch (id) {
				case "sky":
					// grab canvas width and height for later calculations:
					sky = new Shape(new Graphics().beginBitmapFill(result).drawRect(0,0,canvas.width,5000));
					sky.x=0;
					sky.y=-4100;
			}
		}

		stage.addChildAt(sky,0);
		stage.update();
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
	orderSummary.render();
}

function OnCatchIngredient( ingredient )
{
	console.log( "catch new ingredient" )
	orderSummary.addIngredient(ingredient);
	if(ingredient.getType() == 'top')
	{
		console.log("game over");	
	} 
	else
	{
		//TODO: update tips and update ingredient count in GUI
	}
}

var InGameState = new State( OnEnterInGameState, OnExitInGameState );

