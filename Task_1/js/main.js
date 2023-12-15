var userNameInput = document.getElementById("userName");
var passwordInput = document.getElementById("password");
var currentDiv = document.getElementById ("currentDiv");
var newDiv =document.createElement("p");


function checkInput(userInfo){
  if(userInfo.userName == "admin" & userInfo.userPass == 123){
    var newContent = document.createTextNode(`WELCOME ${userInfo.userName}`);
    newDiv.appendChild(newContent);
    document.body.appendChild(newDiv , currentDiv).setAttribute("style", "fontWheight: bold; textAlighn: center; color: red;");

    // alert("done register");
  }
  else
  {
    var newContent = document.createTextNode(`Not Registered`);
    newDiv.appendChild(newContent);
    document.body.appendChild(newDiv , currentDiv).setAttribute("style", "fontWheight: bold; textAlighn: center; color: red;");

    // alert("not register");

  }
}


function addInput() {
  var userInfo = {
    userName: userNameInput.value,
    userPass: passwordInput.value,
  };
  checkInput(userInfo);
}

