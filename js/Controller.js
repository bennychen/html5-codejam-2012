var MOVE_PLAYER_SPEED = 13
var MAX_INGREDIENTS_ON_STAGE = 8

function Controller( stage, canvas ) {
	this.stage = stage;
	this.canvas = canvas;
	this.catchedIngredients = [];
	this.stageOffsetY = 0;
}

Controller.stage;
Controller.canvas;
Controller.catchedIngredients;
Controller.player;
Controller.timerId;
Controller.stageOffsetY;
Controller.curControlIngredientIndex;
Controller.onCatchIngredient;

Controller.prototype.restartGame = function()
{
	this.stopGame();
	this.startGame();
}

Controller.prototype.startGame = function()
{
	this.stage.removeAllChildren();
	this.stage.clear();
	this.stage.addChildAt(sky,0);
	this.addPlayer();
	this.timerId = setInterval(this.addIngredient, 2000);
	this.curControlIngredientIndex = 0;
	this.stageOffsetY = 0;
	stage.update();
}

Controller.prototype.stopGame = function()
{
	clearInterval(this.timerId);
	this.timerId = null;
	this.player = null;
	this.catchedIngredients = [];
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

Controller.prototype.isGameEnd = function(ingredient)
{
	if(ingredient.type == 'top') {
		return true;
	}
	return false;
}

Controller.prototype.interaction = function()
{
	var l = this.stage.getNumChildren();
	var checkedIngredient = this.catchedIngredients[this.catchedIngredients.length-1];
	for (var i=0; i<l; i++) {
		var ingredient = this.stage.getChildAt(i);
	
		if( checkedIngredient.y - checkedIngredient.height -(ingredient.y+ingredient.vy) < 5 && 
			!ingredient.catched && !ingredient.dropped ) 
		{
			var xDistance = ingredient.x - checkedIngredient.x;
			var xDistanceAbs = utils.abs( ingredient.x, checkedIngredient.x )
			if ( xDistanceAbs < 50 )
			{
				ingredient.catched = true;
				ingredient.x = checkedIngredient.x;//this.catchedIngredients[this.curControlIngredientIndex].x;
				//ingredient.y = checkedIngredient.y;//this.catchedIngredients[this.curControlIngredientIndex].y;
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
	var canvasHeight = this.canvas.height;
	var l = this.stage.getNumChildren();
	
	// destory useless ingredients 
	for (var i=0; i<l; i++) {
		var ingredient = this.stage.getChildAt(i);
		if( ingredient != undefined && !ingredient.catched )
		{ 
			ingredient.y= (ingredient.y+ingredient.vy);
			if(ingredient.y>canvasHeight) {
				this.destroyIngredient(ingredient);
			}
		}
	}
	
	// move ingredients according to their velocity
	var gapToBottomBorder = 0 
	var totalHeight = gapToBottomBorder;
	for(var i=0; i<this.catchedIngredients.length; i++) 
	{
		var ingredient = this.catchedIngredients[i];
		totalHeight += ingredient.height * 0.8;
		if ( i == this.catchedIngredients.length - MAX_INGREDIENTS_ON_STAGE - 1 )
		{
			this.stageOffsetY = utils.lerp( this.stageOffsetY, totalHeight - gapToBottomBorder, Ticker.getInterval() / 100 );
			//this.curControlIngredientIndex = i;
		}
		ingredient.y = canvasHeight - totalHeight;
	}
	for(var i=0; i<this.catchedIngredients.length; i++) 
	{
		var ingredient = this.catchedIngredients[i];
		ingredient.y += this.stageOffsetY;
	}
	
	var curControlIngredient = this.catchedIngredients[this.curControlIngredientIndex]
	if(lfHeld) 
	{
		curControlIngredient.x = curControlIngredient.x - MOVE_PLAYER_SPEED;
	}
	if(rtHeld) 
	{
		curControlIngredient.x = curControlIngredient.x + MOVE_PLAYER_SPEED;
	}
	curControlIngredient.x = utils.clamp( curControlIngredient.x, BOUND_LEFT, BOUND_RIGHT );

	var lastIngredient = curControlIngredient;
	for(var i = this.curControlIngredientIndex + 1; i < this.catchedIngredients.length; i++)
	{
		var ingredient = this.catchedIngredients[i];
		ingredient.x = utils.lerp( ingredient.x, lastIngredient.x, 
				Ticker.getInterval() / 100 );
		lastIngredient = ingredient;
	}
	
	sky.y = -5600 + this.canvas.height + this.stageOffsetY;
					
	// draw the updates to stage:
	this.stage.update();
}
