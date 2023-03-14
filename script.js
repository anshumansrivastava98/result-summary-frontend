import data from "./data.json" assert { type: "json" };

document.getElementById("reaction-icon").src = data[0].icon;
document.getElementById("reaction-title").innerHTML = data[0].category;
document.getElementById("reaction-score").innerHTML = data[0].score;

document.getElementById("memory-icon").src = data[1].icon;
document.getElementById("memory-title").innerHTML = data[1].category;
document.getElementById("memory-score").innerHTML = data[1].score;

document.getElementById("verbal-icon").src = data[2].icon;
document.getElementById("verbal-title").innerHTML = data[2].category;
document.getElementById("verbal-score").innerHTML = data[2].score;

document.getElementById("visual-icon").src = data[3].icon;
document.getElementById("visual-title").innerHTML = data[3].category;
document.getElementById("visual-score").innerHTML = data[3].score;
