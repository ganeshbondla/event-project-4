const users = [
    {
        id : 1,
        name : "Sandhya",
        email:"sandhyagundeti4*gmail.com",
    },
    {
        id : 2,
        name : "Sharath",
        email : "sharath@gmail.com",
    },
];
const user = users.find((users) => users.id == 1);
console.log(user);  //display both  details.

const fil=users.filter((users) => users.name == "Sharath");
console.log(fil); // filter the  id 1 details.

const fill=users.findIndex((users) => users.id == 2);
console.log(fill);

console.log(users); //display both details.
console.log(users[0]); //display index 0 details.
console.log(users[1]); //display index 1 details.

localStorage.setItem("users", JSON.stringify(users));
const result =JSON.parse(localStorage.getItem("users"));