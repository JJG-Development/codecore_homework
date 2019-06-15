//Why in right() did a if statement not work vs a switch statement?
//how come my switch statement in right() and left()didn't need breaks?
//My code sometimes works, and sometimes doesn't. i can't really figure out why. is it when the drawn line overlaps with itself?
//eg this fails: new turtle(0,0).forward(5).left().forward(3).left().forward(1).right().forward(4).print();


const array = Array.from({
    length: 20
}, () => Array.from({
    length: 20
}, () => ' '));
let grid = array

class turtle {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.facing = 'East';
        this.arrayTwo = []
    }






    //GO FORWARD BOII - If South, negative y. If West, negative X. North is y+ East is X+
    forward(numSteps) {
        if (this.facing == 'East') {
            for (let i = 0; i < numSteps; i++) {
                grid[this.x][this.y] = '0';
                this.y++;
                this.arrayTwo.push([this.x, this.y]);
            }
        } else if (this.facing == 'South') {
            for (let i = 0; i < numSteps; i++) {
                grid[this.x][this.y] = '0';
                this.x++;
                this.arrayTwo.push([this.x, this.y]);
            }
        } else if (this.facing == 'West') {
            for (let i = 0; i < numSteps; i++) {
                grid[this.x][this.y] = '0';
                this.y--;
                this.arrayTwo.push([this.x, this.y]);
            }
        } else if (this.facing == 'North') { //if??? why not just else?????
            for (let i = 0; i < numSteps; i++) {
                grid[this.x][this.y] = '0';
                this.x--;
                this.arrayTwo.push([this.x, this.y]);
            }
        }
        return this;
    };






    //IF DIRECTION+right, N-> East, East-> South, South -> West, West-> North
    right() { //why does a switch work but an if seems iffy and way more complicated? so weird. Is using a switch vs and if just preference? because it didn't seem to work for me here (I must have done it wrong)
        switch (this.facing) {
            case 'East':
                this.facing = 'South';
                return this
            //break?????????
            case 'North':
                this.facing = 'East';
                return this;
            //break????
            case 'West':
                this.facing = 'North';
                return this;
            //break????
            case 'South':
                this.facing = 'West'
                return this;
            //BREAKBREKABRKEABRKEABKARE
        }
    };





    //NOW FOR LEFT, REVERSED!
    left() {
        switch (this.facing) {
            case 'East':
                this.facing = 'North';
                return this;
            //brkeak???
            case 'North':
                this.facing = 'West';
                return this;
            //NOBREAK?
            case 'West':
                this.facing = 'South';
                //break??
                return this;
            case 'South':
                this.facing = 'East';
                return this;
        }
    };










    //OH MY GOD DOES THIS WORK AHAYAHAHHAHAHAHAHHAHAHAHHA YESSS
    print() {
        let minY = 0
        let maxY = 0
        let minX = 0
        let maxX = 0
        for (let i = 0; i < this.arrayTwo.length; i++) {
            let [x, y] = this.arrayTwo[i];
            if (x < minX) {
                minX = x
            } else if (x > maxX) {
                maxX = x
            }
            if (y < minY) {
                minY = y
            } else if (y > maxY) {
                maxY = y
            }
        }
        let height = maxX + (minX)
        let width = maxY + (minY)
        let offset = 0
        if (minY < 0) {
            offset = (minY)
            if (minX < minY) {
                offset = (minX)
            }

        }
        let show = Array.from({
            length: height + 1
        }, () => Array.from({
            length: width + 1
        }, () => ' '));


        for (let i = 0; i < this.arrayTwo.length; i++) {
            let [x, y] = this.arrayTwo[i];

            show[x + offset][y + offset] = "X"
        }






        console.log(show.map(line => line.join("-")).join("\n"));//THIS MAKES 


    }


    allPoints() {
        return console.log(this.arrayTwo)
    };

};

// new turtle(0,0).forward(5).left().forward(3).left().forward(1).right().forward(4).print();
new turtle(0, 0)
    .forward(5)
    .right()
    .forward(5)
    .right()
    .forward(5)
    .right()
    .forward(5)
    .print()
