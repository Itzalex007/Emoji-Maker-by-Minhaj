var emoji = document.querySelector(".emoji")
var colors = ["#ff0000f7","#f700fff7","#00f3fff7","#ffa6a6","#ffff00f7"]
// var random = getRandomItem(colors)
var eyes = document.querySelector(".eyes")
var eyebrows = document.querySelector(".eyebrows")
var mouth = document.querySelector(".mouth")

var colorBtn = document.querySelector("#color")
var eyebrowBtn = document.querySelector("#eyebrows")
var eyeBtn = document.querySelector("#eyes")
var mouthBtn = document.querySelector("#mouth")


var counter1 = 0;
var counter2 = 0;
var counter3 = 0;
var counter4 = 0;

var totalCount = {

    eyebrowsCount:5,
    eyeCount:4,
    mouthCount:5,
}

colorBtn.addEventListener("click",()=>{

emoji.style.backgroundColor = colors[counter1]
counter1 = counter1 < colors.length - 1 ? counter1 + 1 : 0 ;
// emoji.style.backgroundColor = Math.random()*colors.length
})


eyeBtn.addEventListener("click",()=>{
    eyes.setAttribute("src",`eye-${counter2}.svg`) 
    console.log(`eye-${counter2}.svg`);
    counter2 = counter2 < totalCount.eyeCount - 1 ? 
    counter2 + 1 : 0 ;
})

eyebrowBtn.addEventListener("click",()=>{
    eyebrows.setAttribute("src",`eyebrow-${counter3}.svg`) 
    console.log(`eyebrow-${counter3}.svg`);
    counter3 = counter3 < totalCount.eyebrowsCount - 1 ? 
    counter3 + 1 : 0 ;
})
mouthBtn.addEventListener("click",()=>{
    mouth.setAttribute("src",`mouth-${counter4}.svg`) 
    console.log(`mouth-${counter4}.svg`);
    counter4 = counter4 < totalCount.mouthCount - 1 ? 
    counter4 + 1 : 0 ;
})