var orderSummaryUI;
var orderFailUI;

$(document).ready(function() {
	orderSummaryUI = $('#inGameMenu');
	orderFailUI = $('#orderFailDialog');
	
	orderFailUI.click(function(){
		
	});
});

function showOrderFailUI() {
	orderFailUI.fadeIn();
}
function hideOrderFailUI() {
	orderFailUI.fadeOut();
}
function showOrderSummaryUI() {
	orderSummaryUI.fadeIn();
}
function hideOrderSummaryUI() {
	orderSummaryUI.fadeOut();
	
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