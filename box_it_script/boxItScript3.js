
let arr = process.argv.slice(2);

//variables to draw box with
var topLeftCorner = "┏"
var botLeftCorner = "┗"
var topRightCorner = "┓"
var botRightCorner = "┛"
var midLineL = "┣"
var midLineR = "┫"
var line = "━"
var leftLine = "┃"
var rightLine = "┃"
//should be const never gonna change
//defeine with ALLCAPS name
//wrap in object called lines (object.lefcorner) example

//Above are the variables that will be called by functions to create the box.


//Function for a horizontal line 
function drawLine(number) {
    return line.repeat(number)
}
//function for top border - can c+p for middle and bottom also
function drawTopBorder(number) {
    return topLeftCorner + line.repeat(number) + topRightCorner;
}
//middle
function drawMiddleBorder(number) {
    return midLineL + line.repeat(number) + midLineR;
}
//bot
function drawBottomBorder(number) {
    return botLeftCorner + line.repeat(number) + botRightCorner;
}

function drawBarsAround(name) {
    return leftLine + name + ` `.repeat(longest.length - name.length) + rightLine
}

var lgth = 0;
var longest;

for (var i = 0; i < arr.length; i++) {
    if (arr[i].length > lgth) {
        var lgth = arr[i].length;
        longest = arr[i];
    }
}
//
arr.forEach(function (element) {
    console.log(drawTopBorder(longest.length) + `\n` + drawBarsAround(element) + `\n` + drawBottomBorder(longest.length));
});

//THE ABOVE:
//This draws around each element (forEach)
//How would I do: 
//drawTopBorder(longest.length)+`\n`
//drawBarsAround(element)+`\n`+drawMiddleBorder(longest.length)+`\n` for full array except the last element
//drawBottomBorder(longest.length);


//THIS IS IT THIS IS ITTHIS IS IT THIS IS ITTHIS IS IT THIS IS ITTHIS IS IT THIS IS ITTHIS IS IT THIS IS IT
console.log(drawTopBorder(longest.length))// + `\n`)
for (let i = 0; i < arr.length - 1; i++) {
    console.log(drawBarsAround(arr[i]) + `\n` + drawMiddleBorder(longest.length)) //+ `\n`)
}
console.log(drawBarsAround(arr[arr.length - 1]) + `\n` + drawBottomBorder(longest.length));
//The above is the code that wraps each array element in the appropriate characters. Thanks!


//I tried running this through a if/else statement - if (Array.isArray(arr) === true) { DO STUFF} else { topLeftBorder + topRightBorder + `\n` + botLeftCorner + botRightCorner }
//but I would run an error due to things in DO STUFF being undefined. I'm confused becuase shouldn't the block just not run?
//It's 750, I concede. GG
