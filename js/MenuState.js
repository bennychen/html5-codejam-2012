function OnEnterMenuState()
{
	//TODO
	 var menuBg = new Bitmap('img/menubg.png');
	 var menuStart = new Bitmap('img/menustart.png');
	 stage.addChild(menuBg);

	 	 
	 menuStart.x = 350;
	 menuStart.y = 320;
	 
	 stage.addChild(menuStart);
	 stage.update();
}

function OnExitMenuState()
{
	//TODO
}

var MenuState = new State( OnEnterMenuState, OnExitMenuState );

