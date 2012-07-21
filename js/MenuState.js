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

	// load the source image:
	MenuState.startimage = new Image();
	MenuState.startimage.src = 'img/menustart.png';
	MenuState.startimagehover = new Image();
	MenuState.startimagehover.src = 'img/menustartactive.png';
	var bgimage = new Image();
	bgimage.src = "img/menubg.png";
	
	
	MenuState.container = new Container();
	stage.addChild(MenuState.container);

	var bitmap = new Bitmap(bgimage);
	MenuState.container.addChild(bitmap);
	bitmap = new Bitmap(MenuState.startimage);
		
	bitmap.x = 350;
	bitmap.y = 320;
	
	 
	MenuState.container.addChild(bitmap);
	//bitmap.onPress = handleStartPress;
	

	(function(target) {
		bitmap.onPress = function(evt) {
			//cross browser issues exist
			SM.SetStateByName( "ingame" );

		}
		bitmap.onMouseOver = function() {
			
		}
		bitmap.onMouseOut = function() {

		}
	})(bitmap);	 	 
	stage.update();	 

}


var MenuState = new State( OnEnterMenuState, OnExitMenuState );

