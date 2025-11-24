const quiz = [
  {question: "Who is the prime minister of Japan?", answer: "Sanae Takaichi"},
  {question: "Which plant got most moons?", answer: "Saturn"},
  {question: "What is 2 multiplied by 10?", answer: "20"},
  {question: "Closest star to Earth?", answer: "Sun"},
  {question: "Fastest mammal in the world?", answer: "Cheetah"}
];
let score = 0;
function startQuiz() {
  alert("Welcome to the Quiz! Answer the following questions.");
  for (let i = 0; i < quiz.length; i++) {
    let userInput = prompt(quiz[i].question);
    if (userInput === null) {
      alert("You exited the quiz!");
      return;
    }
    userInput = userInput.toLowerCase().trim();

    if (userInput === quiz[i].answer) {
      alert("Correct!");
      score++;
    } else {
      alert("Wrong! The correct answer is: " + quiz[i].answer);
    }
  }
  alert("Quiz Completed!\nYour final score is: " + score + "/" + quiz.length);
}
startQuiz();