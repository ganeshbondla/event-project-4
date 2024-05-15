function register() {
    let fnameInput = document.getElementById("fname").value;
    let lnameInput = document.getElementById("lname").value;
    let emailInput = document.getElementById("email").value;
    let mobileInput = document.getElementById("mobile").value;
    let ageInput = document.getElementById("age").value;
    let dobInput = document.getElementById("dob").value;
    let passwordInput = document.getElementById("password").value;
    let uniqueId = Math.floor(100000 + Math.random() * 999999);
  
    if (fnameInput == "" || lnameInput == ""|| emailInput == "" || ageInput == ""|| dobInput=="" || passwordInput == "") {
      alert("Please fill all the fields");
      return;
    }
  
    let member = {
      id: uniqueId,
      fname: fnameInput,
      lname: lnameInput,
      email: emailInput,
      age: ageInput,
      dob:dobInput,
      password: passwordInput,
    };
  
    let members = JSON.parse(localStorage.getItem("members")) || [];
    members.push(member);
    localStorage.setItem("members", JSON.stringify(members));
    alert("Registration successful");
  }
  
  function login() {
    let emailInput = document.getElementById("email").value;
    let passwordInput = document.getElementById("password").value;
  
    if (emailInput == "" || passwordInput == "") {
      alert("Please fill all the fields");
      return;
    }
  
    let regusers = JSON.parse(localStorage.getItem("members"));
  
    let loginuser = regusers.find((member) => member.email === emailInput);
  
    if(loginuser == undefined) {
      document.getElementById("message").innerHTML =
        "You have not registred with us, please register before login!";
        return;
    } else {
      document.getElementById("message").innerHTML = "";
  
      if(loginuser.password == passwordInput) {
        alert("Login successful");
      } else {
        document.getElementById("message").innerHTML = "Incorrect password";
      }
    }
  }