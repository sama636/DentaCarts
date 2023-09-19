let emailAddress = document.getElementById("formGroupExampleInput");
let passowrd = document.getElementById("formGroupExampleInput2");

function valiodation (){
    // console.log("valiodate input");
    if(emailAddress.value.trim()===""){
        onError(emailAddress,"Email Address cannot be empty");
    }
    else{
        onSuccess(emailAddress);
    }
    if(passowrd.value.trim()===""){
        onError(passowrd,"password cannot be empty");
    }
    // else{
    //     if(isValidPassowrd(passowrd.value.trim())){
    //         onError(passowrd,"password is not valid");
    //     }
    //     else{
    //         onSuccess(passowrd);
    //     }
    // }
    
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

function register(){
    let button = document.querySelector(".reg__btn");
    let  password__input = document.querySelector(".password2__input");
    let email__input = document.querySelector(".email2__input");
    let storage = JSON.parse(localStorage.getItem("register")) ??  []
button.addEventListener("click", function(){
    let emailAddress = email__input.value
    let passowrd = password__input.value
    console.log(emailAddress);
    console.log(email__input.value);
    let info = {
        email: emailAddress,
        passowrd: passowrd,
    }
    console.log(info);
    storage.push(info);
    email__input.value = ''
    password__input.value = ''
    localStorage.setItem("register", JSON.stringify(storage))
    console.log("hello");
});
}
register();


