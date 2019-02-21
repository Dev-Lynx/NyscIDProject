function togglePassword() {
    var x = document.getElementById("password");
    var img = document.getElementById("password-toggle-img");
    if(x.type === "password") {
        x.type = "text";
        img.src = "images/baseline-visibility-24px.svg";
    }else {
        x.type = "password";
        img.src = "images/baseline-visibility_off-24px.svg";
    }
}