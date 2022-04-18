let myName = document.querySelector("#myName");
let promptName = prompt("İsminiz:");
myName.innerHTML = `${promptName ? myName.innerHTML = promptName : "Bilinmeyen"}`;



const weekday = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Camartesi"];
setInterval(clock, 1000);
function clock() {
  const today = new Date();
  let h = today.getHours();
  h = checkTime(h);
  let m = today.getMinutes();
  m = checkTime(m);
  let s = today.getSeconds();
  s = checkTime(s);
  let d = weekday[today.getDay()];
  document.querySelector("#myClock").innerHTML = `${h}:${m}:${s} ${d}`;
}

function checkTime(i) {
  if (i < 10) { i = "0" + i };  // add zero in front of numbers < 10
  return i;
}