var MOVE_PLAYER_SPEED = 13

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
	this.addPlayer();
	setInterval(this.addIngredient, 2000);
}

Controller.prototype.addPlayer = function()
{
	this.player = factory.CreatePlayer();
	this.catchedIngredients.push(this.player);
	this.stage.addChild(this.player);
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
		if( (this.player.y-this.catchedIngredients.length*34)-(ingredient.y+ingredient.vy) < 5 && 
			!ingredient.catched && !ingredient.dropped ) 
		{
			var xDistance = utils.abs(ingredient.x, this.player.x) 
			if ( xDistance < 20 )
			{
				ingredient.catched = true;
				ingredient.x = this.player.x;
				ingredient.y = this.player.y;
				this.catchedIngredients.push(ingredient);
			}
			else
			{
				ingredient.dropped = true;
				if ( xDistance < 100 )
				{
					console.log( "bread is scrached with burger, play anim here" )
				}
			}
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
		this.catchedIngredients[i].y = h-35*(i+1);
		if(lfHeld) {
			this.catchedIngredients[i].x = this.catchedIngredients[i].x-MOVE_PLAYER_SPEED;
		}
		if(rtHeld) {
			this.catchedIngredients[i].x = this.catchedIngredients[i].x+MOVE_PLAYER_SPEED;
		}
	}
	this.player.y = h-35;
	
	// draw the updates to stage:
	this.stage.update();
}
