var ballSpeed: float = 70;

function Start () {
	yield WaitForSeconds (1);
	GoBall();
}

function Update(){
	var xVel: float = rigidbody2D.velocity.x;
	var wantedVel = 14;
//	Debug.Log ("vel " + xVel);
	if (xVel < wantedVel && xVel > -wantedVel && xVel != 0) {
		if (xVel > 0) {
			rigidbody2D.velocity.x = wantedVel;
		}
		else {
			rigidbody2D.velocity.x = -wantedVel;
		}
	}
	else if (xVel > wantedVel && xVel < -wantedVel && xVel != 0) {
		if (xVel > 0) {
			rigidbody2D.velocity.x = wantedVel;
		}
		else {
			rigidbody2D.velocity.x = -wantedVel;
		}
	}
//		Debug.Log ("Velocity before " + xVel);
//		Debug.Log ("Velocity after " + rigidbody2D.velocity.x);
}

function OnCollisionEnter2D (colInfo: Collision2D) {
	if (colInfo.collider.tag == "Player") {
		rigidbody2D.velocity.y = rigidbody2D.velocity.y/2 + colInfo.collider.rigidbody2D.velocity.y/3;
		audio.pitch = Random.Range(0.5f, 0.9f);
		audio.Play();
	}
}

function ResetBall () {
	rigidbody2D.velocity.x = 0;
	rigidbody2D.velocity.y = 0;
	transform.position.x = 0;
	transform.position.y = Random.Range(-2, 2);
	
	yield WaitForSeconds (0.5);
	GoBall();
}

function GoBall () {
	var randomNumber = Random.Range(0, 2);
	if (randomNumber <= 0.5){
		rigidbody2D.AddForce (new Vector2 (ballSpeed, 10));
	}
	else{
		rigidbody2D.AddForce (new Vector2 (-ballSpeed, -10));
	}
}