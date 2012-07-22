function OnEnterPreloadState()
{
	var text = new Text("Loading ...", "36px Arial", "#777");
	stage.addChild(text);
	text.x = 360;
	text.y = 200;

	assets = {};

	var manifest = [
		{src:'./img/verticalsky.jpg', id:"sky"},
		{src:'./img/menubg.png', id:"menubackground"},
		{src:'./img/menustart.png', id:"menustart"},
		{src:'./img/menustartactive.png', id:"menustartactive"},
		{src:'./img/burger/bottom.png', id:"bottom"},
		{src:'./img/burger/cheese.png', id:"cheese"},
		{src:'./img/burger/egg.png', id:"egg"},
		{src:'./img/burger/lettuce.png', id:"lettuce"},
		{src:'./img/burger/meat.png', id:"meat"},
		{src:'./img/burger/onion.png', id:"onion"},
		{src:'./img/burger/tomato.png', id:"tomato"},
		{src:'./img/burger/top.png', id:"top"},
	];
	
	var loader = new PreloadJS();
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
	var asset = { id: event.id, type: event.type, result: event.result };
	if (event.type == PreloadJS.IMAGE) 
	{
		if ( event.id == "sky" )
		{
			sky = new Shape(new Graphics().beginBitmapFill(event.result).drawRect(0,0,canvas.width,5394));
		}
		else
		{
			asset.bmp = new Bitmap(event.result);
		}
	}

	assets[ asset.id ] = asset;
}

function handleComplete() 
{
	SM.SetStateByName( "menu" )
}


var PreloadState = new State( OnEnterPreloadState, OnExitPreloadState );
