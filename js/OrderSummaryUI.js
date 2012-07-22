var orderSummaryUI;

$(document).ready(function() {
	orderSummaryUI = $('#inGameMenu');
});

function showOrderSummaryUI() {
	orderSummaryUI.fadeIn();
}

function initOrderSummaryUIByLevel(level) {
	
}

function setOrderSummaryUIByIngredient(ingredientCountToGo) {

	for( var i=0; i<IngredientTypes.length; i++) {
		var type = IngredientTypes[i];
		if(ingredientCountToGo[type] != undefined)
		{
			$('#' + type + 'Num').text( ingredientCountToGo[type] );
		}
		
	}
}