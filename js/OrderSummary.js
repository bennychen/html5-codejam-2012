
function OrderSummary( ){
	
	this.ingredientCount = {
		onion : 0,
		lettuce : 0,
		tomato : 0,
	    egg:0,
	    meat:0,
	    cheese:0
	}
	
	this.tips=0;
	
	this.ingredientCountToGo={}
	
	for(var i=0; i<level.order.ingredients.length; i++){
		this.ingredientCountToGo[level.order.ingredients[i].type] = 
			level.order.ingredients[i].num;
	}
	
	this.subTotal = 0;
}

OrderSummary.ingredientCount;
OrderSummary.tips;
OrderSummary.ingredientCountToGo;
OrderSummary.subTotal;

OrderSummary.prototype.addTips = function()
{
	this.tips += 1;
}

OrderSummary.prototype.subtractTips = function()
{	
	this.tips -= 3;
	if(this.tips < 0) {
		this.tips = 0;
	}
}

OrderSummary.prototype.addIngredient = function(ingredient)
{
	var type = ingredient.getType();
	var count = parseInt(this.ingredientCount[type]);
	this.ingredientCount[type] += 1;
	
	if(this.ingredientCountToGo[type] != undefined) {
		var togoCount = this.ingredientCountToGo[type];
		togoCount -= 1;
		if(togoCount < 0) {
			this.substractTips();
			togoCount = 0;
		}
		this.ingredientCountToGo[type] = togoCount;
	}
	else {
		this.subtractTips();
	}
	this.subTotal += IngredientPrice[type];
}

OrderSummary.prototype.render = function()
{
	var goal = document.getElementById("goal");
	goal.innerHTML = '';
	for( var i=0; i<IngredientTypes.length; i++) {
		var type = IngredientTypes[i];
		if(this.ingredientCountToGo[type] != undefined)
		{
			goal.innerHTML += type + " : " + this.ingredientCountToGo[type] + '<br>';
		}
		
	}
}

var orderSummary;