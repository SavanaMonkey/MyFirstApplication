const quotes = [
  {
    quote:
      "프로그래밍 언어로 작성한 프로그램이 상관 없는 것에 주의해야 한다면 그 언어는  하위 언어이다",
    author: "앨런 펄리스(Alan J. Perlis)",
  },
  {
    quote:
      "올바르게 동작하지 않더라도 걱정 말아라. 모든 것이 그랬다면, 넌 직업을 잃었을테니까.",
    author: "소프트웨어 공학에서의 모셔의 법칙(Mosher’s Law)",
  },
  {
    quote: "좋은 디자인은 그 때문에 소모되는 비용보다 빠르게 가치가 쌓인다.",
    author: "토마스 C. 게일(Thomas C. Gale)",
  },
  {
    quote: "말은 쉽지, 코드를 보여줘.",
    author: "리누스 토르발스(Linus Torvalds)",
  },
  {
    quote:
      "완벽함은 아무것도 더할 것이 없을 때가 아닌, 아무것도 제거할 것이 남지 않았을 때 달성된다.",
    author: "앙투안 드 생텍쥐페리(Antoine de Saint-Exupéry)",
  },
  {
    quote: "이론상, 이론과 실제는 같다. 실제로는, 그렇지 않다.",
    author: "요기 베라(Yoggi Berra)",
  },
  {
    quote: "프로그래밍은 자기 얼굴을 차는 것과 같아서, 조만간 코피가 날 것이다",
    author: "카일 우드버리(Kyle Woodbury)",
  },
  {
    quote:
      "위 코드의 버그를 조심하라. 올바르다고 증명하기만 하고 실행해 보지는 않았다.",
    author: "도날드 E 크누스(Donald E. Knuth)",
  },
  {
    quote:
      "컴퓨터 시스템 분석은 아이 양육과 같다. 견딜 수 없는 피해를 줄 순 있어도 성공을 보장할 순 없다.",
    author: "톰 드마르코(Tom DeMarco)",
  },
  {
    quote:
      "코드 라인 수로 프로그래밍 진척을 측정하는 것은 무게로 비행기 제작 진척도를 측정하는 것과 같다.",
    author: "빌 게이츠(Bill Gates)",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

//지정 숫자 사이의 랜덤 숫자 얻기
//📍round : 반올림
//📍ceil : 주어진 정수보다 소수점 단위로라도 더 크면 무조건 올림 1.01 --> 2
//📍floor : 주어진 정수보다 소수점 단위로라도 더 크면 무조건 내림 1.99 --> 1
// Math.random() : 0에서 1 사이의 랜덤 숫자
// length를 이용하여 quotes 배열의 길이를 곱해주면 확장성 UP

const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = randomQuote.quote;
author.innerText = randomQuote.author;
