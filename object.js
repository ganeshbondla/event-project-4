const user = {
    firstName: "Gundeti",
    lastName: "Sandhya",
    age: 26,
    address: "Ibrahimpatnam",
    city: "jagityal",
    state: "Telangana",
    fullName: function () {
        return this.firstName + " " + this.lastName;
    },
};
user.zipcode = "500346",
console.log(user);
console.log(user.fullName());
console.log(user.lastName);
console.log(user.state);


let age = 18;
    if(age >= 18) {
        console.log("Eligible for tournament");
    }else{
        console.log("Not Eligible for Tournament");
    }