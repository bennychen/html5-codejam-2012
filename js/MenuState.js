function OnEnterMenuState()
{
	//TODO
	 var menuBg = new Bitmap('img/menubg.png');
	 var menuStart = new Bitmap('img/menustart.png');
	 stage.addChild(menuBg);

	 	 
	 menuStart.x = 350;
	 menuStart.y = 320;
	 stage.addChild(menuStart);
	 menuStart.onPress = handleStartPress;
	 stage.update();
	 
}

function OnExitMenuState()
{
	stage.removeAllChildren();
	stage.update();
}

//allow for WASD and arrow control scheme
function handleStartPress(event) {
	//cross browser issues exist
	SM.SetStateByName( "ingame" );
}


var MenuState = new State( OnEnterMenuState, OnExitMenuState );

