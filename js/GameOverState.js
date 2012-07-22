function OnEnterGameOverState()
{
	//TODO
	var failureDialog = $('<div></div>').append($('<p></p>').html('Sorry'));
	var successDialog = $('<div></div>').append($('<p></p>').html('Yeah'));
	if(orderSummary.isOrderComplete()) {
		$('#canvasHolder').after(successDialog);
	}
	else{
		$('#canvasHolder').after(failureDialog);
	}
}

function OnExitGameOverState()
{
	//TODO
}

var GameOverState = new State( OnEnterGameOverState, OnExitGameOverState );

