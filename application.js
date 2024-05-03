function register() {
  let nameInput = document.getElementById("name").value;
  let emailInput = document.getElementById("email").value;
  let passwordInput = document.getElementById("password").value;
  let uniqueId = Math.floor(100000 + Math.random() * 999999);

  if (nameInput == "" || emailInput == "" || passwordInput == "") {
    alert("Please fill all the fields");
    return;
  }

  let user = {
    id: uniqueId,
    name: nameInput,
    email: emailInput,
    password: passwordInput,
  };

  let users = JSON.parse(localStorage.getItem("users")) || [];
  users.push(user);
  localStorage.setItem("users", JSON.stringify(users));
  alert("Registration successful");
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
