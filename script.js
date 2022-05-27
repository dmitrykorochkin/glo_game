'use strict';

//переменная числа 


const number = Math.floor(Math.random() * 100) + 1;
const inNumber = function(num) {
        return !isNaN(parseFloat(num)) && isFinite(num);
    };

const numberGame = function() {

        const bigNumber = function() {
        const numberPrompt = prompt("Угадай число от 0 до 100");
        debugger
            if (numberPrompt === null) {
                alert('Игра окончена');
                return;
            }


            if (inNumber(numberPrompt)) {
                const userNumber  = +numberPrompt;

                if (userNumber > number) {
                    
                    alert('Загадочное число меньше');
                    bigNumber();
                    
                } else if (userNumber < number) {
                    alert('Загадочное число больше');
                    bigNumber();
                } else {
                    if (confirm('Вы угадали: Сыграем еще?')) {
                        bigNumber();
                    } else {
                        alert('Игра окончена');
                        return;
                    }
                }

            } else {
                alert('Введите число');
                bigNumber();
            }
                
                
        }; 

        bigNumber();

};

numberGame();






