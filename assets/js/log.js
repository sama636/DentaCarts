let emailAddress = document.getElementById("formGroupExampleInput");
let passowrd = document.getElementById("formGroupExampleInput2");
let pass = document.querySelector(".password__input");
let emaill = document.querySelector(".email__input");
let buttonLog  = document.querySelector(".log__btn")



function valiodation (){
    if(emailAddress.value.trim()===""){
        onError(emailAddress,"Email Address cannot be empty");
    }
    else{
        onSuccess(emailAddress);
    }
    if(passowrd.value.trim()===""){
        onError(passowrd,"password cannot be empty");
    }
    else{
        if(isValidPassowrd(passowrd.value.trim())){
            onError(passowrd,"password is not valid");
        }
        else{
            onSuccess(passowrd);
        }
    }
    
}
document.querySelector("button")
.addEventListener("click", (event)=>{
    event.preventDefault()
    valiodation();
})
function onSuccess(input){
    let parent = input.parentElement;
        let massageEle = parent.querySelector("small");
        massageEle.style.visibility="hidden";
        massageEle.innerText="";
        parent.classList.remove("error");
        parent.classList.add("success");
}
function onError(input,massage){
    let parent = input.parentElement;
        let massageEle = parent.querySelector("small");
        massageEle.style.visibility="visible";
        massageEle.innerText=massage;
        parent.classList.add("error");
        parent.classList.remove("success");
}
function isValidPassowrd(passowrd){
}
let storage = []
function login(){
    buttonLog.addEventListener("click", function(){
        console.log(emaill.value);

        let loginLocal = JSON.parse(localStorage.getItem("register"))
        loginLocal.forEach((e) => {
            
            if (e.email == emaill.value && e.passowrd == pass.value){
                window.open("/index.html");
            }
            else{
                console.log("false");
            }
        })
    })
}
login();