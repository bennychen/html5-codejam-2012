(function(window) {
	
	function Ingredient(type) {
		
		this.oldX=0;
		this.oldY=0;
		this.imageSource = 'img/burger/' + type + '.png';
		this.catched = false;
		this.initialize();
		
		
	}

	Ingredient.prototype = new Container();

	Ingredient.prototype.vx = 0;
	Ingredient.prototype.vy = 10;
	Ingredient.prototype.oldX;
	Ingredient.prototype.oldY;
	Ingredient.prototype.catched;
	
	Ingredient.prototype.imageSource;
	
	Ingredient.prototype.Container_initialize = Ingredient.prototype.initialize;
    Ingredient.prototype.initialize = function() {
        this.Container_initialize();
        var bmp = new Bitmap(this.imageSource);
        this.addChild(bmp);

    }

    function handleImageLoad() {
       var bmp = new Bitmap(this.imageSource);
       this.addChild(bmp);
    }
	
	window.Ingredient = Ingredient;

}(window));