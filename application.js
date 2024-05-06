function register() {
    let nameIs = document.getElementById("name").value;
    let emailIs = document.getElementById("email").value;
    let passwordIs = document.getElementById("password").value;
    let uniqueId = Math.floor(100000 + Math.random() * 999999);

    if(nameIs == "" || emailIs == "" || passwordIs == "") {
        alert("Please enter all the  fields");
        return;
    }
    let user = {
        id: uniqueId,
        name: nameIs,
        email: emailIs,
        password: passwordIs,
    };
    let users =JSON.parse(localStorage.getItem("users")) || [];
    users.push(user);
    localStorage.setItem("users",JSON.stringify(users));
    alert("Registration Successful");
}