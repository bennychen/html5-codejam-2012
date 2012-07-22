function OnEnterMenuState()
{
	//TODO
	initMenu();
	backgroundMusic = SoundJS.play( "backgroundmusic" , SoundJS.INTERRUPT_ANY, 0, 0, -1 );
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

	var menuStartActive = assets.menustartactive.bmp;
	menuStartActive.x = 350;
	menuStartActive.y = 320;
	//MenuState.container.addChild( menuStartActive );
	menuStartActive.visible = false;

	var menuStart = assets.menustart.bmp;
	menuStart.x = 350;
	menuStart.y = 320;
	MenuState.container.addChild(menuStart);

	(function(target) {
		menuStart.onPress = function(evt) 
		{
			//menuStartActive.visible = true;
			//menuStart.visible = false;
			SM.SetStateByName( "gameIntro" );
		}
		menuStart.onClick = function(evt)
		{
			//menuStartActive.visible = false;
			//menuStart.visible = true;

			//cross browser issues exist
			SM.SetStateByName( "gameIntro" );
		}
		menuStart.onMouseOver = function() {
			
		}
		menuStart.onMouseOut = function() {

		}
	})(menuStart);	 	 
	stage.update();	 
}


var MenuState = new State( OnEnterMenuState, OnExitMenuState );

