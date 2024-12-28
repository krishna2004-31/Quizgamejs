const quizQuestion=[
    {
    question:"What does 'var' declare in JavaScript?",
    answers: [
    {Option:"A. Value",correct:false},
    {Option:"B. Variable",correct:true},
    {Option:"C. Function",correct:false},
    {Option:"D. None Of Above",correct:false},
    ]
    },
    {
    question:"Which method is used to parse a string as a number?",
    answers: [
    {Option:"A. parseFloat()",correct:false},
    {Option:"B. parseInt()",correct:true},
    {Option:"C. toString()",correct:false},
    {Option:"D. None Of Above",correct:false},
    ]
    },
    {
    question:"Which of the following is used to create an object in JavaScript?",
    answers: [
    {Option:"A. {}",correct:true},
    {Option:"B. []",correct:false},
    {Option:"C. ()",correct:false},
    {Option:"D. <>",correct:false},
    ]
    },
    {
    question:"What does 'NaN' stand for in JavaScript?",
    answers: [
    {Option:"A. Number a Not",correct:false},
    {Option:"B. Number Add Number",correct:false},
    {Option:"C. None of the Above",correct:false},
    {Option:"D. Not a Number",correct:true},
    ]
    },
    {
    question:"What is the output of console.log('10' - 2)?",
    answers: [
    {Option:"A. 102",correct:false},
    {Option:"B. 8",correct:true},
    {Option:"C. 10-2",correct:false},
    {Option:"D. NAN",correct:false},
    ]
    },
    {
    question:"Which of these statements is used to skip the current iteration in a loop?",
    answers: [
    {Option:"A. Break",correct:true},
    {Option:"B. continue",correct:false},
    {Option:"C. Exit",correct:false},
    {Option:"D. Stop",correct:false},
    ]
    },
    {
    question:"Which keyword is used to exit a loop early?",
    answers: [
    {Option:"A. Break",correct:false},
    {Option:"B. continue",correct:true},
    {Option:"C. Exit",correct:false},
    {Option:"D. None Of Above",correct:false},
    ]
    },
    {
    question:"What will the following code output? for(let i=0; i<3; i++) { if(i === 1) { continue; } console.log(i); }",
    answers: [
    {Option:"A. 3",correct:false},
    {Option:"B. 2 3",correct:false},
    {Option:"C. 0 1 2 3",correct:false},
    {Option:"D. 0 2",correct:true},
    ]
    },
    {
    question:"Which method is used to combine two or more arrays in JavaScript?",
    answers: [
    {Option:"A. +",correct:false},
    {Option:"B. Concat()",correct:true},
    {Option:"C. Combine()",correct:false},
    {Option:"D. Merge()",correct:false},
    ]
    },
    {
    question:"Which of the following is used to compare both value and type in JavaScript?",
    answers: [
    {Option:"A. ===",correct:true},
    {Option:"B. !=",correct:false},
    {Option:"C. ==",correct:false},
    {Option:"D. >=",correct:false},
    ]
    },
    {
    question:"Which of the following is a primitive data type in JavaScript?",
    answers: [
    {Option:"A. Array",correct:false},
    {Option:"B. Object",correct:false},
    {Option:"C. String",correct:true},
    {Option:"D. Value",correct:false},
    ]
    },
    {
    question:"What will the following code output? for(let i=0; i<5; i++) { if(i === 4) { continue; } console.log(i); }",
    answers: [
    {Option:"A. 1 2 3 4",correct:false},
    {Option:"B. 0 1 2 3",correct:true},
    {Option:"C. 0 1 2 3 4",correct:false},
    {Option:"D. 4",correct:false},
    ]
    },
    {
    question:"Which of the following is true about the while loop in JavaScript?",
    answers: [
    {Option:"A. The condition is checked before each iteration",correct:true},
    {Option:"B. The loop always runs once",correct:false},
    {Option:"C. The loop only runs when the condition is false",correct:false},
    {Option:"D. All Of Above",correct:false},
    ]
    },
    {
    question:"Which loop will always execute at least once, even if the condition is false?",
    answers: [
    {Option:"A. Loop",correct:false},
    {Option:"B. While",correct:false},
    {Option:"C. Do While",correct:true},
    {Option:"D. None Of Above",correct:false},
    ]
    },
    {
    question:"What will the following code output? let i = 0; while(i < 3) { if(i === 2) { break; } console.log(i); i++; }",
    answers: [
    {Option:"A. 1 2",correct:false},
    {Option:"B. 0 2",correct:false},
    {Option:"C. 0 1 2",correct:false},
    {Option:"D. 0 1",correct:true},
    ]
    },
    {
    question:"What does the break statement do inside a loop?",
    answers: [
    {Option:"A. Exit the loop",correct:true},
    {Option:"B. Continue to the next iteration",correct:false},
    {Option:"C. Nothing",correct:false},
    {Option:"D. Skip the current iteration",correct:false},
    ]
    },
    {
    question:"What will the following code output? for(let i=0; i<3; i++) { if(i === 1) { break; } console.log(i); }",
    answers: [
    {Option:"A. 0",correct:false},
    {Option:"B. 0 1 2",correct:false},
    {Option:"C. 0 1 ",correct:true},
    {Option:"D. 0 2",correct:false},
    ]
    },
    {
    question:"What does the continue statement do in a loop?",
    answers: [
    {Option:"A. Ends the loop",correct:false},
    {Option:"B. Skips the current iteration",correct:true},
    {Option:"C. Stops the loop",correct:false},
    {Option:"D. Start a new loop",correct:false},
    ]
    },
    {
    question:"What does the break statement do in a loop?",
    answers: [
    {Option:"A. Exits the loop",correct:true},
    {Option:"B. Continues to the next iteration",correct:false},
    {Option:"C. Pauses the loop",correct:false},
    {Option:"D. None Of Above",correct:false},
    ]
    },
    {
    question:"Which keyword is used to define a constant in JavaScript?",
    answers: [
    {Option:"A. Let",correct:false},
    {Option:"B. Var",correct:false},
    {Option:"C. Const",correct:true},
    {Option:"D. Prompt",correct:false},
    ]
    }
];
const questionElement = document.getElementById("qus");
const ansBtn = document.getElementById("ans-btn");
const nextBtn = document.getElementById("next-btn");

