var butt =document.querySelector("button");
var isPurple = false;

// butt.addEventListener("click", function(){
//     if(isPurple){
//         document.body.style.background="white";
//     } else{
//         document.body.style.background="purple";
//     }
//     isPurple = !isPurple

// });

butt.addEventListener("click",function(){
    document.body.classList.toggle("pinkback");
});