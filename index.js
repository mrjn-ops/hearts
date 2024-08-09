const lvbtn = document.getElementById("subject");
const textbtn = document.getElementById("btntext");
const text2 = document.getElementById("text2");
let clickCounter = 0;

const styles = [
    {
        bgColor: "pink",
        btnBgColor: "#c43bb2",
        btnBorderColor: "#b135a1",
        btnBoxShadow: "0 0 15px #b135a1",
        textFillColor: "pink",
        textContent: "YOUR SPECIAL <3",
        textFillColorText2: "blue"
    },
    {
        bgColor: "rgb(109, 24, 24)",
        btnBgColor: "#b75048",
        btnBorderColor: "#9d323d",
        btnBoxShadow: "0 0 15px #9d323d",
        textFillColor: "#8f3840",
        textContent: "YOUR PERFECT!! <3",
        textFillColorText2: "lime"
    },
    {
        bgColor: "#7462d5",
        btnBgColor: "#7462d5",
        btnBorderColor: "#422ead",
        btnBoxShadow: "0 0 15px #422ead",
        textFillColor: "#8373da",
        textContent: "YOUR ONE IN A GAZILLION :O <3",
        textFillColorText2: "black"
    },
    {
        bgColor: "#49b68c",
        btnBgColor: "#49b68c",
        btnBorderColor: "#3f9c79",
        btnBoxShadow: "0 0 15px #3f9c79",
        textFillColor: "#2cb846",
        textContent: "I CANT EXPLAIN HOW BEAUTIFUL YOU ARE <3",
        textFillColorText2: "#BB567C"
    },
    {
        bgColor: "#e4a81b",
        btnBgColor: "#e4a81b",
        btnBorderColor: "#be8c17",
        btnBoxShadow: "0 0 15px #be8c17",
        textFillColor: "#da9710",
        textContent: "IM LUCKY TO HAVE MET YOU <3",
        textFillColorText2: "#115AEE"
    },
    {
        bgColor: "#b125da",
        btnBgColor: "#b125da",
        btnBorderColor: "#9a20bd",
        btnBoxShadow: "0 0 15px #9a20bd",
        textFillColor: "#c152e2",
        textContent: "YOUR JUST TRULY BREATHTAKING! <3",
        textFillColorText2: "#73E252"
    },
    {
        bgColor: "#2e8b57",
        btnBgColor: "#006400",  // Darker shade of green
        btnBorderColor: "#2e8b57",
        btnBoxShadow: "0 0 15px #2e8b57",
        textFillColor: "#2e8b57",
        textContent: "YOU'RE MY EVERYTHING <3",
        textFillColorText2: "#FF4500"
    },
    {
        bgColor: "#ff69b4",
        btnBgColor: "#c71585",  // Darker shade of pink
        btnBorderColor: "#c71585",
        btnBoxShadow: "0 0 15px #c71585",
        textFillColor: "#ff69b4",
        textContent: "MY HEART BELONGS TO YOU <3",
        textFillColorText2: "#9400D3"
    },
    {
        bgColor: "#ff4500",
        btnBgColor: "#cd3700",  // Darker shade of orange-red
        btnBorderColor: "#cd5c5c",
        btnBoxShadow: "0 0 15px #cd5c5c",
        textFillColor: "#ff4500",
        textContent: "YOU'RE MY SUNSHINE <3",
        textFillColorText2: "#00CED1"
    },
    {
        bgColor: "#4682b4",
        btnBgColor: "#4169e1",  // Darker shade of steel blue
        btnBorderColor: "#4169e1",
        btnBoxShadow: "0 0 15px #4169e1",
        textFillColor: "#4682b4",
        textContent: "YOU'RE MY STAR <3",
        textFillColorText2: "#FFD700"
    },
    {
        bgColor: "#32cd32",
        btnBgColor: "#228b22",  // Darker shade of lime green
        btnBorderColor: "#32cd32",
        btnBoxShadow: "0 0 15px #32cd32",
        textFillColor: "#32cd32",
        textContent: "YOU COMPLETE ME <3",
        textFillColorText2: "#FF1493"
    },
    {
        bgColor: "#ffa07a",
        btnBgColor: "#ff6347",  // Darker shade of light salmon
        btnBorderColor: "#ff6347",
        btnBoxShadow: "0 0 15px #ff6347",
        textFillColor: "#ffa07a",
        textContent: "YOU'RE MY ANGEL <3",
        textFillColorText2: "#0000FF"
    },
    {
        bgColor: "#dda0dd",
        btnBgColor: "#ba55d3",  // Darker shade of plum
        btnBorderColor: "#dda0dd",
        btnBoxShadow: "0 0 15px #dda0dd",
        textFillColor: "#dda0dd",
        textContent: "YOU'RE AMAZING <3",
        textFillColorText2: "#FF8C00"
    },
    {
        bgColor: "#ffb6c1",
        btnBgColor: "#ff69b4",  // Darker shade of light pink
        btnBorderColor: "#ffb6c1",
        btnBoxShadow: "0 0 15px #ffb6c1",
        textFillColor: "#ffb6c1",
        textContent: "YOU'RE MY LOVE <3",
        textFillColorText2: "#8A2BE2"
    },
    {
        bgColor: "#87ceeb",
        btnBgColor: "#4682b4",  // Darker shade of sky blue
        btnBorderColor: "#87ceeb",
        btnBoxShadow: "0 0 15px #87ceeb",
        textFillColor: "#87ceeb",
        textContent: "YOU'RE INCREDIBLE <3",
        textFillColorText2: "#FF6347"
    },
    {
        bgColor: "#f08080",
        btnBgColor: "#cd5c5c",  // Darker shade of light coral
        btnBorderColor: "#f08080",
        btnBoxShadow: "0 0 15px #f08080",
        textFillColor: "#f08080",
        textContent: "YOU'RE THE BEST <3",
        textFillColorText2: "#00FF00"
    }
];

function applyStyle(style) {
    document.body.style.backgroundColor = style.bgColor || '';
    lvbtn.style.backgroundColor = style.btnBgColor;
    lvbtn.style.borderColor = style.btnBorderColor;
    lvbtn.style.boxShadow = style.btnBoxShadow;
    textbtn.style.webkitTextFillColor = style.textFillColor;
    text2.textContent = style.textContent;
    text2.style.webkitTextFillColor = style.textFillColorText2;
}

lvbtn.addEventListener('click', () => {
    clickCounter = (clickCounter + 1) % styles.length;
    applyStyle(styles[clickCounter]);
});
