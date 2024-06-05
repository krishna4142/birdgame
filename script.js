
let body=document.querySelector(".body");
body.style.width=`${window.innerWidth}px`
body.style.height=`${window.innerHeight}px`

let image=document.querySelector(".image");

image.src="bird.png"
let menu_bar=document.querySelector(".menu_bar");
let menu=document.querySelector(".menu");
let child2=document.querySelector(".child2");
// window.addEventListener("click",start)
let a="open"
let b="open"
 function start(){
    if(a=="open" ){
    menu.classList.add("openmenu")
    console.log("sI KEIAJM")
    a="close"
    }
    else{
        if(a=="close"){
            menu.classList.remove("openmenu")
            a="open"
        }
    }
    console.log("sai")
 }

 function start_set(){
    if(b=="open"){
        menu.classList.add("opensetting")
        console.log("sI KEIAJM")
        b="close"
        }
        else{
            if(b=="close"){
                menu.classList.remove("opensetting")
                b="open"
            }
        }
 }
  
  function verificatioBTN(){
      body.classList.add("openverify")  
  }
