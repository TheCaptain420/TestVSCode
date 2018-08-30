var counter = 1;
function myFunction(){
    var a = new Audio("https://www.myinstants.com/media/sounds/yasuo.mp3");
    var b = new Audio("https://www.myinstants.com/media/sounds/7458_yasuo.mp3");  
    if (counter%4==0){
       a.play();
       addNado();
        counter++;
    }else{
        b.play();
       
    }
   

   counter++;
   console.log(counter);
}
function addNado(){
    console.log("it runs");
    src = "http://rs387.pbsrc.com/albums/oo312/KirkWasHere/tornado.gif~c200";
    x  = document.createElement('img');
    x.src = src;
    document.body.appendChild(x);
    
 
}