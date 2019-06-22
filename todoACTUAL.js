//Todo(LOL)
//the homework. do it. X
//okay I really need ot look up .createinterface stuff X
//Turn if statements into switches because I like them better
//make views prettier
//if i enter in an invalid item to delete it erros out - why?
//clear all unproffesinal comments
//















//welcome message
const readline = require(`readline`);


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const toDoStuff = [];

const welcome = () => {
    console.log(`\nWELCOME!!\n┎┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┒\n| Today's Stuff ToDo :|\n┕┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┙\n`);
    main();
}




















//main menu
const main = () => {


    rl.question(
        `(v) View ┅┅┅ (n) New ┅┅┅ (cX) Complete ┅┅┅ (dX) Delete ┅┅┅ (q) Quit \n`,



        function (choice) {
            if (choice === `v`) {
                view();
            } else if (choice === `n`) {
                add();
            } else if (choice.includes("c")) {
                complete(choice);
            } else if (choice.includes('d')) {
                deleteItem(choice);
            } else if (choice === 'q') {
                console.log('\nFarewell.\n');
                rl.close();
            } else {
                console.log('\n That boy aint right.')//unproffessional 
                console.log('\n Invalid choice\n\n')
                main();
            }
        }
    )
}










//what does add do
const add = () => {
    rl.question(
        `\n What're we doing today \n`,
        function (choice) {
            toDoStuff.push({
                task: choice,
                status: `0`
            });
            main();
        }
    )
}






//views do
const view = () => {
    if (toDoStuff.length > 0) {
        console.log("");
        for (let key in toDoStuff) {
            console.log(key, toDoStuff[key].task, toDoStuff[key].status);
        }
    } else {
        console.log('\n There is noting added yet...\n\n');
    }
    main();
}









//elete does

const deleteItem = (choice) => {
    if (toDoStuff.length > 0) {
        taskIndex = parseInt(choice.charAt(1));
        console.log(`${JSON.stringify(toDoStuff[taskIndex].task)} was removed.\n`)
        toDoStuff.splice(taskIndex, 1);
    } else {
        console.log("\n There is nothing here...\n");
    }
    main();
}

// const deleteItem = (choice) => {
//     if (toDoStuff.length > 0 && choice < (toDoStuff.length+1)) {
//         taskIndex = parseInt(choice.charAt(1));
//         console.log(`${JSON.stringify(toDoStuff[taskIndex].task)} was removed.\n`)
//         toDoStuff.splice(taskIndex, 1);
//     } else {
//         console.log("\n There is nothing here...\n");
//     }
//     main();
// }









//what does complete do
const complete = (choice) => {
    if (toDoStuff.length > 0) {
        taskIndex = parseInt(choice.charAt(1));
        toDoStuff[taskIndex].status = `X`
    }
    main();

}



//start
welcome();

