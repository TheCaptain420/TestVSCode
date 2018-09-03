//Laver Canvas (En javascript ting)
var canvas;
var canvasContext;

//Om den skal vise win screen eller ej, bliver brugt senere
var showingWinScreen = false;

var musPosX;
var musPosY;


//Henter mouse pos
function findMusPos(evt) {
    var rect = canvas.getBoundingClientRect();
    var root = document.documentElement;
    var mouseX = evt.clientX - rect.left - root.scrollLeft;
    var mouseY = evt.clientY - rect.top - root.scrollTop;
    return {
         x:mouseX,
         y:mouseY
    };
}

//om de er rigtig eller fokert, top række er 1,2,3
var rigtigEllerForkert = [false,false,false,false,false,false];


var musKliknummer = 0;
var klikketKort=[];


//mus klik
function handleMouseClick(evt) {
    
    //sætter mus pos.
    musPosX = findMusPos(evt).x; 
    musPosY = findMusPos(evt).y;
    //første række
    if(25<musPosX && musPosX <275){
        //første række
        if(25<musPosY && musPosY< 275){
            console.log("pressed 1");
            colorRect(25,25,kortWidth,kortWidth, kort[0]);
            klikketKort[musKliknummer]=[kort[0],0];

        }
        //anden række
        if(325<musPosY && musPosY< 575){
            console.log("pressed 4");
            colorRect(25,325,kortWidth,kortWidth, kort[1]);
            klikketKort[musKliknummer]=[kort[1],1];

        }
    }
    //anden række
    if(325<musPosX && musPosX <575){
        //første række
        if(25<musPosY && musPosY< 275){
            console.log("pressed 2");
            colorRect(325,25,kortWidth,kortWidth, kort[2]);
            klikketKort[musKliknummer]=[kort[2],2];

        }
        //anden række
        if(325<musPosY && musPosY< 575){
            console.log("pressed 5");
            colorRect(325,325,kortWidth,kortWidth, kort[3]);
            klikketKort[musKliknummer]=[kort[3],3];


        }
    }
    //tredje række
    if(625<musPosX && musPosX <875){
        //første række
        if(25<musPosY && musPosY< 275){
            console.log("pressed 3")
            colorRect(625,25,kortWidth,kortWidth, kort[4]);
            klikketKort[musKliknummer]=[kort[4],4];


        }
        //anden række
        if(325<musPosY && musPosY< 575){
            console.log("pressed 6");
            colorRect(625,325,kortWidth,kortWidth, kort[5]);
            klikketKort[musKliknummer]=[kort[5],5];

        }
    }
    //console.log(musPosX+" - "+musPosY);

    //[x][0] for farve
    //[x][1] for pos
    musKliknummer++;
    if(musKliknummer==2){
        //console.log("Kort valgt ="+klikketKort[0][0]+" - "+klikketKort[1][0]+"");
        if(klikketKort[0][0]==klikketKort[1][0]){
            console.log("Du fik 1 par");
            rigtigEllerForkert[klikketKort[0][1]] = true;
            rigtigEllerForkert[klikketKort[1][1]] = true;
            console.log(rigtigEllerForkert);
        }

        
        
        
        
    }
    if(musKliknummer==3){
        klikketKort=[];
        
        resetIkkerigtigeKort();
        youveWon();
        musKliknummer=0;
    }
    
}

//En ting man gør i JS
window.onload =function() {
    console.log("hello world");
    //noget canvas
    canvas = document.getElementById("gameCanvas");
    canvasContext = canvas.getContext("2d");
    
    //mus klik
    canvas.addEventListener("mousedown",handleMouseClick);
}


function tegnAlt(){
    console.log("pressed");
    //baggrund
    colorRect(0,0,canvas.width,canvas.height, "grey");
    tegnKort();
    shuffle(kort);
    console.log(kort)

}

//kort værdier
var kortWidth = 250;
var kortHeight = 250;

function tegnKort(){
    console.log("Kort tegnet");

    //1 række
    colorRect(25,25,kortWidth,kortWidth, "black");
    colorRect(25,325,kortWidth,kortWidth, "black");
    //2 række
    colorRect(325,25,kortWidth,kortWidth, "black");
    colorRect(325,325,kortWidth,kortWidth, "black");
    //3 række 
    colorRect(625,25,kortWidth,kortWidth, "black");
    colorRect(625,325,kortWidth,kortWidth, "black");


}

function resetIkkerigtigeKort(){
    rigtigEllerForkert;
        console.log("Kort tegnet");
    
        //1 række
        if(rigtigEllerForkert[0]==false){
        colorRect(25,25,kortWidth,kortWidth, "black");
    }        if(rigtigEllerForkert[1]==false){

        colorRect(25,325,kortWidth,kortWidth, "black");
        //2 række
    }        if(rigtigEllerForkert[2]==false){

        colorRect(325,25,kortWidth,kortWidth, "black");
    }        if(rigtigEllerForkert[3]==false){

        colorRect(325,325,kortWidth,kortWidth, "black");
    }        if(rigtigEllerForkert[4]==false){

        //3 række 
        colorRect(625,25,kortWidth,kortWidth, "black");
    }        if(rigtigEllerForkert[5]==false){

        colorRect(625,325,kortWidth,kortWidth, "black");
    
    }
    
}




var kort = ["red","green","blue","red","green","blue"];

//Array shuffle
function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}

function youveWon(){
    if(rigtigEllerForkert[0] == true && rigtigEllerForkert[1] == true && rigtigEllerForkert[2] == true && rigtigEllerForkert[3] == true && rigtigEllerForkert[4] == true && rigtigEllerForkert[5] == true){
       if(confirm("Tillykke du vandt, prøv igen? ")== true){        document.location.reload()       }
    }

}

//bruger canvas funks, til at tegne+farve en rect.
function colorRect(leftX,topY,width,height,drawColor){
    canvasContext.fillStyle = drawColor;
    canvasContext.fillRect(leftX,topY,width,height);
}

//bruger canvas funks, til at tegne+farve en cirkel.
function colorCircle(centerX, centerY, radius, drawColor){
    //ball
    canvasContext.fillStyle = drawColor;
    canvasContext.beginPath();
    canvasContext.arc(centerX,centerY,radius,0,Math.PI*2,true);
    canvasContext.fill();
}