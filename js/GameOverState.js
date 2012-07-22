function OnEnterGameOverState()
{
	if(orderSummary.isOrderComplete()) {
		showSuccessUI();
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

