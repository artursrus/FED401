numberGenerator = () =>  {
    return Math.floor(Math.random() * 10 + 1);
}

guessNumber = () => {
    const randomNumber = numberGenerator();
    console.log(randomNumber)

    let userInput = prompt("Please enter random number between 1-10");

    if (userInput > randomNumber) {
        console.log("Too high")
    } 
    else if (userInput < randomNumber) {
        console.log("Too low")
    }
    else {
        console.log("Correct")
    }
}

guessNumber();