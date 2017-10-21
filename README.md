# `Voice Command Drawing`
##### This is a simple web based sketch-pad that moves the paint-brush using voice recognition.
#
#
## `Commands available:`
* left
* right
* up
* down
* clear
* stop
* fast
* slow

##### Currently voice recognition api is is only available in chrome browser as per my knowledge .
#
#
#
## Here is how to access the speech recognition api in browser
**internet access required for speech recognition
```js
var recognition = new webkitSpeechRecognition();    //create speech recognition object

//set speech recognition language
        recognition.lang = "en-GB";
//continous mode means the object keeps recognizing speech
        recognition.continuous = true; 
        
//interimResults means the object will report (i.e. fire its
// onresult() callback) more frequently, rather than at pauses
// in microphone input.  this gets you quicker, but less accurate,
// results.
        recognition.interimResults = true;  
        
// resultString:
// the 'transcript' of the most recently recognized speech as a simple
// string.
        recognition.resultString; 


recognition.onresult = function() {            //function to trigger when speech is detected 
 //function
}
recognition.start();                              //starts speech recognition engine
```
