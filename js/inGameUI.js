var orderSummaryUI;
var orderFailUI;
var orderSuccessUI;
var introUI;
var avatarUI;


$(document).ready(function() {
	orderSummaryUI = $('#inGameMenu');
	orderFailUI = $('#failDialog');
	orderSuccessUI = $('#successDialog');
	introUI = $('#introDialog');
	avatarUI = $('#avatarContainer');
	
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
	$('#testButton2, #backButton').click(function() {
		SM.SetStateByName("menu");
	});
	$('#nextButton').click(function() {
		SM.SetStateByName("gameIntro");
	});
});
function showAvatarUI() {
	$('#avatar-totalTips').text('$ '+ player.totalTips);
	avatarUI.fadeIn();
}
function hideAvatarUI() {
	avatarUI.fadeOut();
}
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
	$('#introOrderNum').text(level.levelNum);
	$('#introOrderName').text(level.order.name);
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

	$('#successOrderNum').text(level.levelNum);
	$('#successOrderName').text(level.order.name);
	
	var summaryList = $('#successSammary');
	summaryList.find('li').remove();
	for( i=0; i < level.order.ingredients.length; i++) {
		var type = level.order.ingredients[i].type;
		var num = level.order.ingredients[i].num;
		summaryList.append('<li><span class="sammaryType">'+type+'</span> : <span class="sammaryNum">'+num+'</span></li>');
	}
	
	$('#successTotal').text( '$' + orderSummary.subTotal );
	
	var tips = Math.round(orderSummary.subTotal * 100 * orderSummary.tips) / 10000;
	
	$('#successTips').text( '$' + tips);
}
function showSuccessUI() {
	orderSuccessUI.fadeIn(function() {
		$('#inGameMenu-replay').attr("disabled","disabled"); 
	});
	showAvatarUI();
}
function hideSuccessUI() {
	orderSuccessUI.fadeOut(function() {
		$('#inGameMenu-replay').removeAttr("disabled"); 
	});
	hideAvatarUI();
}


function showOrderSummaryUI() {
	
	orderSummaryUI.fadeIn( function() {

		$('#moveLeft').css('display','block');
		$('#moveRight').css('display','block');
		var left = document.getElementById('moveLeft');
		var right = document.getElementById('moveRight');
		
		left.addEventListener('touchstart', function(e) {
		    lfHeld = true;
		}, false);
		left.addEventListener('touchend', function(e) {
		    lfHeld = false;
		}, false);
		right.addEventListener('touchstart', function(e) {
		    rtHeld = true;
		}, false);
		right.addEventListener('touchend', function(e) {
		    rtHeld = false;
		}, false);
		
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

			showAvatarUI();

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
	$('#order-num').text(level.levelNum);
	$('#order-name').text(level.order.name);
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
	$('#tip').text('Tips: '+ tip + "%");
}
function setOrderSummaryTotal(total){
	$('#total').text('$ '+total);
}

function hideLoading(){
	$('#beforePreload').hide();
}