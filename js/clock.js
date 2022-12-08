const clock = document.querySelector("h2#clock");

function getClock() {
  const date = new Date();
  //📍padStart : 문자열의 길이를 지정하고 그 길이가 아닐 때 '문자 앞에'채울 문자 지정
  //📍padEnd : 문자열의 길이를 지정하고 그 길이가 아닐 때 '문자 뒤에' 채울 문자 지정
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");

  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

//📍setInterval : ms단위로 함수를 반복
// setInterval(sayHello, 5000);

// 📍setTimeout : ms단위로 대기 후 함수 호출
// setTimeout(sayHello, 5000)

//시계를 바로 호출
getClock();
//시계를 1초마다 새로 호출
setInterval(getClock, 1000);
