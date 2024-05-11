function register(){
  let nameInput = document.getElementById("name").value;
  let emailInput = document.getElementById("email").value;
  let passwordInput = document.getElementById("password").value;
  let uniqueId = Math.floor(100000 + Math.random() * 999999);


  if(nameInput == "" || emailInput == "" || passwordInput == ""){
      alert("Please fill the all the field");
      return;
  }
  let user = {
      id :  uniqueId,
      name : nameInput,
      email : emailInput,
      password : passwordInput,
  };
  let users = JSON.parse(localStorage.getItem("users")) || [];
  users.push(user);
  localStorage.setItem("users", JSON.stringify(users));
  alert("Registration Successful");
}
function login() {
  let emailInput = document.getElementById("email").value;
  let passwordInput = document.getElementById("password").value;

  if (emailInput == "" || passwordInput == "") {
    alert("Please fill all the fields");
    return;
  }

  let registeredUsers = JSON.parse(localStorage.getItem("users"));

  let loginUser = registeredUsers.find((user) => user.email == emailInput);

  if (loginUser == undefined) {
    document.getElementById("message").innerHTML =
      "You have not registred with us, please register before login!";
    return;
  } else {
    document.getElementById("message").innerHTML = "";

    if (loginUser.password == passwordInput) {
      alert("Login successful");
    } else {
      document.getElementById("message").innerHTML = "Incorrect password";
    }
  }
}
function listUsers() {
  let users = JSON.parse(localStorage.getItem("users"));

  let usersUI = "";
  usersUI += `
  <table id="customers">
  <tr>
  <th>S.No</th>
  <th>User Id</th>
  <th>Name</th>
  <th>Email</th>
  <th>Actions</th>
  </tr>`;
  users.map((user, index) => {
    usersUI += "<tr>";
    usersUI += "<td>" + index + "</td>";
    usersUI += "<td>" + user.id + "</td>";
    usersUI += "<td>" + user.name + "</td>";
    usersUI += "<td>" + user.email + "</td>";
    usersUI +=
      "<td><button onclick='editUser(" +
      user.id +
      ")'>Edit</button> | <button onclick='deleteUser(" +
      user.id +
      ")'>Delete</button></td>";
    usersUI += "</tr>";
  });
  usersUI += `</table>`;
  document.getElementById("usersList").innerHTML = usersUI;
}
function editUser(userId) {
let listOfUsers = JSON.parse(localStorage.getItem("users"));
let singleUser = listOfUsers.find((user) => user.id === userId);
var userIs = JSON.stringify(singleUser);
localStorage.setItem("actionUser", userIs);
window.location = "editUser.html?save=true";
}

function updateUser() {
const updatedName = document.getElementById("name").value;
const updatedEmail = document.getElementById("email").value;

let actionUser = JSON.parse(localStorage.getItem("actionUser"));

let listUsers = JSON.parse(localStorage.getItem("users"));

let user = listUsers.find((user) => user.id === actionUser.id);
user.name = updatedName;
user.email = updatedEmail;

localStorage.setItem("users", JSON.stringify(listUsers));
localStorage.removeItem("actionUser");
window.location = "userDataList.html";
}
function deleteUser(uid) {
let listusersindb = JSON.parse(localStorage.getItem("users"));
let remains = listusersindb.filter((user) => user.id !== uid);
localStorage.setItem("users", JSON.stringify(remains));
window.location = "userDataList.html";
}