function OnEnterMenuState()
{
	//TODO
	 var menuBg = new Bitmap('img/menubg.png');
	 var menuStart = new Container();
	 menuStart.addChild(new Bitmap('img/menustart.png'));
	 
	 stage.addChild(menuBg);

	 	 
	 menuStart.x = 350;
	 menuStart.y = 320;
	 menuStart.onClick = handleStartPress;
	 stage.addChild(menuStart);
	 
	 
	 stage.update();
	 
}

function OnExitMenuState()
{
	stage.removeAllChildren();
	stage.update();
}

//allow for WASD and arrow control scheme
function handleStartPress(event) {
	var menuStart = event.target;
	stage.removeChild(menuStart);
	//cross browser issues exist
	SM.SetStateByName( "ingame" );
}


var MenuState = new State( OnEnterMenuState, OnExitMenuState );

