const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const greeting = document.querySelector("#greeting");

//String이 반복될 때는 변수로 저장해둘 것
const HIDDEN_CALSSNAME = "hidden";
const USERNAME_KEY = "username";

//▼ userName 유효성 검사 But 브라우저 자체의 기능을 사용하는 것을 추천
// function onLoginBtnClick() {
//   const userName = loginInput.value;
//   if (userName === "") {
//     alert("Please write your name");
//   } else if (userName.length >= 12) {
//     alert("your name is too long");
//   }
// }

function onLoginSubmit(event) {
  event.preventDefault();
  const userName = loginInput.value;
  loginForm.classList.add(HIDDEN_CALSSNAME);
  localStorage.setItem(USERNAME_KEY, userName);
  paintGreetings(userName);
}

function paintGreetings(userName) {
  greeting.innerText = `즐거운 하루, ${userName} 님!`;
  greeting.classList.remove(HIDDEN_CALSSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CALSSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreetings(savedUsername);
}
