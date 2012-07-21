function Controller( stage ) {
	this.stage = stage;
}
Controller.stage;

Controller.prototype.addIngredient = function()
{
	var ingredient = factory.CreateRandomIngredient();
	this.stage.addChild(ingredient);
	return ingredient;
}

Controller.prototype.destroyIngredient = function(ingredient)
{
	return this.stage.removeChild(ingredient);
}

Controller.prototype.interaction = function()
{
}