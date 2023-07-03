var ElBtn = document.querySelector(".header__btn");
ElBtn.addEventListener("click", function ()
 {
    
    if(document.body.style.width < "575px"){
       document.body.classList.toggle ("open");
    }
    else
    {
        document.body.classList.remove("open");
    }
}
)   

