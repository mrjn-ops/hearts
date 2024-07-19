const lvbtn = document.getElementById("subject");
const textbtn = document.getElementById("btntext");
const btntext = document.getElementById("textbtn");
const text2 = document.getElementById("text2");
let clickCounter = 0;

function firstFunction() {
    document.body.style.backgroundColor = "pink";
    lvbtn.style.backgroundColor = "#c43bb2";
    lvbtn.style.borderColor = "#b135a1";
    lvbtn.style.boxShadow = "0 0 15px #b135a1";
    document.body.style.backgroundImage = "url('Hearts.jpeg')";
    textbtn.textContent = "♥";
    btntext.textContent = ""
    textbtn.style.webkitTextFillColor = "pink"
    text2.textContent = "YOUR SPECIAL <3"
    text2.style.webkitTextFillColor = "blue"
    
    
}
function secondFunction(){
    document.body.style.backgroundColor = "rgb(109, 24, 24)";
    document.body.style.backgroundImage = "url('hearts2.png')";
    lvbtn.style.backgroundColor = "#b75048"
    lvbtn.style.borderColor = "#9d323d"
    lvbtn.style.boxShadow = "0 0 15px #9d323d";
    textbtn.style.webkitTextFillColor = "#8f3840"
    text2.textContent = "YOUR PERFECT!! <3"
    text2.style.webkitTextFillColor = "lime"
}
function thirdFunction(){
    document.body.style.backgroundImage = "url('hearts3.jpeg')"
    lvbtn.style.backgroundColor = "#7462d5"
    lvbtn.style.borderColor = "#422ead"
    lvbtn.style.boxShadow = "0 0 15px #422ead";
    textbtn.style.webkitTextFillColor = "#8373da"
    text2.textContent = "YOUR ONE IN A GAZILLION :O <3"
    text2.style.webkitTextFillColor = "black"
}
function fourthFunction(){
    document.body.style.backgroundImage = "url('hearts4.jpeg')"
    lvbtn.style.backgroundColor = "#49b68c"
    lvbtn.style.borderColor = "#3f9c79"
    lvbtn.style.boxShadow = "0 0 15px #3f9c79";
    textbtn.style.webkitTextFillColor = "#2cb846"
    text2.textContent = "I CANT EXPLAIN HOW BEAUTIFUL YOU ARE <3"
    text2.style.webkitTextFillColor = "#BB567C"
}
function fifthFunction(){
    document.body.style.backgroundImage = "url('hearts5.png')"
    lvbtn.style.backgroundColor = "#e4a81b"
    lvbtn.style.borderColor = "#be8c17"
    lvbtn.style.boxShadow = "0 0 15px #be8c17";
    textbtn.style.webkitTextFillColor = "#da9710"
    text2.textContent = "IM LUCKY TO HAVE MET YOU <3"
    text2.style.webkitTextFillColor = "#115AEE"
    

}
function sixthFunction(){
    document.body.style.backgroundImage = "url('hearts6.jpeg')"
    lvbtn.style.backgroundColor = "#b125da"
    lvbtn.style.borderColor = "#9a20bd"
    lvbtn.style.boxShadow = "0 0 15px #9a20bd";
    textbtn.style.webkitTextFillColor = "#c152e2"
    text2.textContent = "YOUR JUST TRULY BREATHTAKING! <3"
    text2.style.webkitTextFillColor = "#73E252"
}
lvbtn.addEventListener(`click`, () => {
    clickCounter++;
    if (clickCounter === 1){
        firstFunction();
    } else if (clickCounter === 2){
        secondFunction();
    }else if (clickCounter === 3){
        thirdFunction();
    }else if (clickCounter === 4){
        fourthFunction();
    }else if(clickCounter === 5){
        fifthFunction();
    }else if(clickCounter === 6){
        sixthFunction();
        clickCounter = 0;
    }

})
