import{A as e}from"./main-DkIv9CdE.js";/* empty css                */const s=document.getElementById("signinform"),g=document.getElementById("googleloginbtn");s.addEventListener("submit",n=>{n.preventDefault();const t=document.getElementById("signinemail").value.trim(),o=document.getElementById("signinpassword").value.trim(),{loginUser:i}=e();i(t,o)});g.addEventListener("click",()=>{const{googleLogin:n}=e();n()});
