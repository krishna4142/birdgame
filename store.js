 // Import the functions you need from the SDKs you need
 import { initializeApp } 
 from "https://www.gstatic.com/firebasejs/10.12.1/firebase-app.js";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries
 
 // Your web app's Firebase configuration
 const firebaseConfig = {
   apiKey: "AIzaSyCGZ-f_QtC9xauWDrrTOcLc7KzqLqGG9cE",
   authDomain: "gamezone-7258b.firebaseapp.com",
   databaseURL: "https://gamezone-7258b-default-rtdb.asia-southeast1.firebasedatabase.app",
   projectId: "gamezone-7258b",
   storageBucket: "gamezone-7258b.appspot.com",
   messagingSenderId: "291670383021",
   appId: "1:291670383021:web:1d4d5b4c71794535de2924"
 };
 
 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 
 import{getDatabase,set,get,ref,child}
 from "https://www.gstatic.com/firebasejs/10.12.1/firebase-database.js";
 let db=getDatabase();
 let enter_name=document.querySelector("#name");
 let F_name=document.querySelector("#F_name");
 let email=document.querySelector("#email")
 let dob=document.querySelector("#dob")
 let phone=document.querySelector("#phone")
 let address=document.querySelector("#ADDRESS");
 
 let btn1=document.querySelector(".btn1");
 let n_btn2=document.querySelector(".bthn2")

 let v_number=document.querySelector("#v_number");
 let v_email=document.querySelector("#v_email");
 function Insertdata(){
   set(ref(db,"userdata/"+ phone.value),{
       Name:enter_name.value,
       EMAIL:email.value,
       DOB:dob.value,
       PH:phone.value,
       ADDRESS:address.value
   })
   .then(msg=>{
       if(msg==="OK"){
           alert("data added successfully")
       }
       else{
         alert("data added successfully")
       }
   })
   .catch((error)=>{
       alert(error)
   })
 }
 function verifyData(){
 let dbref= ref(db);
 get(child(dbref,"userdata/"+v_number.value))
 .then((snapshot)=>{
  if(snapshot.exists()){
    if(snapshot.val().EMAIL == v_email.value){
      alert(`WELL COME TO ............. ${snapshot.val().Name}`)
      let con=confirm("DO YOU WANT PLAY THE GAME");
      if(con == true){
        body.classList.add("opengame")
      }
      else{
        alert("OK BYE ...........")
      }
    }
    else{
      alert("enter valid data")
    }
   }
  else{
    alert("enter valid data")
  }
  console.log(v_number)
 })
 .catch((error)=>{
  alert(error)
})
 }
 
let body=document.querySelector(".body")
let login=document.querySelector(".v_login");
let signup=document.querySelector(".v_signup");
let log=document.querySelector(".log");
log.addEventListener("click",()=>{
  body.classList.remove("open")
})
signup.addEventListener("click",()=>{
  body.classList.add("open")
})

btn1.addEventListener("click",Insertdata);
 login.addEventListener("click",verifyData);