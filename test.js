// JavaScript: 字串反轉
function reverseString(str) {
  return str.split("").reverse().join("");
}

console.log(reverseString("Hello")); // 預期輸出: "olleH”

// JavaScript: 陣列過濾
// 問題：寫一個JavaScript函式，接受一個數字陣列，並返回該陣列中所有大於5的數字。
function filterNumbersGreaterThanFive(numbers) {
  let result = numbers.filter((num) => num > 5);
  return result;
}

const numbers = [2, 8, 4, 10, 1, 7];
console.log(filterNumbersGreaterThanFive(numbers)); // 預期輸出: [8, 10, 7]

// JavaScript: 重構
/**問題：重構這段程式碼並說明原因

function formatName(firstName, lastName) {
  let formattedName = '';

  if (firstName) {
    formattedName += firstName;
  }

  if (lastName) {
    formattedName += ' ' + lastName;
  }

  return formattedName;
}
 */

function formatName(firstName, lastName) {
  const nameParts = [];

  if (firstName) {
    nameParts.push(firstName);
  }

  if (lastName) {
    nameParts.push(lastName);
  }

  return nameParts.join(" ");
}

console.log(formatName("Pineapple", "Chen"));

/**說明：
 * 因為字串是不可改變的(Immutable)，使用+=運算子串接，會在記憶體中產生出多個字串，應盡量避免使用
 */

// React: 條件渲染
// 問題：在React中，如何根據條件渲染兩種不同的內容？
function ConditionalRendering({ isLoggedIn }) {
  return isLoggedIn ? (
    <div>
      <h1>已登入</h1>
    </div>
  ) : (
    <div>
      <h1>未登入</h1>
    </div>
  );
}

// React: 組件
// 問題：使用React創建一個簡單的計數器組件，具有增加和減少計數的按鈕。
import { React, useState } from "react";

export default function App() {
  const [counter, setCounter] = useState(0);

  //increase counter
  const increase = () => {
    setCounter((count) => count + 1);
  };

  //decrease counter
  const decrease = () => {
    setCounter((count) => count - 1);
  };

  return (
    <div className="counter">
      <h1>React Counter</h1>
      <span className="counter__output">{counter}</span>
      <div className="btn__container">
        <button className="control__btn" onClick={increase}>
          +
        </button>
        <button className="control__btn" onClick={decrease}>
          -
        </button>
      </div>
    </div>
  );
}
