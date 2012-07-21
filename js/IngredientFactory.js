(function(window) {

	function IngredientFactory() {
		this.ingredients =  ["onion", "tomato", "egg", "cheese", "meat", "lettuce", "top"]
	}
	
	Ingredient.ingredients;
	
	IngredientFactory.prototype.CreateRandomIngredient = function()
	{
		var ingredient = new Ingredient(this.ingredients[Math.random()*this.ingredients.length|0]);
		ingredient.x = Math.random() * canvas.width % canvas.width;
		ingredient.y =  - 100;
		return ingredient;
	}
	
	IngredientFactory.prototype.CreatePlayer = function()
	{
		var player = new Ingredient('bottom');
		player.x = canvas.width/2;
		player.y = canvas.height;
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