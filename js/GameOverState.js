function OnEnterGameOverState()
{
	if(orderSummary.isOrderComplete()) {
		
	}
	else{
		showOrderFailUI();
	}
}

function OnExitGameOverState()
{
	//TODO
}

var GameOverState = new State( OnEnterGameOverState, OnExitGameOverState );

