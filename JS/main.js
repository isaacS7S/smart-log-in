var UserName = document.getElementById("UserName")
var UserEmail = document.getElementById("UserEmail")
var UserPass = document.getElementById("UserPass")

var AllUsers = []
function GetValue() {
    var email = UserEmail.value;
    var password = UserPass.value;

    var emailTest = AllUsers.some(function (user) {
        return user.Email === email;
    });

    var passwordTest = AllUsers.some(function (user) {
        return user.Password === password;
    });

    if (emailTest || passwordTest) {
        document.getElementById("alertSignUp").classList.replace("d-none", "d-block");
    } else {
        if (ValidName() == true && ValidEmail() == true && ValidPass() == true) {

            var Users = {
                name: UserName.value,
                Email: UserEmail.value,
                Password: UserPass.value,
            }
            AllUsers.push(Users)
            localStorage.setItem("all", JSON.stringify(AllUsers))
            clear()

        }
    }

}


function clear() {
    UserName.value = ""
    UserEmail.value = ""
    UserPass.value = ""
}


function ValidName() {
    var RegExp = /^[A-Z][a-z]{3,9}[0-9]?$/g
    if (RegExp.test(UserName.value) == true) {
        document.getElementById("alertName").classList.replace("d-block", "d-none")
        return true
    }
    else {

        document.getElementById("alertName").classList.replace("d-none", "d-block")
        return false
    }
}
function ValidEmail() {
    var RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (RegExp.test(UserEmail.value) == true) {
        document.getElementById("alertEmail").classList.replace("d-block", "d-none");
        return true;
    } else {
        document.getElementById("alertEmail").classList.replace("d-none", "d-block");
        return false;
    }
}
function ValidPass() {
    var RegExp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
    if (RegExp.test(UserPass.value) == true) {
        document.getElementById("alertPass").classList.replace("d-block", "d-none");
        return true;
    } else {
        document.getElementById("alertPass").classList.replace("d-none", "d-block");
        return false;
    }
}


//=------------------------------------------- sign in -----------------------------------------------

function checkCredentials() {
    var email = document.getElementById("loginEmail").value;
    var password = document.getElementById("loginPassword").value;

    var AllUsers = JSON.parse(localStorage.getItem("all")) || [];
    var user = AllUsers.find(function (user) {
        return user.Email === email && user.Password === password;
    });

    if (user) {
        localStorage.setItem("currentUser", JSON.stringify(user));
        window.location.href = "welcom.html";
    } else {
        document.getElementById("alertCredentials").classList.replace("d-none", "d-block");
    }
}








