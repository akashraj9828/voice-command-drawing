var myRec= new p5.SpeechRec('en-US',parseResult);
myRec.continuous = true;
myRec.interimResults = true;

var x,y
var dx,dy

function setup(){
    createCanvas(windowWidth,windowHeight)
    background(2)
    x=width/2
    y=height/2
    dx=0
    dy=0

    fill(0,0,255)
    textSize(20)
    textAlign(LEFT)
    text("instructions::",20,20)
    text("left",30,35)
    text("right",30,50)
    text("up",30,65)
    text("down",30,80)
    text("stop",30,95)
    text("clear",30,110)

    myRec.start()
}

function draw(){
    // myRec.start()
    push()
    fill("RED")
    ellipse(x,y,5,5)
    x=x+dx
    y=y+dy
    if(x<0) x=width
    if(x>width) x=0
    if(y<0) y=height
    if(y>height) y=0
}
function parseResult(){
    var most_recent_word=myRec.resultString.split(' ').pop()
    if(most_recent_word.indexOf("left")!==-1){
        dx=-1
        dy=0
    }else
    
    if(most_recent_word.indexOf("right")!==-1){
        dx=1
        dy=0
    }else

    if(most_recent_word.indexOf("up")!==-1){
        dx=0
        dy=-1
    }else

    if(most_recent_word.indexOf("down")!==-1){
        dx=0
        dy=1
    }
    if(most_recent_word.indexOf("clear")!==-1){
        background(2);
    }

    console.log(most_recent_word)

}