x=650;
y=365;
dx=5;
dy=5;
var scoreJ1 = 0;
var scoreJ2 = 0;

largeur=document.getElementById("terrain").clientWidth
hauteur=document.getElementById("terrain").clientHeight
diametre=document.getElementById("balle").clientHeight
epaisseur=document.getElementById("racket1").clientWidth+document.getElementById("racket1").offsetLeft


function deplacement(){
document.getElementById("balle").style.left=x+"px"
document.getElementById("balle").style.top=y+"px"

if (x + dx > largeur-diametre){
	dx = -dx;
	scoreJ1+=1

	
	dx=0
	dy=0

	setTimeout(balleaucentre,750)


	document.getElementById("score1").innerHTML = scoreJ1
	

	if (scoreJ1 == 2){
		victoire(1)
		document.getElementById("pause").hidden=true


		

	}

}

if( x + dx < 0){

	dx = -dx;
	scoreJ2+=1		
	
	dx=0
	dy=0
	setTimeout(balleaucentre,1000)


	document.getElementById("score2").innerHTML = scoreJ2


	if (scoreJ2 == 2){
		victoire(2)
		document.getElementById("pause").hidden=true

	}


}


if (x + dx < epaisseur){
	if(document.getElementById("balle").offsetTop >
		document.getElementById("racket1").offsetTop - diametre 
		&&

		document.getElementById("balle").offsetTop <
		document.getElementById("racket1").offsetTop +
		document.getElementById("racket1").clientHeight){
		
		
	    dx = Math.abs(dx);

		couleur1("racket1")
	}
}

if (x + dx > largeur-diametre-epaisseur){
	if(document.getElementById("balle").offsetTop >
		document.getElementById("racket2").offsetTop - diametre 
		&&

		document.getElementById("balle").offsetTop <
		document.getElementById("racket2").offsetTop +
		document.getElementById("racket2").clientHeight){
		
		
	    dx = -Math.abs(dx);

		couleur2("racket2")

		dy = dy*2
	}
}

if(y + dy > hauteur-diametre || y + dy < 0) {
        dy = -dy;
}
 
x += dx;
y += dy;



}


function deplacement_racket1(u){
	u += document.getElementById("racket1").offsetTop
	if (u>300)
		u=300
	if (u<0)
		u=0	
	document.getElementById("racket1").style.top=u+"px"	
}

function deplacement_racket2(u){
	u += document.getElementById("racket2").offsetTop
	if (u>300)
		u=300
	if (u<0)
		u=0	
	document.getElementById("racket2").style.top=u+"px"	
}

function touchePressee(e){
	pas=25
	if (e.key == "w")
		deplacement_racket1(-pas)
	if (e.key == "s")
		deplacement_racket1(pas)
	if (e.key == "ArrowUp")
		deplacement_racket2(-pas)
	if (e.key == "ArrowDown")
		deplacement_racket2(pas)
	if (e.key == "p")
		pause()

}
		




document.addEventListener('keydown',touchePressee);
document.getElementById("Recommencer").addEventListener("click", init);


function victoire(J){
	if (J==1){
		document.getElementById("bravo1").hidden=false;

	}


	if (J==2){
		document.getElementById("bravo2").hidden=false;

	}

	clearInterval(interval)
	document.getElementById("Recommencer").hidden=false


}



function init(){
	document.getElementById("racket1").style.top=(hauteur-document.getElementById("racket1").clientHeight)/2+"px"
	document.getElementById("racket2").style.top=(hauteur-document.getElementById("racket2").clientHeight)/2+"px"
	y=(hauteur-document.getElementById("balle").clientHeight)/2
	x=(largeur-document.getElementById("balle").clientWidth)/2
	dx=5
	dy=Math.random()-1.

	scoreJ1 = 0
	scoreJ2 = 0
	document.getElementById("score1").innerHTML = scoreJ1
	document.getElementById("score2").innerHTML = scoreJ2

	document.getElementById("bravo1").hidden=true
	document.getElementById("bravo2").hidden=true
	document.getElementById("Recommencer").hidden=true

	document.getElementById("pause").hidden=false

	document.getElementById("reprendre").hidden=true

	interval=setInterval(deplacement,10)

	
}

function balleaucentre() {
	y=(hauteur-document.getElementById("balle").clientHeight)/2
	x=(largeur-document.getElementById("balle").clientWidth)/2
	if (document.getElementById("balle").offsetLeft>x){
		dx=5
	}
	if (document.getElementById("balle").offsetLeft<x){
		dx=-5
	}
	dy=Math.random()-1.
	
	}
	init();

function couleur1(animation){
	document.getElementById("racket1").classList.add(animation)
	setTimeout(couleur,1000)
}

function couleur2(animation){
	document.getElementById("racket2").classList.add(animation)
	setTimeout(couleur,1000)
}

function couleur(){
document.getElementById("racket1").classList.remove("racket1")
	document.getElementById("racket2").classList.remove("racket2")
}

document.addEventListener('Escape',touchePressee);
document.getElementById("pause").addEventListener("click", pause);
document.getElementById("reprendre").addEventListener("click", pause);

function pause(){

if 	(document.getElementById("reprendre").hidden== true){

	Vx = dx
	Vy = dy
	dx = 0
	dy = 0

	document.getElementById("reprendre").hidden=false
	document.getElementById("pause").hidden=true

}
else{
	dx=Vx
	dy=Vy

	document.getElementById("reprendre").hidden=true
	document.getElementById("pause").hidden=false
}
}



