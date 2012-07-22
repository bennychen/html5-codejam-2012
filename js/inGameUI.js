var orderSummaryUI;
var orderFailUI;
var orderSuccessUI;
var introUI;

$(document).ready(function() {
	orderSummaryUI = $('#inGameMenu');
	orderFailUI = $('#failDialog');
	orderSuccessUI = $('#successDialog');
	introUI = $('#introDialog');
	
	orderFailUI.click(function(){
		
		orderFailUI.fadeOut(function() {
			level.generateNextLevel();
			SM.SetStateByName("ingame");
			controller.restartGame();
		});
	});
	
	$('#testButton').click(function() {
		hideIntroUI();
		hideSuccessUI();
		SM.SetStateByName("ingame");
	});
	$('#testButton2, #backButton').click(function() {
		SM.SetStateByName("menu");
	});
	$('#nextButton').click(function() {
		hideIntroUI();
		hideSuccessUI();
		SM.SetStateByName("gameIntro");
	});
});

function showOrderFailUI() {
	orderFailUI.fadeIn(function() {
		 $('#inGameMenu-replay').click(function(e) {
			 e.preventDefault();
			 return false;
	     });
	});
}
function hideOrderFailUI() {
	orderFailUI.fadeOut(function() {
		$('#inGameMenu-replay').click( function(e) {
			controller.restartGame();
		});
	});
}
function showIntroUI() {
	introUI.fadeIn();
}
function setIntroUI() {
	for( var i=0; i<IngredientTypes.length; i++) {
		var type = IngredientTypes[i];
		$('#intro-' + type).hide();
		
	}
	for( i=0; i < level.order.ingredients.length; i++) {
		var type = level.order.ingredients[i].type;
		var num = level.order.ingredients[i].num;
		$('#intro-'+type+'Num').text(num);
		$('#intro-'+type).show();
	}	
}
function hideIntroUI() {
	introUI.fadeOut();
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
	orderSuccessUI.fadeIn(function() {
		$('#inGameMenu-replay').attr("disabled","disabled"); 
	});
}
function hideSuccessUI() {
	orderSuccessUI.fadeOut(function() {
		$('#inGameMenu-replay').removeAttr("disabled"); 
	});
}

function showOrderSummaryUI() {
	
	orderSummaryUI.fadeIn( function() {
		$('#moveLeft').css('display','block');
		$('#moveRight').css('display','block');
		$('#moveLeft').mousedown(function () {
			lfHeld = true;
		});
		$('#moveLeft').mouseup(function() {
			lfHeld = false;
		});
		
		$('#moveRight').mousedown(function() {
			rtHeld = true;
		});
		
		$('#moveRight').mouseup(function() {
			rtHeld = false;
		});
	});
}
function hideOrderSummaryUI() {
	orderSummaryUI.fadeOut(function(){
		$('#moveLeft').css('display','none');
		$('#moveRight').css('display','none');
	}
	);
	
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