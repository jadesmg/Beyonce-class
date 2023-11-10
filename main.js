//quiz - elements needed from HTML
const quizForm = document.getElementById('quiz-form');
const resultDiv = document.getElementById('result');
//correct answers in the order so q1 is a, q2 is c etc.
const correctAnswers = ['a', 'c', 'd', 'c', 'a'];

//event listener for the submit button
quizForm.addEventListener('submit', e => {
  e.preventDefault();
 
//function to add correct answers for a total score
  let score = 0;
  const userAnswers = [quizForm.q1.value,quizForm.q2.value,quizForm.q3.value,quizForm.q4.value,quizForm.q5.value]; 
  userAnswers.forEach((answer, index) => {                                
    if (answer === correctAnswers[index]) {
      score += 1;
    }
  });
  //print out of the final score
  resultDiv.innerHTML = `Your score is ${score}/${correctAnswers.length}`;
});
