//var topLine = //im not sure if i need these variables as between the other ones i can already make a box
//var botLine = //im not sure if i need these variables as between the other ones i can already make a box

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

//ABOVE IS DRAWING THE BOX.
//BELOW IS DRAWING AROUND FUNCTION

//Write a drawBarsAround function that takes a string, surrounds it with vertical lines then returns it.

function drawBarsAround(name) {
    return leftLine + name + rightLine
}

