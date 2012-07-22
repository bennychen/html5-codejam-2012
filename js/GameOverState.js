function OnEnterGameOverState()
{
	
	if(orderSummary.isOrderComplete()) {
		setSuccessUI();;
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

