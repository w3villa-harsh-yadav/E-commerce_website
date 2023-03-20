function register(){
    window.location.assign("register.html");
    let username = document.getElementById("runame").value;
    let email = document.getElementById("remail").value;
    let password = document.getElementById("rpass").value;

    if(localStorage.getItem(email.toLowerCase())){
        window.stop();
        alert("User Already Exist");
    }
    else{
        let user_data = {
            "username":username,
            "email":email.toLowerCase(),
            "password":password,
            "islogin": false
        }
        let user_data_serialized = JSON.stringify(user_data);
        localStorage.setItem(`${email}`,user_data_serialized);
        alert("User Registered");
        window.location.assign("login.html");
    }
}


const login =() =>{
    window.location.assign("login.html");
    let email = document.getElementById("lemail").value;
    let password = document.getElementById("lpass").value;

    if(localStorage.getItem(email.toLowerCase())){

        let user = JSON.parse(localStorage.getItem(email));
        if(password == user.password){
            user.islogin = true
            localStorage.setItem(`${email}`,JSON.stringify(user))
            window.location.assign("index.html");
            alert("Logged in");
        }
        else{
            window.stop();
            alert("Please Enter Valid Password");
        }
    }
    else{
        window.stop();
        alert("User not found");
    }
} 

const logout = () =>{
    Object.keys(localStorage).forEach((key) => {
        const user = JSON.parse(localStorage.getItem(key));
        if(user.islogin == true){
            user.islogin = false
            localStorage.setItem(`${user.email}`,JSON.stringify(user))
        }
    });
    window.location.assign("login.html");
    alert("Logged out!")
}

// onload funciton
function logged() {
    let name = ""
    Object.keys(localStorage).forEach((key) => {
      const user = JSON.parse(localStorage.getItem(key));
      if(user.islogin == true){
        name = user.username;
      }
    });
    if(name!=""){
      document.getElementById("login-user").innerText = name;
      document.getElementById("logout").style.display = "flex";
      document.getElementById("register").style.display = "none";
    }
  }

function load(){
    Object.keys(localStorage).forEach((key) => {
      const user = JSON.parse(localStorage.getItem(key));
      if(user.islogin == true){
        // window.location.assign("index.html");
      }
    });
}
  