function OnEnterMenuState()
{
	//TODO
	initMenu();
}

function OnExitMenuState()
{
	stage.removeChild(MenuState.container);
	stage.update();
}



function handleBgImageLoad(event) {
	var image = event.target;
	 
}

function initMenu() {

	MenuState.container = new Container();
	stage.addChild(MenuState.container);

	MenuState.container.addChild(assets.menubackground.bmp);

	var menuStart = assets.menustart.bmp;
	menuStart.x = 350;
	menuStart.y = 320;
	MenuState.container.addChild(menuStart);
	//bitmap.onPress = handleStartPress;

	(function(target) {
		menuStart.onPress = function(evt) {
			//cross browser issues exist
			SM.SetStateByName( "ingame" );

		}
		menuStart.onMouseOver = function() {
			
		}
		menuStart.onMouseOut = function() {

		}
	})(menuStart);	 	 
	stage.update();	 
}


var MenuState = new State( OnEnterMenuState, OnExitMenuState );

