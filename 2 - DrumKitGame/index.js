document.addEventListener("keypress" ,(e)=>{
   let clickedkey = e.key; 
   console.log(`pressed key : ${clickedkey}`);
   playaudio(clickedkey);
   buttonanimation(clickedkey);
return clickedkey; 
}); 


document.querySelectorAll(".drum").forEach(drum => {
    drum.addEventListener("click", (e) => {
        let clickedText = e.target.innerText;
        console.log(`Clicked text: ${clickedText}`);
        playaudio(clickedText);
        buttonanimation(clickedText);
        return clickedText; 

    });
});


function playaudio(key){
    switch (key) {
        case "w":
          playtheaudio("sounds/tom-1.mp3")
            break;
        case "a":
            playtheaudio("sounds/tom-2.mp3")
            break; 
        case "s": 
            playtheaudio("sounds/tom-3.mp3")
            break; 
        case "d": 
            playtheaudio("sounds/tom-4.mp3")
            break; 
        case "j":
            playtheaudio("sounds/crash.mp3")
            break; 
        case "k":
            playtheaudio("sounds/kick-bass.mp3"); 
            break; 
        case "l": 
            playtheaudio("sounds/snare.mp3")
            break
    
        default:
            console.log("unknown Key : D")
            break;
    }
};

function buttonanimation(animatekey){

    var pressedbutton = document.querySelector("." + animatekey);
    pressedbutton.classList.add("hover");
    setTimeout(function(){
         pressedbutton.classList.remove("hover")
    }, 1000);
}

function playtheaudio(audiofile){

    const audio = new Audio(audiofile) ;
    audio.play();

}
