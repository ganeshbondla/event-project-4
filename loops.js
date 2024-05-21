const number = 10;

const array = ["Bike", "Car", "Bus", "Train", "Flight"];

for (let i = 0; i < array.length; i++) {
  if (array[i] == "Car") {
    continue;
  } else {
    console.log("Others Stoped");
  }
}

let iam = 11;
while (iam < 20) { //  11 < 20
  console.log(iam);
  iam++;
}

const nameIs = "Ganesh";
let msg = "";

switch (nameIs) {
  case "Ganesh":
    msg += "Hey Ganesh";
    break;
  case "Sandhya":
    msg += "Hey Sandhya!";
    break;
  default:
    msg += "Nothing Much";
}

console.log(msg);
