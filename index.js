// function createBalance(initialBalance) {
//   return {
//     accountNumber: 31131331,
//     deposit(summa) {
//       initialBalance += summa;
//       return initialBalance;
//     },
//     withdraw(summa) {
//       if (summa > initialBalance) {
//         console.log("Puliz yetmaydi");
//       } else {
//         initialBalance -= summa;
//         return initialBalance;
//       }
//     },
//     showBalance() {
//       return initialBalance;
//     },
//   };
// }

// const hisobRaqami = createBalance(1500);

// console.log(hisobRaqami.showBalance());

// hisobRaqami.deposit(8000);

// console.log(hisobRaqami.showBalance());

// hisobRaqami.withdraw(9000);

// console.log(hisobRaqami.showBalance());

// hisobRaqami.withdraw(9000);

// console.log(hisobRaqami.showBalance());

// const sk = document.querySelector(".sekundomer > p");
// const skBtn = document.querySelector(".sk-btn");
// const skStopBtn = document.querySelector(".sk-stop-btn");

// console.log(skBtn);

// skBtn.textContent = "Start";
// skBtn.style.background = "red";
// let id = null;

// skBtn.addEventListener("click", () => {
//     id = setInterval(() => {
//         sk.textContent++;
//         document.body.style.background = generateRandomHexColor()
//     }, 100)
// });

// skStopBtn.addEventListener("click", () => {
//     console.log("toxta");
//     clearInterval(id)
// })

// function generateRandomHexColor() {
//     let color = Math.floor(Math.random() * 16777215).toString(16);

//     return `#${color.padStart(6, '0')}`;
// }

// const btn1 = document.querySelector(".btn-1");
// const btn2 = document.querySelector(".btn-2");
// const btn3 = document.querySelector(".btn-3");
// const btn4 = document.querySelector(".btn-4");
// const btn5 = document.querySelector(".btn-5");
// const btn6 = document.querySelector(".btn-6");
// const btn7 = document.querySelector(".btn-7");
// const btn8 = document.querySelector(".btn-8");
// const btn9 = document.querySelector(".btn-9");

// const btns = [btn1, btn2, btn3, btn4, btn5, btn6, btn7, btn8, btn9];

// let isX = true;

// const arr = [
//   ["-", "-", "-"],
//   ["-", "-", "-"],
//   ["-", "-", "-"],
// ];

// btns.forEach((item, index) => {
//   item.addEventListener("click", () => {
//     let row;
//     let col;

//     if (index < 3) {
//       row = 0;
//       col = index;
//     } else if (index < 6) {
//       row = 1;
//       col = index - 3;
//     } else {
//       row = 2;
//       col = index - 6;
//     }

//     console.log("row " + row);
//     console.log("col " + col);

//     arr[row][col] = isX ? "X" : "O";

//     item.textContent = isX ? "X" : "O";
//     isX = !isX;
//     item.disabled = true;
//   });
// });

//1
setInterval(() => {
  console.log("Salom");
}, 5000);

console.log(setInterval);

// // 2;
// const colors = ["red", "yellow", "green"];
// let index = 0;

// setInterval(() => {
//   document.getElementById("light").style.background = colors[index];
//   index = (index + 1) % colors.length;
// }, 1000);

// 3;
// let count = 0;
// let timer = null;

// function start() {
//   if (timer === null) {
//     timer = setInterval(() => {
//       count++;
//       document.getElementById("time").textContent = count;
//     }, 500);
//   }
// }

// function stop() {
//   clearInterval(timer);
//   timer = null;
// }//ustoz bu ishladi

// 4;
// setInterval(() => {
//   const now = new Date();

//   const h = String(now.getHours()).padStart(2, "0");
//   const m = String(now.getMinutes()).padStart(2, "0");
//   const s = String(now.getSeconds()).padStart(2, "0");

//   document.getElementById("clock").textContent = `${h}:${m}:${s}`;
// }, 1000);//bu ham hozirgi vatni kursatayapdi fatat 10 soniyadan sung

// 5
// let isOn = false;

// document.getElementById("btn").onclick = function () {
//   isOn = !isOn;

//   if (isOn) {
//     document.body.style.background = "yellow";
//     this.textContent = "Svet yondi";
//   } else {
//     document.body.style.background = "white";
//     this.textContent = "Svet ochdi";
//   }
// };
// bu ham buttoni bosganda sariq yonib uchayapdi
