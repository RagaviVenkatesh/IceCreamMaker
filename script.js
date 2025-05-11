let scoops = [];

function chooseCone() {
  const icecream = document.getElementById("icecream");
  icecream.innerHTML = '<div class="cone"></div>';
  scoops = [];
}

function addScoop(flavor) {
  if (scoops.length >= 5) return;
  scoops.push(flavor);
  renderScoops();
}

function renderScoops() {
  const icecream = document.getElementById("icecream");
  const cone = icecream.querySelector(".cone");
  icecream.innerHTML = "";
  icecream.appendChild(cone);

  scoops.forEach((flavor, i) => {
    const scoop = document.createElement("div");
    scoop.className = `scoop ${flavor}`;
    scoop.style.bottom = `${110 + i * 55}px`;
    icecream.appendChild(scoop);
  });
}

function resetTower() {
  document.getElementById("icecream").innerHTML = "";
  scoops = [];
}
