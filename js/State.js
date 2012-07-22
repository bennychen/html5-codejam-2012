function State( onEnter, onExit, onUpdate )
{
	var tryGetFunction = function( func )
	{
		if ( func != null )
		{
			return func;	
		}
		else
		{
			return function() {};
		}
	}

	this.OnEnter = tryGetFunction( onEnter );
	this.OnExit = tryGetFunction( onExit );
	this.OnUpdate = tryGetFunction( onUpdate );
}

function StateMachine()
{
	this.states = {}; 
	this.currentState = null;
	this.lastState = null;

	this.RegisterState = function( name, state )
	{
		this.states[ name ] = state;
		state.name = name;
	}

	this.GetState = function( name )
	{
		if ( this.states[ name ] != null )
		{
			return this.states[ name ];
		}
		else
		{
			console.error( "StateMachine::getState - there is not a state called [" + name + "]");
		}
	}

	this.SetStateByName = function( stateName )
	{
		var state = this.GetState( stateName );
		if ( state )
		{
			this.SetState( state );
		}
	}

	this.SetState = function( state )
	{
		if ( state != null )
		{
			if ( state == this.currentState )
			{
				console.warning( "WARNING @ StateMachine::setCurrentState - " + 
					   "var state [" + state.name + "] is the same as current state" )
				return
			}
			this.lastState = this.currentState;
			this.currentState = state;
			if ( this.lastState )
			{
				//console.log( "exiting state [" + this.lastState.name + "]" )
				this.lastState.OnExit()
			}
			//console.log( "entering state [" + this.currentState.name + "]" )
			this.currentState.OnEnter()
		}
		else
		{
			console.error( "ERROR @ StateMachine::setCurrentState - " + 
				   "var [state] is not a class type of State" )
		}
	}
}

var SM = new StateMachine();
