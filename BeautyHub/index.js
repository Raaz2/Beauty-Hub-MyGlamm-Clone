
function popup(){
    // document.querySelector("body").style.position="absolute"
    document.querySelector(".border").style.display="block"
}

document.querySelector("#signin").addEventListener("click",signin)
function signin(event){
    event.preventDefault()
    let mob=document.querySelector("#mob").value;
    window.location.href="./signupnext.html"
    localStorage.setItem("mobile",mob)
}
