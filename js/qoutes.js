const qoutes = [
  "난 너희가 세계라 부르는 존재 때로는 우주, 때로는 신, 때로는 진리, 때로는 0, 때로는 1 그리고 난 '너'이다.",
  "일어나서 걸어! 앞으로 나아가는 거야!",
  "사람은 무언가를 희생하지 않고서는 아무것도 얻을 수 없다. 무언가를 얻기 위해서는 그와 동등한 대가를 필요로 한다. 그것이 연금술에서의 등가 교환의 법칙이다.",
  "무엇인가에 미친듯이 빠져드는 건, 그것 자체가 하나의 재능이야.",
];

const choseQoute = `"${qoutes[Math.floor(Math.random() * imges.length)]}"`;

const qoute = document.getElementById("qoute");
qoute.innerText = choseQoute;
