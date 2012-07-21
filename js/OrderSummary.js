
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
	
}

OrderSummary.ingredientCount;
OrderSummary.tips;
OrderSummary.ingredientCountToGo;

OrderSummary.prototype.computeSubtotal = function()
{
}

OrderSummary.prototype.computeTip = function()
{
}

OrderSummary.prototype.addIngredient = function(ingredient)
{
	var count = parseInt(this.ingredientCount[ingredient.getType()]);
	this.ingredientCount[ingredient.getType()] = count+1;
	
	if(this.ingredientCountToGo[ingredient.getType()] != undefined) {
		this.ingredientCountToGo[ingredient.getType()]  -= 1;
	}
	// see if the current ingredient is in the level;
	
}

var orderSummary;