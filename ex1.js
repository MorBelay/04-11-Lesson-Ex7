
// מגישי טכנטאים: בלייב מור וחיים אשרף 50/5

// Task 7

const fs = require('fs');
const path = require('path');

const files = ['a1.txt', 'a2.txt', 'a3.txt'];

let allLines = [];

// קריאת התוכן מכל שלושת הקבצים ושמירת השורות במערך
for (let i = 0; i < files.length; i++) {
  const text = fs.readFileSync(path.join(__dirname, 'Texts', files[i]), 'utf-8');
  const arr = text.split(/\r?\n/);

  if (arr[arr.length - 1] === '') {
    arr.pop();
  }

  allLines.push(arr);
}

let positions = [0, 0, 0];
let textOut = '';
let count = 1;
let finished = false;

// העתקת שורות מכל קובץ לפי מספר הסבב
while (finished === false) {
  finished = true;

  // מעבר על שלושת הקבצים
  for (let i = 0; i < files.length; i++) {

    // העתקת מספר השורות המתאים לסבב הנוכחי
    for (let j = 0; j < count; j++) {
      if (positions[i] < allLines[i].length) {
        textOut += allLines[i][positions[i]] + '\n';
        positions[i]++;
        finished = false;
      }
    }
  }

  count++;
}

// כתיבת כל השורות שהועתקו לקובץ התוצאה
fs.writeFileSync(path.join(__dirname, 'result.txt'), textOut);
