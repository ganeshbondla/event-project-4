let user = {
  firstName: "Test",
  lastName: "User",
  age: 30,
  address: "123 Main St",
  city: "Anytown",
  state: "CA",
  ele: true,
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

user.zipcode = "12345";

let finalResult;

if (user.age >= 30) {
  finalResult = user.fullName();
} else {
  console.log("Age is less than 30");
}

console.log(user);
