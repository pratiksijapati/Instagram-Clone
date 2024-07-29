document.addEventListener("DOMContentLoaded", function(){
const followbtn=document.querySelectorAll(".top-button button");
followbtn.forEach((button)=>{
    button.addEventListener("click", function(){
        if(button.textContent==="Follow"){
            button.textContent="Following";
            button.style.backgroundColor="black";
            button.style.color="white";

        }
        else if(button.textContent==="Switch"){
            button.textContent="Switch";
        }
        else{
            button.textContent="Follow";
            button.style.backgroundColor='';
            button.style.color='';

        }
    });
})
document.getElementById("hamburger").addEventListener("click", function(){
    var leftbody=document.getElementById("left-body");
    var leftbottom=document.getElementById("left-bottom");
    leftbody.classList.toggle('active');
    leftbottom.classList.toggle('active');

})
})