(function(window) {

	function IngredientFactory() {
		this.ingredients =  ["onion", "tomato", "egg", "cheese", "meat", "lettuce", "top"]
	}
	
	Ingredient.ingredients;
	
	
	IngredientFactory.prototype.CreateRandomIngredient = function()
	{
		var type = this.ingredients[Math.random()*this.ingredients.length|0];
		var width = utils.getIngredientWidth();
		var height = utils.getIngredientHeight(type);
		var ingredient = new Ingredient(type, width, height);
		ingredient.x = Math.random() * canvas.width % canvas.width;
		ingredient.y =  - 100;
		return ingredient;
	}
	
	IngredientFactory.prototype.CreatePlayer = function()
	{
		var height = utils.getIngredientHeight('bottom');
		var player = new Ingredient("bottom",height);
		player.x = canvas.width/2;
		player.y = canvas.height - 35;
		player.catched = true;
		return player;
	}
	
	
	IngredientFactory.prototype.CreateIngredient = function(type)
	{
		return new Ingredient(type);
	}
	
	IngredientFactory.prototype.DistroyIngredient = function(ingredient)
	{
		ingredient.active = false;
	}
	
	window.IngredientFactory = IngredientFactory;

}(window));
