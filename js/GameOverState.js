function OnEnterGameOverState()
{
	
	if(orderSummary.isOrderComplete()) {
		
		player.addTips(orderSummary.calculateTips());
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

