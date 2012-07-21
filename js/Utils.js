
function Utils() {}

Utils.prototype.abs = function(lvalue, rvalue)
{
	if(lvalue-rvalue > 0)
		return (lvalue-rvalue);
	else 
		return rvalue-lvalue;
}

Utils.prototype.getIngredientHeight = function(type)
{
	var height;
	if(type == "onion") {
		height = 35;
	}
	else if(type=="tomato") {
		height=34;
	}
	else if(type=="egg") 
	{
		height=40;
	}
	else if(type=="lettuce"){
		height=33;
	}
	else if(type=="meat"){
		height=40;
	}
	else if(type=="cheese"){
		height=40;
	}
	else if(type=="bottom"){
		height=34;
	}else if(type=="top"){
		height=47;
	}
	return height;
}

Utils.prototype.getIngredientWidth = function()
{
	return 100;
}

var utils = new Utils();
