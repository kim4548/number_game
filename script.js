          // q1. 1~100까지 랜덤한 숫자 (정수)를 변환하는 변수 randomNumber 를 선언하고 초기화 하기
          let randomNumber = Math.floor(Math.random() * 100) + 1;
          // DOM 요소 5가지를 선택해서 변수로 선언해주세요 .QUESSSE,lastResult,guessSubmit,
          // guessField
          const guesses = document.querySelector('.guesses');
          const lastResult = document.querySelector('.lastResult');
          const guessSubmit = document.querySelector('.guessSubmit');
          const guessField = document.querySelector('.guessField');
          const lowOrHi = document.querySelector('.lowOrHi');
          // q3. 변수 2가지를 선언해주세요 quesscount 초기값 1, restButton 선언만
          let quesscount = 1;
          let restButton;
          
          // q4 올바른 번호인지 확인하는 함수를 만들기
          function checkGuesses(event) {
             event.preventDefault();
          
            const userGuess = Number(guessField.value);
            if (randomNumber === userGuess) {
              lastResult.textContent = "축하합니다! 맞추셨어요~!~!~!~!";
              // 게임이 끝나는 로직
              setGameOver();
              // 생성한 DOM 요소의 텍스트 컨텐츠를 "새 게임하기"로 변경합니다
          
            } else if (quesscount === 10){
              lastResult.textContent= "게임 오버!! 10회를 모두 사용하셨습니다.";
              setGameOver();
             } else {
              lastResult.textContent="틀렸어요!"
              // 유저가 추측한 것이 우리의 랜덤 숫자보다 낮을 때 
              if (userGuess < randomNumber) {
                lowOrHi.textContent="추측한 숫자가 높습니다"
          
                // 유저가 추측한 것이 우리의 랜덤 숫자보다 낮을 때 
              } else if(userGuess>randomNumber){
                lowOrHi.textContent="추측한 숫자가 낮습니다"
              }
            }
            //quesscount를 1증가 해준다
            quesscount++;
            guessField.value=''; 
          }
           function setGameOver(){
            guessField.disabled = true;
              guessSubmit.disabled = true;
              resetButton = document.createElement('button');
              resetButton.textContent = "새 게임하기";
              // 만든 DOM 버튼을 body 태그 안에 추가합니다
              document.body.appendChild(resetButton);
              document.body.appendChild(resetButton);
              // q4 resetButton 을 click 했을때 새 게임이 되게하는 리스너를 추가해주세요
              // 새게임 함수의 이름은 resetGame 
          
           
                resetButton.addEventListener('click','resetGame');  
            
           
              }
              function resetGame(){
                guesscount=1;
                guessField.disabled= false;
                guessField.disabled=false;
                restButton.parentNode.removerChild(restButton);
                let randomNumber = Math.floor(Math.random() * 100) + 1;
           }
          // 이벤트 리스너 만들기
          guessSubmit.addEventListener('click', checkGuesses);