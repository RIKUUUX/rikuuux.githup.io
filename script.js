

x=0;
y=0;

dx=2;
dy=2;

function deplacement() {
	document.getElementById('balle').style.left=x+dx+'px';
	x=x+dx;
	document.getElementById('balle').style.top=y+dy+'px';
	y=y+dy;
	console.log(x,y)

}

setInterval(deplacement,10)











