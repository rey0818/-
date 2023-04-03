const blanks = [
    { index: 0, answer: 'familiar' },
    { index: 1, answer: 'honored' },
    { index: 2, answer: 'device' },
    { index: 3, answer: 'removable' },
    { index: 4, answer: 'known as' },
    { index: 5, answer: 'historical'},
    { index: 6, answer: 'associated with' },
    { index: 7, answer: 'twisted into ' },
    { index: 8, answer: 'symbol' },
    { index: 9, answer: 'protest' },
  ];
  let currentinput = 0 ; 
  function findblank(){
    const ck = true;
    for(let i=0;i<blanks.length;i++){
        const check = document.getElementById(`blank-${i}`);
        if(check.value.length === 0) {currentinput = i; ck = false; break;}
    }
    if(ck) checkAnswers();
  }
  document.querySelectorAll('input[type="text"]').forEach((input, index) => {
    input.addEventListener('focus', () => {
      currentinput = index;
    });
  });
  
  function fillBlank(n){
    const input = document.getElementById(`blank-${currentinput}`);
    input.value = n; 
    findblank();
    if(currentinput>=blanks.length-1) checkAnswers();
   
  }
  function checkAnswers() {
    let allCorrect = true;
    for (let i = 0; i < blanks.length; i++) {
      const input = document.getElementById(`blank-${blanks[i].index}`);
      const answer = blanks[i].answer.toLowerCase();
      const userInput = input.value.toLowerCase();
      if (userInput === answer) {
        input.classList.add('correct');
        input.classList.remove('incorrect');
      } else {
        input.classList.add('incorrect');
        input.classList.add('correct');
        allCorrect = false;
      }
    }
}
  