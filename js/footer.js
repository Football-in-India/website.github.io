const abt = document.querySelector(".abt");

function mail(){
    window.open('mailto:footballindia.insta@gmail.com');
}

function about(){
    abt.classList.remove("hide");
    window.scrollTo(0,9999);
}
