document.addEventListener("DOMContentLoaded",function(){
    document.getElementsByClassName("bouton")[1].addEventListener("click",function(){
        document.getElementsByClassName("pop-up")[0].classList.add("active");
    });
    document.getElementById("bouton_retour").addEventListener("click",function(){
        document.getElementsByClassName("pop-up")[0].classList.remove("active");
    });

});   
document.getElementsByClassName("bouton1")[0].addEventListener("click",function(){
    console.log("yesssss");
    document.getElementsByClassName("pop-up1")[0].classList.add("active");
});
document.getElementById("bouton_retour1").addEventListener("click",function(){
    document.getElementsByClassName("pop-up1")[0].classList.remove("active");
});