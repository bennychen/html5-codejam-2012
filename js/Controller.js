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
Controller.timerId;
Controller.onCatchIngredient;

Controller.prototype.startGame = function()
{
	this.addPlayer();
	this.timerId = setInterval(this.addIngredient, 2000);
}

Controller.prototype.stopGame = function()
{
	clearInterval(this.timerId);
	this.timerId = null;
	this.player = null;
	this.catchedIngredients = [];
	this.stage.removeAllChildren();
	this.stage.clear();
}

Controller.prototype.addPlayer = function()
{
	this.player = factory.CreatePlayer();
	this.catchedIngredients.push(this.player);
	this.stage.addChild(this.player);
}

Controller.prototype.removePlayer = function()
{
	this.stage.removeChild(this.player);
	this.player=null;
}

Controller.prototype.setOnCatchIngredient = function( onCatchIngredient )
{
	this.onCatchIngredient = onCatchIngredient;
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
			var xDistance = ingredient.x - this.player.x;
			var xDistanceAbs = utils.abs( ingredient.x, this.player.x )
			if ( xDistanceAbs < 20 )
			{
				ingredient.catched = true;
				ingredient.x = this.player.x;
				ingredient.y = this.player.y;
				this.catchedIngredients.push(ingredient);
				if ( this.onCatchIngredient != null )
				{
					this.onCatchIngredient( ingredient );
				}
			}
			else
			{
				ingredient.dropped = true;
				if ( xDistanceAbs < 100 )
				{
					var angle = xDistance > 0 ? 75 : -75;
					Tween.get( ingredient ).to( {rotation: angle}, 500, Ease.linear );
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
		if( ingredient != undefined && !ingredient.catched )
		{ 
			ingredient.y= (ingredient.y+ingredient.vy);
			if(ingredient.y>h) {
				this.destroyIngredient(ingredient);
			}
		}
	}
	
	var totalHeight=0;
	for(var i=0; i<this.catchedIngredients.length; i++) {
		var ingredient = this.catchedIngredients[i];

		this.isGameOver(ingredient);	
		totalHeight += ingredient.height;

		ingredient.y = h-totalHeight;
		ingredient.y = h-ingredient.height*(i+1);
		if(lfHeld) {
			ingredient.x = ingredient.x-MOVE_PLAYER_SPEED;
		}
		if(rtHeld) {
			ingredient.x = ingredient.x+MOVE_PLAYER_SPEED;
		}
	}
	
	this.player.y = h-this.player.height;
	
	// draw the updates to stage:
	this.stage.update();
}
