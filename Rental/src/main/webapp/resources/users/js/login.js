

function login() {
    var userEmail = document.getElementById("user_email").value;
    var userPw = document.getElementById("user_pw").value;

    var formData = new FormData();
    formData.append("user_email", userEmail);
    formData.append("user_pw", userPw);
}