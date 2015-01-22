#pragma strict

static var playerScore01 = 0;
static var playerScore02 = 0;

var skin: GUISkin;
var ball: Transform;

function Start () {
	ball = GameObject.FindGameObjectWithTag ("Ball").transform;
}

static function Score (wallName: String) {
	if (wallName == "rightWall"){
		playerScore01++;
	}
	else {
		playerScore02++;
	}
	Debug.Log("Player Score 1 is " + playerScore01);
	Debug.Log("Player Score 2 is " + playerScore02);
}

function OnGUI () {
	GUI.skin = skin;
	GUI.Label (new Rect (Screen.width/2-150-18, 25, 100, 100), "" + playerScore01);
	GUI.Label (new Rect (Screen.width/2+150-18, 25, 100, 100), "" + playerScore02);
	
	if (GUI.Button (new Rect(Screen.width/2-121/2, 35, 121, 53), "RESET")){
		playerScore01 = 0;
		playerScore02 = 0;
		
		ball.gameObject.SendMessage ("ResetBall");
	}
}