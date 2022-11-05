function validate(){
    var username=document.getElementById("username").value;
    var password=document.getElementById("password").value;

    if(username=="8860493812" && password=="chopraaman@LGLG")
    {
        alert("login successful.");
        return true;
    }

    else if(username=="7060998201" && password=="kumarsatyam@LGLG")
    {
        alert("login succeessful.");
        return true;
    }

   
    else
    {
         alert("login failed\ninput correct id and password.");
        return false;
    }
}