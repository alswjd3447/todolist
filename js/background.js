const imges = ["0.jpg", "1.jpeg", "2.jpeg", "3.jpg"];

const choseImg = imges[Math.floor(Math.random() * imges.length)];

const bgImg = document.createElement("img");

bgImg.src = `./img/${choseImg}`;
bgImg.id = "bgImg";

document.body.appendChild(bgImg);
