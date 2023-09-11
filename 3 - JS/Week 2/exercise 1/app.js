numberChecker = () => {
    const userInput = parseInt(prompt("Enter number to check even or odd"))
    console.log(userInput);
    if (userInput % 2 === 0) {
        console.log("Even")
    }
    else {
        console.log("Odd")
    }
}

numberChecker();