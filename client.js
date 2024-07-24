<script>
function validateForm() {
const nameRegex = /^[a-z]{9}$/; 
const passwordRegex = /^[a-zA-Z0-9@_|^-]{8,}$/; 
let status = true;
const username = document.getElementById("uname").value;
if (!nameRegex.test(username)) {
document.getElementById("u_er").innerHTML = "!Username is invalid. It must be exactly 9 lowercase letters.";
status = false;
} else {
document.getElementById("u_er").innerHTML = "";
}
const password = document.getElementById("pas").value;
if (!passwordRegex.test(password)) {
document.getElementById("pass").innerHTML = "Password must be at least 8 characters long";
status = false;
} else {
document.getElementById("pass").innerHTML = "";
}
const confirmPassword = document.getElementById("conpass").value;
if (password !== confirmPassword) {
document.getElementById("conpa").innerHTML = "Passwords must match.";
status = false;
} else {
document.getElementById("conpa").innerHTML = "";
}

return status;
}
</script>
