const d = document, 
w = window;

d.addEventListener('DOMContentLoaded', e=>{
    scrollButton('.scroll-top-btn');
});

function scrollButton(btn) {
    const $scrollBtn = d.querySelector(btn);
    w.addEventListener('scroll', e =>{
        let scrollTop = w.pageYOffset || d.documentElement.scrollTop;

        if (scrollTop > 600) {
           $scrollBtn.classList.remove("hidden");
        }else{
           $scrollBtn.classList.add("hidden");
        }
        // console.log(w.pageYOffset, d.documentElement.scrollTop);
    });
    d.addEventListener('click', e=>{
        if (e.target.matches(btn)) {
            w.scrollTo({
              behavior: "smooth",
              top: 0,  
            });
    }});

}

