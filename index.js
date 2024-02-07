let cross=document.querySelector(".cross")
let manu=document.querySelector(".burger")
let side=document.querySelector(".side")
let body=document.querySelector("body")
let main=document.querySelector(".main")

manu.addEventListener("click",()=>{
    side.style.width="350px"
    console.log(body.style)
    if(main.style.width <= "350px")
    {
        manu.style.display="none"
    }

})

cross.addEventListener("click",()=>{
    side.style.width="0px"
     if(main.style.width<="350px")
     {
         manu.style.display="block"
     }

})