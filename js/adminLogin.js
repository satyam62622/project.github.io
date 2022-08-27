function validate(){
    var username=document.getElementById("username").value;
    var password=document.getElementById("password").value;
    if(username=="admin" && password=="geu123"){
         alert("login successful.");
        return true;
    }
    else
    {
         alert("login failed\ninput correct id and password.");
        return false;
    }
}