var orderSummaryUI;
var orderFailUI;
var orderSuccessUI;

$(document).ready(function() {
	orderSummaryUI = $('#inGameMenu');
	orderFailUI = $('#failDialog');
	orderSuccessUI = $('#successDialog');
	
	orderFailUI.click(function(){
		
		orderFailUI.fadeOut(function() {
			level.generateNextLevel();
			SM.SetStateByName("ingame");
			controller.restartGame();
		});
	});
	
	$('#testButton').click(function() {
		SM.SetStateByName("ingame");
	});
	$('#testButton2').click(function() {
		SM.SetStateByName("menu");
	});
});

function showOrderFailUI() {
	orderFailUI.fadeIn();
}
function hideOrderFailUI() {
	orderFailUI.fadeOut();
}
function setSuccessUI() {
	var summaryList = $('#successSammary');
	for( i=0; i < level.order.ingredients.length; i++) {
		var type = level.order.ingredients[i].type;
		var num = level.order.ingredients[i].num;
		summaryList.append('<li><span class="sammaryType">'+type+'</span> : <span class="sammaryNum">'+num+'</span></li>');
	}
	
	$('#successTotal').text( '$' + orderSummary.subTotal );
	
	var tips = Math.round(orderSummary.subTotal * orderSummary.tips) / 100;
	
	$('#successTips').text( '$' + tips );
}
function showSuccessUI() {
	orderSuccessUI.fadeIn();
}
function hideSuccessUI() {
	orderSuccessUI.fadeOut();
}

function showOrderSummaryUI() {
	orderSummaryUI.fadeIn();
}
function hideOrderSummaryUI() {
	orderSummaryUI.fadeOut();
	
}

function initOrderSummaryUIByLevel(level) {
	for(var i=0; i<level.order.ingredients.length; i++){
			
		$('#' + level.order.ingredients[i].type).show();	
		$('#' + level.order.ingredients[i].type + 'Num').text( level.order.ingredients[i].num );

	}	
}

function hideAllIngredients() {
	//hide all ingredient
	for( var i=0; i<IngredientTypes.length; i++) {
		var type = IngredientTypes[i];
		$('#' + type).hide();
		
	}
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

function setOrderSummaryTip(tip){
	$('#tip').text('Tips: '+ tip);
}
function setOrderSummaryTotal(total){
	$('#total').text('$ '+total);
}