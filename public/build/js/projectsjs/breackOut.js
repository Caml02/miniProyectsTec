for(var canvas,ctx,x,y,dx,dy,paddleX,ballRadius=10,paddleHeight=10,paddleWidth=75,rightPressed=!1,leftPressed=!1,brickRowCount=3,brickColumnCount=5,brickWidth=75,brickHeight=20,brickPadding=10,brickOffsetTop=30,brickOffsetLeft=30,bricks=[],c=0;c<brickColumnCount;c++){bricks[c]=[];for(var r=0;r<brickRowCount;r++)bricks[c][r]={x:0,y:0,status:1}}var score=0,lives=3;function startBreakoutGame(t){canvas=document.getElementById(t),ctx=canvas.getContext("2d"),x=canvas.width/2,y=canvas.height-30,dx=2,dy=-2,paddleX=(canvas.width-paddleWidth)/2,document.getElementById("breakOut").style.display="block",canvas.style.display="block",document.addEventListener("keydown",keyDownHandler,!1),document.addEventListener("keyup",keyUpHandler,!1),draw()}function keyDownHandler(t){"Right"==t.key||"ArrowRight"==t.key?rightPressed=!0:"Left"!=t.key&&"ArrowLeft"!=t.key||(leftPressed=!0)}function keyUpHandler(t){"Right"==t.key||"ArrowRight"==t.key?rightPressed=!1:"Left"!=t.key&&"ArrowLeft"!=t.key||(leftPressed=!1)}function drawBall(){ctx.beginPath(),ctx.arc(x,y,ballRadius,0,2*Math.PI),ctx.fillStyle="#0095DD",ctx.fill(),ctx.closePath()}function drawPaddle(){ctx.beginPath(),ctx.rect(paddleX,canvas.height-paddleHeight,paddleWidth,paddleHeight),ctx.fillStyle="#0095DD",ctx.fill(),ctx.closePath()}function drawBricks(){for(var t=0;t<brickColumnCount;t++)for(var e=0;e<brickRowCount;e++)if(1==bricks[t][e].status){var d=t*(brickWidth+brickPadding)+brickOffsetLeft,a=e*(brickHeight+brickPadding)+brickOffsetTop;bricks[t][e].x=d,bricks[t][e].y=a,ctx.beginPath(),ctx.rect(d,a,brickWidth,brickHeight),ctx.fillStyle="#0095DD",ctx.fill(),ctx.closePath()}}function drawScore(){ctx.font="16px Arial",ctx.fillStyle="#0095DD",ctx.fillText("Score: "+score,8,20)}function drawLives(){ctx.font="16px Arial",ctx.fillStyle="#0095DD",ctx.fillText("Lives: "+lives,canvas.width-65,20)}function collisionDetection(){for(var t=0;t<brickColumnCount;t++)for(var e=0;e<brickRowCount;e++){var d=bricks[t][e];1==d.status&&x>d.x&&x<d.x+brickWidth&&y>d.y&&y<d.y+brickHeight&&(dy=-dy,d.status=0,++score==brickRowCount*brickColumnCount&&(alert("¡Has ganado!"),document.location.reload()))}}function draw(){ctx.clearRect(0,0,canvas.width,canvas.height),drawBricks(),drawBall(),drawPaddle(),drawScore(),drawLives(),collisionDetection(),rightPressed&&paddleX<canvas.width-paddleWidth?paddleX+=7:leftPressed&&paddleX>0&&(paddleX-=7),y+=dy,((x+=dx)+dx>canvas.width-ballRadius||x+dx<ballRadius)&&(dx=-dx),y+dy<ballRadius?dy=-dy:y+dy>canvas.height-ballRadius&&(x>paddleX&&x<paddleX+paddleWidth?dy=-dy:--lives?(x=canvas.width/2,y=canvas.height-30,dx=3,dy=-3,paddleX=(canvas.width-paddleWidth)/2):(alert("¡Juego terminado!"),document.location.reload())),requestAnimationFrame(draw)}
//# sourceMappingURL=breackOut.js.map
