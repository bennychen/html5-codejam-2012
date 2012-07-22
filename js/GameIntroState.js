function OnEnterGameIntroState()
{
	initLevel();
	orderSummary = new OrderSummary();
	
	showIntroUI();
}

function OnExitGameIntroState()
{
	hideIntroUI();
}

var GameIntroState = new State( OnEnterGameIntroState, OnExitGameIntroState );

