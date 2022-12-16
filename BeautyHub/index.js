
// let images = document.querySelector("#carousel").querySelectorAll("img");
// i = 0;
// setInterval(() => {
//     if (i == images.length) {
//         i = 0;
//     }
//     document.querySelector("#carousel").append(images[i++])
    
// }, 2000);

function popup(){
    // document.querySelector("body").style.position="absolute"
    document.querySelector(".border").style.display="block"
}
document.querySelector(".order>a").addEventListener("click",fun)
function fun(event){
    event.preventDefault()
    document.querySelector(".border").style.display="none"
}
