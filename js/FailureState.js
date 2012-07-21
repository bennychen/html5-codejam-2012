function OnEnterFailureState()
{	
	//register key functions
	var btnContinue = new Shape();
	btnContinue.x = 731;
	btnContinue.y = 140;
	
	btnContinue.graphics.beginFill('#FF0099');
	btnContinue.graphics.drawRoundRect(0, 0, 100, 110, 20);
	btnContinue.graphics.endFill();
	btnContinue.alpha = 1;
	btnContinue.onPress = handleContinuePress;
	
	stage.addChild(btnContinue);
	stage.update();
}

function OnExitFailureState()
{

}

//allow for WASD and arrow control scheme
function handleContinuePress(event) {
	
	var btnContinue = event.target;
	stage.removeChild(btnContinue);
	SM.SetStateByName( "ingame" );
	
}

var FailureState = new State( OnEnterFailureState, OnExitFailureState );

