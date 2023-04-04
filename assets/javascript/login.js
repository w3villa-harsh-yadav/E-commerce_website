function register() {
  window.location.assign("register.html");
  let username = document.getElementById("runame").value;
  let email = document.getElementById("remail").value;
  let password = document.getElementById("rpass").value;
  if (username == "" || email == "" || password == "") {
    window.stop();
    alert("Please enter all the details");
    return;
  }
  if (localStorage.getItem(email.toLowerCase())) {
    window.stop();
    alert("User Already Exist");
  } else {
    let user_data = {
      username: username,
      email: email.toLowerCase(),
      password: password,
      islogin: false,
    };
    let user_data_serialized = JSON.stringify(user_data);
    localStorage.setItem(`${email}`, user_data_serialized);
    alert("User Registered");
    window.location.assign("login.html");
  }
}

const login = () => {
  window.location.assign("login.html");
  let email = document.getElementById("lemail").value;
  let password = document.getElementById("lpass").value;
  if (email == "" || password == "") {
    window.stop();
    alert("Please enter some credintials");
    return;
  }
  if (localStorage.getItem(email.toLowerCase())) {
    let user = JSON.parse(localStorage.getItem(email));
    if (password == user.password) {
      user.islogin = true;
      localStorage.setItem(`${email}`, JSON.stringify(user));
      window.location.assign("index.html");
      alert("Logged in");
    } else {
      window.stop();
      alert("Please Enter Valid Password");
    }
  } else {
    window.stop();
    alert("User not found");
  }
};

const logout = () => {
  Object.keys(localStorage).forEach((key) => {
    const user = JSON.parse(localStorage.getItem(key));
    if (user.islogin == true) {
      user.islogin = false;
      localStorage.setItem(`${user.email}`, JSON.stringify(user));
    }
  });
  window.location.assign("login.html");
  alert("Logged out!");
};

// onload funciton

function logged() {
  let name = "";
  Object.keys(localStorage).forEach((key) => {
    const user = JSON.parse(localStorage.getItem(key));
    if (user.islogin == true) {
      name = user.username;
    }
  });
  if (name != ""){
    document.getElementById("login-user").innerText = name;
    document.getElementById("logout").style.display = "flex";
    document.getElementById("register").style.display = "none";
    if (localStorage.getItem("cart1")) {
      cart1 = JSON.parse(localStorage.getItem("cart1"));
      totalprice = JSON.parse(localStorage.getItem("totalprice"));
      document.getElementById(
        "cart-heading"
      ).innerHTML = `<i class="fa-solid fa-${cart1.length}"></i>`;
      document.getElementById(
        "total-items"
      ).innerText = `${cart1.length} item(s)-Rs.${totalprice}`;
      document.getElementById("cart-heading").style.display = "block";
    }
    if (localStorage.getItem("wl")){
      wl = JSON.parse(localStorage.getItem("wl"));
      document.getElementById(
        "wish-heading"
      ).innerHTML = `<i class="fa-solid fa-${wl.length}"></i>`;
      document.getElementById("wish-heading").style.display = "block";
    }
    let x = document.cookie;
    console.log(x)
    if(x == "loadcart"){
      document.cookie = " path=/;";
      // loadcart();
    }
    else{
    }
  } else {
    window.location.assign("login.html");
  }
}

// login.html
function load() {
  Object.keys(localStorage).forEach((key) => {
    const user = JSON.parse(localStorage.getItem(key));
    if (user.islogin == true) {
      window.location.assign("index.html");
    }
  });
}
