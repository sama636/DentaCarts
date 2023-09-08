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