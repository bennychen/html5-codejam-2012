(function(window) {
	
	function Ingredient(type, width, height) {
		this.oldX=0;
		this.oldY=0;
		this.imageSource = 'img/burger/' + type + '.png';
		this.catched = false;
		this.active=true;	
		this.initialize();
		this.width = width;
		this.height = height;
		this.type = type;

        //var bmp = new Bitmap(this.imageSource);
		var shape = new Shape( assets[ this.type ].bmp );
        this.addChild(shape);

		var bmp = this.getChildAt( 0 );
		bmp.regX = this.width / 2;
		bmp.regY = 0;
	}

	Ingredient.prototype.width;
	Ingredient.prototype.height;
	Ingredient.prototype.type;
	Ingredient.prototype = new Container();
	Ingredient.prototype.vx = 0;
	Ingredient.prototype.vy = 10;
	Ingredient.prototype.oldX;
	Ingredient.prototype.oldY;
	Ingredient.prototype.catched;
	Ingredient.prototype.active;
	
	Ingredient.prototype.imageSource;
	
	Ingredient.prototype.Container_initialize = Ingredient.prototype.initialize;
    Ingredient.prototype.initialize = function() {
        this.Container_initialize();
    }
	
	Ingredient.prototype.getHeight = function()
	{
		return this.height;
	}

	Ingredient.prototype.getType = function()
	{
		return this.type;
	}

	window.Ingredient = Ingredient;

}(window));
