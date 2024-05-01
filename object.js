let user = {
  firstName: "Test",
  lastName: "User",
  age: 30,
  address: "123 Main St",
  city: "Anytown",
  state: "CA",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

user.zipcode = "12345";

console.log(user);
