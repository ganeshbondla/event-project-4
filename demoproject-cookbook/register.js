function register() {
    let usernameIs = document.getElementById("username").value;
    let emailIs = document.getElementById("email").value;
    let numberIs = document.getElementById("number").value;
    let passwordIs = document.getElementById("password").value;
    let uniqueId = Math.floor(100000 + Math.random() * 999999);

    if(usernameIs == "" || emailIs == "" || numberIs == "" || passwordIs == "") {
        alert("Please enter all the  fields");
        return;
    }
    let user = {
        id: uniqueId,
        username:usernameIs,
        email: emailIs,
        number:numberIs,
        password: passwordIs,
    };
    let users =JSON.parse(localStorage.getItem("users")) || [];
    users.push(user);
    localStorage.setItem("users",JSON.stringify(users));
    alert("Registration Successful");
}