let createBtn=document.querySelector("#create")
let alreadyBtn=document.querySelector("#already")
let signupDiv=document.querySelector(".signup-div")
let signupForm=document.getElementById("signup-form")
let loginDiv=document.querySelector(".login-div")
let loginForm=document.getElementById("login-form")
let signinNav=document.querySelector(".signin-nav")
let profileNav=document.querySelector(".UserName")
let profileName=document.getElementById("Profile")
let logout=document.getElementById("logout")
let toast_body=document.querySelector(".toast-body")


// loginpage to signup page
document.querySelector("body").onload=()=>{
    console.log(profileNav)
    let data=JSON.parse(localStorage.getItem("loginUser")) || []
    if(data.length==1){
        profileNav.style.display="block"
        signinNav.style.display="none";
        console.log( data)
        profileName.innerText=data[0].name.slice(0,7)+"..";
    }else{
        profileNav.style.display="none"
    }
}

createBtn.addEventListener("click",()=>{
    document.getElementById("mobile").value=""
    signupDiv.style.display="block"
    signupForm.style.display="block"
    loginDiv.style.display="none"
    loginForm.style.display="none"
})

// signup page to loginpage
alreadyBtn.addEventListener("click",()=>{
  document.querySelector(".mobile").value=""
document.getElementById("email").value=""
document.getElementById("name").value=""
    signupDiv.style.display="none"
    signupForm.style.display="none"
    loginDiv.style.display="block"
    loginForm.style.display="block"

})

// sighuppage submit
signupForm.onsubmit=()=>{
let mobile=document.querySelector(".mobile").value
let email=document.getElementById("email").value
let name=document.getElementById("name").value
let users=JSON.parse(localStorage.getItem("usersData")) || [];
let array=users.filter((element)=>{
    return mobile==element.mobile
})
console.log(array)
if(array.length>=1){
    Alert("User Already Register!",signupForm)

}else if(mobile.length!=10 || email=="" || name==""){
    Alert("Please Enter Correct Details!",signupForm)
}else{
    var obj={
        mobile:mobile,
        name:name,
        email:email,
    }
    document.querySelector(".mobile").value=""
    document.getElementById("email").value=""
    document.getElementById("name").value=""
    users.push(obj)
    localStorage.setItem("usersData",JSON.stringify(users));
    signupDiv.style.display="none"
    signupForm.style.display="none"
    loginDiv.style.display="block"
    loginForm.style.display="block"
}
}


// loginpage submit

loginForm.onsubmit=()=>{
    let mobile=document.getElementById("mobile").value
    let users=JSON.parse(localStorage.getItem("usersData")) || [];
    if(mobile.length!=10){
        Alert("Please Enter Valid Mobile Number!",loginForm)
    }else{
        let obj=users.filter((element)=>{
            return mobile==element.mobile
        })
        console.log(obj)
        if(obj.length==0){
            Alert("User Not Register!",loginForm)
        }else{
            let log=document.getElementById("log")
            log.setAttribute("data-bs-dismiss","offcanvas")
            log.setAttribute("aria-label","Close")
            console.log(log)
                localStorage.setItem("loginUser",JSON.stringify(obj));
                signinNav.style.display="none";
                profileNav.style.display="block"
                console.log(obj)
                profileName.innerText=obj[0].name.slice(0,7)+"..";
                document.getElementById("mobile").value=""
                Alert("Congratulations! Login Successfully",loginForm)
                // data-bs-dismiss="offcanvas" aria-label="Close"

           
            
        }
    }
}
  



//logout

logout.onclick=()=>{
    let arr=[];
    localStorage.setItem("loginUser",JSON.stringify(arr))
    signinNav.style.display="block";
    profileNav.style.display="none"
    Alert("logout Successfully!",loginForm)
}



//loast alert
function Alert(word,btn){
const toastLiveExample = document.getElementById('liveToast')
console.log(word,toast_body)
    toast_body.innerText=word
    btn.addEventListener('submit', () => {
    const toast = new bootstrap.Toast(toastLiveExample)

    toast.show()
  })
}
























// use all this link for navbar and login and signup
// css

/* <script src="https://cdn.tailwindcss.com"></script>
<link rel="stylesheet" href="navbar.css">
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous"> */
/* <link rel="stylesheet" href="../pages/login.css"> */


// scripts
// <script src="../pages/login.js" type="module"></script>
// <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossorigin="anonymous"></script>

//     <script src="https://kit.fontawesome.com/977289aa03.js" crossorigin="anonymous"></script>



