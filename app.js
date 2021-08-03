const contents = document.querySelectorAll(".content");

window.addEventListener("scroll", ()=>{
    for (i = 0; i < contents.length; i++) {
        const contentBottomPosition = contents[i].getBoundingClientRect().bottom;
        const screenPosition = window.innerHeight;

        if (contentBottomPosition<screenPosition) {
            contents[i].classList.add("active");
        } else {
            contents[i].classList.remove("active");
        }
    }
    
})