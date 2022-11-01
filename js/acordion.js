let acordionE = document.getElementsByClassName('contentBox');

for (let i = 0; i < acordionE.length; i++) {
    acordionE[i].addEventListener("click", function (e) {
        this.classList.toggle("active");
    });
}
