var canvas = new fabric.Canvas('myCanvas');
var x = document.getElementById("myAudio");

ball_x = 50;
ball_y = 200;
hole_x = 800;
hole_y = 500;


block_image_width = 5;
block_image_height = 5;

function load_img(){
	fabric.Image.fromURL("golf-h.png" , function(Img) {
		hole_obj = Img;
		hole_obj.scaleToWidth(50);
		hole_obj.scaleToHeight(50);
		hole_obj.set({
			top:hole_y , 
			left:hole_x
		});
		canvas.add(hole_obj);
	});
	new_image();
}

function playSound(){
	x.play();
}

function new_image()
{
	fabric.Image.fromURL("ball.png" , function(Img) {
		ball_obj = Img;
		ball_obj.scaleToWidth(50);
		ball_obj.scaleToHeight(50);
		ball_obj.set({
			top:ball_y , 
			left:ball_x
		});
		canvas.add(ball_obj);
	});
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;

    if ((ball_x == hole_x)&&(ball_y == hole_y)){
		canvas.remove(ball_obj);
		document.getElementById("hd3").innerHTML="YOU WON!👏👏";
		document.getElementById("myCanvas").style.borderColor="red";
		playSound();
	}

	/* Check the coordinates of the ball and hole images to finish the game. 
	And id coordinates matches them remove ball image, 
	display "GAME OVER!!!" 
	and make canvas border 'red'. */
	
	else{
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
	}
	
	function up()
	{
		if(ball_y >=0){
			ball_y -= 10;
			canvas.remove(ball_obj);
			new_image();
		}
	}

	function down()
	{
		if(ball_y <=1000){
			ball_y += 10;
			canvas.remove(ball_obj);
			new_image();
		}
	}

	function left()
	{
		if(ball_x >0)
		{
			ball_x -= 10;
			canvas.remove(ball_obj);
			new_image();
		}
	}

	function right()
	{
		if(ball_x <=1000)
		{
			ball_x += 10;
			canvas.remove(ball_obj);
			new_image();
		}
	}
	
}

