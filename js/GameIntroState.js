function OnEnterGameIntroState()
{
	initLevel();
	orderSummary = new OrderSummary();
	
	showSuccessUI();
}

function OnExitGameIntroState()
{
	hideSuccessUI();
	hideOrderSummaryUI();
}

var GameIntroState = new State( OnEnterGameIntroState, OnExitGameIntroState );

