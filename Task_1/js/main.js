var userNameInput = document.getElementById("userName");
var passwordInput = document.getElementById("password");
var currentDiv = document.getElementById ("currentDiv");
var newDiv =document.createElement("p");


function checkInput(){
  var userInfo = {
    userName: userNameInput.value,
    userPass: passwordInput.value,
  };

  if(userInfo.userName == "admin" & userInfo.userPass == "Remonda@2023"){
    var newContent = document.createTextNode(`WELCOME ${userInfo.userName}`);
    newDiv.appendChild(newContent);
    document.body.appendChild(newDiv , currentDiv).setAttribute("style", "fontWheight: bold; textAlighn: center; color: red;");

    // alert("done register");
  }

  else if(userInfo.userName !="admin"){ 
    alert("please enter correct username");
    // document.getElementById("loginform").username.focus();
    // document.getElementById("loginform").username.value=" ";
    
}
    else { 
    var passExpr = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).*$/;
    if(passExpr.test(userInfo.userPass.value)==false){
        alert("check that password should contain small, capital and numbers should atleast 8 charcters");
        // document.getElementById("loginform").password.focus();
}
}}

