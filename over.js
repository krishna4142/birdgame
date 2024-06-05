let level=document.querySelector(".scroe")
let total;
window.addEventListener("animationiteration",()=>{
    let hole=document.querySelector(".hole")
    let a=Math.floor(Math.random()*50);
    hole.style.top=`${a}%`
    scroe++;
     total=scroe/2
    level.innerText=total
     
})

let child=document.querySelector(".child1");
let val=5;

function UP(){
    val+=5;
    if(val>80){
        val=80;
    }
}
function DOWN(){
    val-=5;
    if(val<5){
        val=5;
    }
}
// let level=document.querySelector(".scroe")
let scroe=0;
let over=setInterval(()=>{
    let phole=document.querySelector(".phole").getBoundingClientRect();
    let phole_left=Math.floor(phole.left);
    let phole_right=Math.floor(phole.right);

    let hole=document.querySelector(".hole").getBoundingClientRect();
    let hole_top=Math.floor(hole.top);
    let hole_bottm=Math.floor(hole.bottom);
    let hole_left=Math.floor(hole.left);
    let hole_right=Math.floor(hole.right)

    let bird=document.querySelector(".bird").getBoundingClientRect();
    let bird_top=Math.floor(bird.top);
    let bird_bottm=Math.floor(bird.bottom);
    let bird_left=Math.floor(bird.left);
    let bird_right=Math.floor(bird.right)

    if(((bird_right>phole_left&&bird_right<phole_right)||(bird_left>phole_left&&bird_left<phole_right))&&((bird_top<hole_top)||(bird_bottm>hole_bottm))){
        let a=alert("game over")
        clearInterval(over);
        total_score.innerText=`Your Score is ${total}`
        body1.style.animation="none"
        phole1.style.animation="none"
        body1.classList.add("one");
     }
    child.style.top=`${val}%`
 })

let body1=document.querySelector(".body")
let phole1=document.querySelector(".phole")
let total_score=document.querySelector(".val")
