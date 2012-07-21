
function Utils() {}

Utils.prototype.abs = function(lvalue, rvalue)
{
	if(lvalue-rvalue > 0)
		return (lvalue-rvalue);
	else 
		return rvalue-lvalue;
}

var utils = new Utils();