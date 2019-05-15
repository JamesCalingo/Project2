function Validate() {
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
    if (password != confirmPassword) {
        alert("Passwords do not match.");
        return false;
    }
    return true;
}

$(document).on("click", ".createRegistry", function (event) {


    
if(Validate()){
    $.ajax({
        url: "/api/users",
        method: "POST",
    }).then(function () {
        console.log("registry created");
        location.reload();
    })
});
}