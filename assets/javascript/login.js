function register(){
    let username = document.getElementById("runame").value;
    let email = document.getElementById("remail").value;
    let password = document.getElementById("rpass").value;

    if(localStorage.getItem(email)){
        alert("User Already Exist");
    }
    else{
        let user_data = {
            "username":username,
            "email":email,
            "password":password
        }
        let user_data_serialized = JSON.stringify(user_data);
        localStorage.setItem(`${email}`,user_data_serialized);
        alert("User Registered");
    }
}
const login =() =>{
    let email = document.getElementById("lemail").value;
    let password = document.getElementById("lpass").value;

    if(localStorage.getItem(email)){

        let user = JSON.parse(localStorage.getItem(email));
        if(password == user.password){
            window.location.assign("index.html");
            alert("Logged in");
        }
        else{
            alert("Please Enter Valid Password");
        }
    }
    else{
        alert("User not found");
    }
} 
