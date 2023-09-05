// let number;
// const generate_number = () =>{
//     let n1 = Math.random();
//     let n2 = n1*10;
//     n2 = Math.trunc(n2);
//     number = (n2%10)+1;
//     console.log(number);
// }

// const generate_number_btn_click = () =>{
//     setTimeout(() =>{
//         generate_number();
//         document.querySelector("#section1").style.display = "none";
//         document.querySelector("#section2").style.display = "block";
//     },1000)
// }

// const check_number = () =>{
//     let value = document.querySelector("#field").value;
//     //while(i<3){
//         if(value == number && clickCount <= 3){
//             Swal.fire(
//                 'Congress, You won the game',
//                 'You clicked the button',
//                 'success'
//             );
//             document.querySelector("#section1").style.display = "block";
//             document.querySelector("#section2").style.display = "none";
//             clickCount = 0;
//             //break;
//         } else if(value < number){
//             Swal.fire(
//                 'You guessed too low!',
//                 'You clicked the button',
//                 'error'
//             );
//         } else if(value > number) {
//             Swal.fire(
//                 'You guessed too high!',
//                 'You clicked the button',
//                 'error'
//             );
//         }
//         //i++;
//     //}
//     document.querySelector("#field").value = "";
// }

// const clickCountSpan = document.getElementById('clickCount');
// const countButton = document.getElementById('clkbtn'); 

// let clickCount = 0;

// countButton.addEventListener('click', ()=>{
//     clickCount++;
//     if(clickCount==3 && value !== number){
//             Swal.fire(
//             'Opps!! you loss the game',
//             'You clicked the button',
//             'error'
//         );
//          document.querySelector("#section1").style.display = "block";
//          document.querySelector("#section2").style.display = "none";
//          clickCount = 0;
//     }
//     console.log(clickCount);
// });





let randomNumber;

const generate_number = () =>{
    randomNumber = parseInt((Math.random()*10)+1);
    console.log(randomNumber);
}

const submit = document.querySelector("#clkbtn");
const userInput = document.querySelector("#field");

let numGuesses = 1;
let playGame = true;

const generate_number_btn_click = () =>{

    document.querySelector("#section1").style.display = "none";
    document.querySelector("#section2").style.display = "none";
    document.querySelector("#section3").style.display = "block";
    setTimeout(() =>{
        generate_number();
        document.querySelector("#section1").style.display = "none";
        document.querySelector("#section2").style.display = "block";
        document.querySelector("#section3").style.display = "none";
    },1000)
}

if(playGame){
    submit.addEventListener('click', (e)=>{
        e.preventDefault();
        const guess = parseInt(userInput.value);
        validateGuess(guess);
    });
}

const validateGuess = (guess) =>{
    if(isNaN(guess)){
        Swal.fire(
            'Please enter a valid number'
        )
        document.querySelector("#field").value = "";
    } else{
        
        if(numGuesses === 3 && guess == randomNumber){
            Swal.fire(
                'You guessed correctly!',
                'You Clicked the button',
                'success'
            )
            endGame();
        }
        else if(numGuesses === 3){
            Swal.fire(
                `Game Over! Number was ${randomNumber}`,
                'You clicked the button',
                'error'
            )
            endGame();
        }
        else{
            displayGuesses();
            chackGuess(guess);
        }
    }
}

const chackGuess = (guess)=>{
    if(guess == randomNumber){
        Swal.fire(
            'You guessed correctly!',
            'You Clicked the button',
            'success'
        )
        endGame();
    } else if(guess < randomNumber){
        Swal.fire(
            'Too low! Try again!',
            'You clicked the button',
            'error'
        )
    } else if(guess > randomNumber){
        Swal.fire(
            'Too High! Try again!',
            'You clicked the button',
            'error'
        )
    }
    document.querySelector("#field").value = "";
}

const endGame = () =>{
    document.querySelector("#field").value = "";
    setTimeout(() =>{
        document.querySelector("#section1").style.display = "block";
        document.querySelector("#section2").style.display = "none";
    },2000)
    playGame = false;
    numGuesses = 1;
}

const displayGuesses = () =>{
    numGuesses++;
}
