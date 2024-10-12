let automatic = true;

function randomnumber1() {
    var randomnumber1 = Math.floor(Math.random() * 6) + 1;
    var image = "/1 - diceGame/images/dice" + randomnumber1 + ".png";
    document.querySelector(".img1").setAttribute("src", image);
    var  audio = new Audio("yay-6326.mp3"); 
    audio.play();
    return randomnumber1;
  
}

function randomnumber2() {
    var randomnumber2 = Math.floor(Math.random() * 6) + 1;
    var image = "/1 - diceGame/images/dice" + randomnumber2 + ".png";
    document.querySelector(".img2").setAttribute("src", image);
    audio = new Audio("yay-6326.mp3"); 
    audio.play();
    return randomnumber2;
    
}


function declarewinner() {
    let image1 = randomnumber1();
    let image2 = randomnumber2();

    if (image1 > image2) {
        document.querySelector(".heading").innerHTML = "Player 1 Won 🎉" ;
    } else {
        document.querySelector(".heading").innerHTML = "Player 2 Won 🎊" ;
    } if(image1 === image2){
        document.querySelector(".heading").innerHTML = "Thats a Draw :D "
    }
}

function showHelp() {
    let helpDialog = document.getElementById('helpDialog');
    helpDialog.showModal();
  }
  
  function closeHelpDialog() {
    let helpDialog = document.getElementById('helpDialog');
    helpDialog.close();


  }
function replay() {
    randomnumber2();
    randomnumber1();
    declarewinner();

}

randomnumber1();
randomnumber2();
declarewinner();






































































































































































































































































































