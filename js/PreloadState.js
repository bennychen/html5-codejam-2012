var loader;
var assets;
var manifest;
var sky;

function OnEnterPreloadState()
{
	var text = new Text("Loading ...", "36px Arial", "#777");
	stage.addChild(text);
	text.x = 360;
	text.y = 200;

	assets = [];

	manifest = [
		{src:'./img/verticalsky.jpg', id:"sky"},
		{src:'./img/menubg.jpg', id:"menubackground"},
		{src:'./img/menustart.jpg', id:"menustart"},
		{src:'./img/menustartactive.jpg', id:"menustartactive"},
		{src:'./img/burger/bottom.jpg', id:"bottom"},
		{src:'./img/burger/cheese.jpg', id:"cheese"},
		{src:'./img/burger/egg.jpg', id:"egg"},
		{src:'./img/burger/lettuce.jpg', id:"lettuce"},
		{src:'./img/burger/meat.jpg', id:"meat"},
		{src:'./img/burger/onion.jpg', id:"onion"},
		{src:'./img/burger/tomato.jpg', id:"tomato"},
		{src:'./img/burger/top.jpg', id:"top"},
	];
	
	loader = new PreloadJS();
	loader.useXHR = false; //Loads the images using tag loading.
	
	loader.onFileLoad = handleFileLoad;
	loader.onComplete = handleComplete;
	
	loader.loadManifest(manifest);
}

function OnExitPreloadState()
{
	stage.removeAllChildren();
}


function handleFileLoad(event) 
{
	assets.push(event);
}

function handleComplete() 
{
	for(var i=0;i<assets.length;i++) 
	{
		var item = assets[i]; //loader.getResult(id);
		var id = item.id;
		var result = item.result;
		
		if (item.type == PreloadJS.IMAGE) {
			var bmp = new Bitmap(result);
		}

		switch (id) {
			case "sky":
				// grab canvas width and height for later calculations:
				sky = new Shape(new Graphics().beginBitmapFill(result).drawRect(0,0,canvas.width,5394));
				sky.x=0;
				sky.y=-5394;
		}
	}

	SM.SetStateByName( "menu" )
}


var PreloadState = new State( OnEnterPreloadState, OnExitPreloadState );
