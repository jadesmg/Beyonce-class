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



//latest news - open link via button
function relocate_news1()
{
    window.open("https://www.hollywoodreporter.com/news/general-news/beyonce-premiere-renaissance-concert-film-london-los-angeles-1235628402/", "_blank");
} 

//latest news - open link via button
function relocate_news2()
{
    window.open("https://www.bbc.co.uk/news/uk-wales-67360696", "_blank");
} 


function relocate_news3()
{
    window.open("https://www.bbc.co.uk/news/world-us-canada-67085113", "_blank");
} 

function relocate_news4()
{
    window.open("https://www.harpersbazaar.com/uk/fashion/fashion-news/g43861352/beyonce-renaissance-tour-wardrobe-fashion/", "_blank");
}



//doesnt work - tried other things and didnt manage to solve.
//trying to make it when zoomed in on light box you can sroll on a mobile - not needing to use the arrows.
//alternative is making the arrows visible without hovering but didnt solve that either.
lightbox.option ({
    alwaysShowNavOnTouchDevices: true
});
