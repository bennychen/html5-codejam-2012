function OnEnterGameIntroState()
{
	initLevel();
	orderSummary = new OrderSummary();
	setIntroUI();
	showIntroUI();
	
}

function OnExitGameIntroState()
{
	hideIntroUI();
}

var GameIntroState = new State( OnEnterGameIntroState, OnExitGameIntroState );

