function Controller( stage, canvas ) {
	this.stage = stage;
	this.canvas = canvas;
	this.catchedIngredients = [];
}

Controller.stage;
Controller.canvas;
Controller.catchedIngredients;
Controller.player;

Controller.prototype.startGame = function()
{
	setInterval(this.addIngredient, 2000);
}

Controller.prototype.addPlayer = function()
{
	this.player = factory.CreatePlayer();
	this.catchedIngredients.push(this.player);
}
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
	var l = this.stage.getNumChildren();
	for (var i=0; i<l; i++) {
		var ingredient = this.stage.getChildAt(i);
		if( abs(ingredient.x, this.player.x) < 20 && (this.player.y-this.catchedIngredients.length*34)-(ingredient.y+ingredient.vy) < 5 && !ingredient.catched ) {
			ingredient.catched = true;
			ingredient.x = base.x;
			ingredient.y = base.y;
			this.catchedIngredients.push(ingredient);
			
		}
	}
}

Controller.prototype.update = function()
{
	var w = this.canvas.width;
	var h = this.canvas.height;
	var l = this.stage.getNumChildren();
	
	// iterate through all the children and move them according to their velocity:
	for (var i=0; i<l; i++) {
		var ingredient = this.stage.getChildAt(i);
		if( ingredient != undefined && !ingredient.catched ){ 
			ingredient.y= (ingredient.y+ingredient.vy);
			if(ingredient.y>h) {
				this.destroyIngredient(ingredient);
			}
		}
	}
	for(var i=0; i<this.catchedIngredients.length; i++) {
		this.catchedIngredients[i].y = h-34*(i+1);
		if(lfHeld) {
			this.catchedIngredients[i].x = this.catchedIngredients[i].x-13;
		}
		if(rtHeld) {
			this.catchedIngredients[i].x = this.catchedIngredients[i].x+13;
		}
	}
	// draw the updates to stage:
	this.stage.update();
}