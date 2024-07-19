const lvbtn = document.getElementById("subject");
const textbtn = document.getElementById("btntext");
const btntext = document.getElementById("textbtn")

lvbtn.onclick = function() {
    document.body.style.backgroundColor = "pink";
    lvbtn.style.backgroundColor = "rgb(197, 108, 182)";
    lvbtn.style.borderColor = "rgb(156, 73, 156)";
    lvbtn.style.boxShadow = "0 0 15px #eb10ff";
    document.body.style.backgroundImage = "url('Hearts.webp')";
    textbtn.textContent = "♥";
    btntext.textContent = ""
    
}
