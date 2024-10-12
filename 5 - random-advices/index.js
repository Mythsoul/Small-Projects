document.addEventListener("DOMContentLoaded", function() {
    const adviceBox = document.querySelector(".animated-advice");
    const generate = document.querySelector(".generate-btn");

   
    generate.addEventListener("click",  async function() {
     const getadvice =  fetch("https://api.adviceslip.com/advice");
     const response =  getadvice.then(res => res.json());
     const advice = response.then(data => data.slip.advice);
     console.log(advice);

     const changetext = adviceBox.textContent =  await advice; 

    }) ; 
}); 