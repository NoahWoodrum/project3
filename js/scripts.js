function beepboop(number){
  let returnedOutput= [];
  for (let i = 0; i <= number; i++) {
    if (i.toString().includes("3")) {
    returnedOutput.push("Won't you be my neighbor!")
    } else if (i.toString().includes("2")){
    returnedOutput.push("Boop!")
    } else if (i.toString().includes("1")){
    returnedOutput.push("Beep!")
    } else {
    returnedOutput.push(i)
  }}  
  
  return returnedOutput.join(" ");
}

//UserInterface Logic
$(document).ready(function() {
  $("form#input").submit(function(event) {
    event.preventDefault();
    const userInput = $("#mrRoboger").val();
    const outputResult = beepboop(userInput);
    $("#returnedOutput").text(outputResult);
    });
  }); 