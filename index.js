
function scuberGreetingForFeet(feet){
  // Write your code here!
  let greeting;
  if (feet <= 400) {
    greeting = "This one is on me!";
  } else if (feet <=2000) {
    greeting = "That will be twenty bucks.";
  } else if (feet <=2500) {
    greeting = "I will gladly take your thirty bucks.";
  } else if (feet >2500) {
    greeting = "No can do.";
  }
  return greeting;
}
scuberGreetingForFeet();

function ternaryCheckCity(city){
  // Write your code here!
  let answer = (city === "NYC") ? "Ok, sounds good." : "No go.";
  return answer;
}
ternaryCheckCity();

function switchOnCharmFromTip(amount) {
  // Write your code here!
  let response;
switch (amount) {
  case "generous" :
    response = "Thank you so much.";
    break;
  case "not as generous" :
    response = "Thank you.";
    break;
  default:
    response = "Bye.";
    break;
}
return response;
}
switchOnCharmFromTip();