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
	hideSuccessUI();
	hideOrderFailUI();
}

var GameOverState = new State( OnEnterGameOverState, OnExitGameOverState );

