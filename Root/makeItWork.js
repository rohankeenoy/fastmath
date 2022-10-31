window.onload = equations;
var sum;
var correct=0, incorrect=0;


function equations(){
    var a,b,sum;
    //assign random values to a,b
    a = Math.floor(Math.random() * 10) + 1;
    b = Math.floor(Math.random() * 10) + 1;
    //array that holds values, MUST BE MUTUABLE
    solve = [a+b , a-b ,a /b ,a *b ];
    signs = ['+', '-','÷','x'];
    //assign random opperation
    let randoArr = Math.floor(Math.random()*solve.length)
    sum=solve[randoArr];
    showSign=signs[randoArr];
    //show in html
    document.getElementById('showMath').innerHTML = a + showSign + b;
    //This will be used to reassign the value to global variable
                 window.sum = sum;
                 console.log(sum);
    return(sum)
};
// Function checks if user Input is correct and then adds tallies to the table.
// The tables values are held in correct and incorrect and incremented based on the conditional statement.
function confirmIfRight(){
    var userInput = document.getElementById('userInput').value;
    const correctEl = document.getElementById('correctCount');
    const incorrectEl= document.getElementById('incorrectCount');
    //sum = equations();
    if (userInput == sum) {
        correct++;
        correctEl.textContent = correct;
        equations();
    } else {
        incorrect++;
        incorrectEl.textContent = incorrect;
        equations();
    }
    clearTextBox();
}
//This function is used to clear the textbox
function clearTextBox() {
    document.getElementById('userInput').value = "";
}



