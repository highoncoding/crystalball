let answers = [
    'Да!',
    'Нет!',
    'Ну хз...',
    'Чем раньше, тем лучше.',
    'Скорее нет, чем да.',
    'Скорее да, чем нет.',
    'Может быть, когда-нибудь...',
    'Оно того не стоит.',
    'Да, но придется подождать.',
    'Если постараешься.',
    'Как карта ляжет.',
    'Разумеется.',
    'Это бессмысленно.',
    '[Связь с космосом прервалась]',
    'Это бессмысленно.',
    'Лучше забить'
    
    
];
function getRandomAnswer(answers) {
  let randomYassNope = Math.floor(Math.random() * answers.length);
  return answers[randomYassNope];
}
let futurebox = document.querySelector('.future');

futurebox.addEventListener('click', function() {
    //futurebox.classList.add('shake');
    let randomAnswer = getRandomAnswer(answers);
    /*textbox.textContent = randomAnswer;*/
    let textbox = document.querySelector('.textbox');
    smoothly(textbox,'textContent',randomAnswer);
  

    if (randomAnswer.length > 18) {
        textbox.style.fontSize = '15px';
      } else {
        textbox.style.fontSize = '25px';
      }

});