let currentIndex = 0; 
let score = 0;

function start() {
  currentIndex = 0;
  score = 0;
  nextBtn.innerHTML = "Next";
  start2();
}

function start2() {
  clearStart();
  const current = quizQuestion[currentIndex];
  const questionNo = currentIndex + 1;
  questionElement.innerHTML = questionNo + ". " + current.question;

  current.answers.forEach((answer) => {
    const answerElement = document.createElement("button");
    answerElement.innerHTML = answer.Option;
    answerElement.classList.add("btn");
    answerElement.dataset.correct = answer.correct; 
    ansBtn.appendChild(answerElement);

    answerElement.addEventListener("click", selectAnswer);
  });
}

function clearStart() {
  nextBtn.style.display = "none";
  while (ansBtn.firstChild) {
    ansBtn.removeChild(ansBtn.firstChild);
  }
}

function selectAnswer(e) {
  const selected = e.target;
  const isCorrect = selected.dataset.correct === "true";

  if (!selected.classList.contains("correct") && !selected.classList.contains("incorrect")) {
    if (isCorrect) {
      selected.classList.add("correct");
      score++;
    } else {
      selected.classList.add("incorrect");
      Array.from(ansBtn.children).forEach(answerElement => {
        if (answerElement.dataset.correct === "true") {
          answerElement.classList.add("correct"); 
        }
      });
    }

    Array.from(ansBtn.children).forEach(answerElement => answerElement.disabled = true);
  }

  nextBtn.style.display = "block";
}

function scorefun() {
  clearStart();
  questionElement.innerHTML = `You Scored ${score} out of ${quizQuestion.length}!`;
  nextBtn.innerHTML = "Play Again";
  nextBtn.style.display = "block";
}

function newfun() {
  currentIndex++; 
  if (currentIndex < quizQuestion.length) {
    start2();
  } else {
    scorefun();
  }
}

nextBtn.addEventListener("click", () => {
  if (currentIndex < quizQuestion.length) {
    newfun();
  } else {
    start(); 
  }
});

start();

