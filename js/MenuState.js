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
	 
	 document.onclick = handleMenuClick;
	 
}

function OnExitMenuState()
{
	stage.removeAllChildren();
	stage.update();
	document.onclick = null;
}

//allow for WASD and arrow control scheme
function handleMenuClick(e) {
	//cross browser issues exist
	SM.SetStateByName( "ingame" );
}


var MenuState = new State( OnEnterMenuState, OnExitMenuState );

