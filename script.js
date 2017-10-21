var myRec = new p5.SpeechRec('en-US', parseResult);
myRec.continuous = true;
myRec.interimResults = true;


var most_recent_word

var xa = [], ya = []
var x, y
var i
var dx, dy
var speed

function setup() {
    createCanvas(windowWidth, windowHeight)
    background(2)
    x = width / 2
    y = height / 2
    dx = 0
    dy = 0
    i = 0
    speed=1
    myRec.start()
}

function texts() {
    push()
    fill(0, 0, 255)
    textSize(20)
    textAlign(LEFT)
    text("instructions::", 20, 20)
    text("left", 30, 35)
    text("right", 30, 50)
    text("up", 30, 65)
    text("down", 30, 80)
    text("stop", 30, 95)
    text("clear", 30, 110)

    textAlign(RIGHT)
    fill(0, 255, 0)
    textSize(30)
    text("COMAAND:", width, 40)
    text(" " + myRec.resultString, width, 60)
    pop()

}
function draw() {
    background(2)


    x = x + dx
    y = y + dy
    xa[i] = x
    ya[i] = y
    i++
    push()
    fill("RED")
    for (index = 0; index < xa.length; index++) {
        ellipse(xa[index], ya[index], 10, 10)
    }

    texts()
    if (x < 0) x = width
    if (x > width) x = 0
    if (y < 0) y = height
    if (y > height) y = 0
}
function parseResult() {

    console.log(myRec.resultString)
    most_recent_word = myRec.resultString.split(' ').pop()
    var confidence = myRec.resultConfidence;

    console.log(most_recent_word + "  conficence::  " + confidence)
    if (most_recent_word.indexOf("left") !== -1) {
        dx = -1*speed
        dy = 0*speed
        // console.log(dx)
    } else

        if (most_recent_word.indexOf("right") !== -1) {
            dx = 1*speed
            dy = 0*speed
            // console.log(dx)
        } else

            if (most_recent_word.indexOf("up") !== -1) {
                dx = 0*speed
                dy = -1*speed
                // console.log(dy)
            } else

                if (most_recent_word.indexOf("down") !== -1) {
                    dx= 0*speed
                    dy = 1*speed
                    // console.log(dy)
                } else
                    if (most_recent_word.indexOf("clear") !== -1) {
                        xa = []
                        ya = []
                    } else
                        if (most_recent_word.indexOf("stop") !== -1) {
                            noLoop()
                        } else
                            if (most_recent_word.indexOf("start") !== -1) {
                                loop()
                            } else

                                if (most_recent_word.indexOf("fast") !== -1) {
                                    speed*=1.3
                                    dx*=speed
                                    dy*=speed
                                    // console.log(speed)
                                } else

                                    if (most_recent_word.indexOf("slow") !== -1) {
                                        speed*=0.7
                                        dx*=speed
                                        dy*=speed
                                        // console.log(speed)
                                    }



}