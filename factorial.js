const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function mainMenu(){

    console.log("Factorial Application");

    console.log ("1. Say hello ");
    console.log ("2. Compute Factorial ");
    console.log ("3. Exit ");

rl.question("Enter your choice (1-3)",choice=> {

    if (choice==="1"){
        console.log("Hello there");
        backToMenu();
    }else if (choice==="2"){
        computeFactorial();
        backToMenu();
    }else if (choice==="3"){
        Console.log("Exiting program... Goodbye");
        rl.close();
        
    }else{
        console.log("Invalid choice. please try again");
        mainMenu();
    }

});

}

function computeFactorial() {
        rl.question("Enter a number for fatorial: ",(numStr) => {
            let num = parseInt(numStr);

            if (isNaN(num) || num < 0) {
                console.log("Please enter a non-negative ionteger");
            }else{

                let fact = 1;

                    for(let i = 1; i <= num; i++){
                        fact *= i;
                    }
                    console.log("The factorial of " + num + " is " + fact);
            }
            
            
            backToMenu();
            
        });

}

    function backToMenu(){
        rl.question("---------");
        console.log("1. back to menu");
        console.log("2. Exit");

            rl.question("What would you like to do next (1-2) : ", (backToMenuChoice) => {
                if (backToMenuChoice === "1") {
                    mainMenu();
                }else if (backToMenuChoice === "2"){
                    console.log("Exiting program... Goodbye!")
                    rl.close();
                }else{
                    console.log("Invalid Choice. Please try again");
                    backToMenu();
                }
            });
    }
mainMenu();
        
    