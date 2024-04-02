window.addEventListener("DOMContentLoaded", () => {
  const answers = document.getElementById("answer");

  // Calling all the numbers.
  const number = document.querySelectorAll(".numbers").forEach(function (item) {
    item.addEventListener("click", function (e) {
      if (answers.innerText === "0") {
        answers.innerText = "";
      }

      if (answers.innerText === "NaN") {
        answers.innerText = "";
      }
      console.log(e.target.innerHTML.trim());
      answers.innerText += e.target.innerHTML.trim();
    });
  });

  //Calling all the operator signs
  const calcSigns = document
    .querySelectorAll(".operate")
    .forEach(function (item) {
      item.addEventListener("click", function (e) {
        console.log(e.target.innerHTML.trim());
        
        if (e.target.innerHTML === "=") {
          answers.innerText = eval(answers.innerText);
        } else if (e.target.innerHTML === "AC") {
          answers.innerText = 0;
        } else if (e.target.innerHTML === "DEL") {
          answers.innerText = answers.innerText.substring(
            0,
            answers.innerText.length - 1
          );
          if (answers.innerText.length == 0) {
            answers.innerText = 0;
          }
        } else {
          let lastDigit = answers.innerText.substring(
            answers.innerText.length,
            answers.innerText.length - 1
          );
          if (!isNaN(lastDigit)) {
            answers.innerText += e.target.innerHTML.trim();
          }
        }
      });
    });

  // Activate operations
  // let lastDigit =  answers.innerText.substring(answers.innerText.length, answers.innerText.length -1);

  // if(!isNaN(lastDigit) &&  e.target.innerHTML === "="){
  //     answers.innerText = eval(answers.innerText);
  // }
  // else if (e.target.innerHTML === "AC"){
  //     answers.innerText = 0;
  // }
  // else if(e.target.innerHTML === "DEl"){
  //     answers.innerText = answers.innerText.substring(0, answers.innerText.length - 1);
  //     if (answers.innerText.length == 0 ){
  //         answers.innerText = 0;
  //     }
  // }
  // else {
  //     if(!isNaN(lastDigit)){
  //     answers.innerText += e.target.innerHTML.trim();
  // }
  // }
});
