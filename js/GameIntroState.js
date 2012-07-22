function OnEnterGameIntroState()
{
	level.generateNextLevel();
  //  orderSummary = new orderSummary();
	setIntroUI();
	showIntroUI();	
}

function OnExitGameIntroState()
{
	hideIntroUI();
}

var GameIntroState = new State( OnEnterGameIntroState, OnExitGameIntroState );

