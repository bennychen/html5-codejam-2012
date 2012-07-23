
function Player( ){
	
	this.totalTips = 0
	
	this.name = '';
	
}

Player.prototype.addTips = function(tips) {
	
	this.totalTips = (Math.round(this.totalTips * 10000 ) + Math.round(tips * 10000 )) / 10000;
	
}

var player = new Player();