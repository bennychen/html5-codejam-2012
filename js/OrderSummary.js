
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
	
	//show ingredient by order	
	for(var i=0; i<level.order.ingredients.length; i++){
		this.ingredientCountToGo[level.order.ingredients[i].type] = 
			level.order.ingredients[i].num;
			
	}
	
	//set UI
	hideAllIngredients();
	initOrderSummaryUIByLevel(level);
	
	//
	
	this.subTotal = 0;
}

OrderSummary.ingredientCount;
OrderSummary.tips;
OrderSummary.ingredientCountToGo;
OrderSummary.subTotal;
OrderSummary.prototype.isOrderComplete = function()
{	
	for(var i=0 ; i<IngredientTypes.length; i++) {
		if(this.ingredientCountToGo[IngredientTypes[i]] != undefined) {
			if(this.ingredientCountToGo[IngredientTypes[i]] != 0) {
				return false;
			}
		}
	}
	return true;
}

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
			this.subtractTips();
			togoCount = 0;
		} else {
		
			this.subTotal = (this.subTotal * 100 + IngredientPrice[type] * 100 ) / 100;

			this.addTips();
		}
		this.ingredientCountToGo[type] = togoCount;
	}
	else {
		this.subtractTips();
	}
	

}

OrderSummary.prototype.render = function()
{
	setOrderSummaryTip(this.tips);
	setOrderSummaryTotal(this.subTotal);
	setOrderSummaryUIByIngredient(this.ingredientCountToGo);
}

var orderSummary;