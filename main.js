let userName = 'Karina';
const userQuestion = 'Magic 8 Ball will I finish learning JavaScript this month?';
let randomNumber = Math.floor(Math.random() * 8);
let eightBall = '';

switch (randomNumber) {
  case 0:
    eightBall = 'It is certain';
    break;
  case 1:
    eightBall = 'It is decidedly so';
    break;
  case 2:
    eightBall = 'Reply hazy try again';
    break;
  case 3:
    eightBall = 'Cannot predict now';
    break;
  case 4:
    eightBall = 'Do not count on it';
    break;
  case 5:
    eightBall = 'My sources say no';
    break;
  case 6:
    eightBall = 'Outlook not so good';
    break;
  case 7:
    eightBall = 'Signs point to yes';
    break;
}


(userName === 'Karina') ? console.log(`Hello, ${userName}`)
: console.log('Hello!');

console.log(`${userName} asked ${userQuestion}`);

console.log(eightBall);

