function generateRandom(min,max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    
    return Math.floor(Math.random() * (1 + max - min) + min);
    
    document.getElementById("state-range").innerHTML = Text;
}
console.log (generateRandom(0,100));




