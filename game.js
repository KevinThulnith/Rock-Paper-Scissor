let rounds = null;
let human = [null, 0, null, null, null];
let bot = [
  "a",
  0,
  document.getElementById("pa"),
  document.getElementById("playerA"),
  0,
];
let wndw = document.querySelector(".box");
let pics = ["rock.svg", "paper.svg", "scissor.svg"];
let ascr = document.getElementById("playerA");
let bscr = document.getElementById("playerB");
let cass = document.getElementById("wndw4");
let hds = cass.querySelectorAll("header");
let car = document.getElementById("wndw3");
let hdes = car.querySelectorAll("header");
let grounds = 0;

function clearOpt(nme) {
  document.querySelectorAll(nme).forEach((item) => {
    item.classList.remove("high");
  });
}

document.querySelectorAll(".round").forEach((opt) => {
  opt.addEventListener("click", () => {
    rounds = eval(opt.id);
    grounds = rounds;
    clearOpt(".round");
    opt.classList.add("high");
    game();
  });
});

document.querySelectorAll(".player").forEach((tle) => {
  tle.addEventListener("click", () => {
    human[0] = tle.id;
    clearOpt(".player");
    tle.classList.add("high");
    if (human[0] == "a") {
      human[2] = document.getElementById("pa");
      human[3] = document.getElementById("playerA");
      human[4] = 0;
      bot[0] = "b";
      bot[2] = document.getElementById("pb");
      bot[3] = document.getElementById("playerB");
      bot[4] = 1;
    } else {
      human[2] = document.getElementById("pb");
      human[3] = document.getElementById("playerB");
      human[4] = 1;
    }
    game();
  });
});

function game() {
  if (human[0] && rounds) {
    wndw.scrollTop = 560;
    document.getElementById("rnd").innerHTML = rounds;
    human[2].classList.add("scr");
    let van = document.querySelector(".wndw1");
    let btts = van.querySelectorAll("button");
    for (let dan = 0; dan < btts.length; dan++) {
      const element = btts[dan];
      element.classList.remove("high");
    }
  }
}

document.querySelectorAll(".icon").forEach((ico) => {
  ico.addEventListener("click", () => {
    document.getElementById("tile1").innerHTML =
      '<img src="' + pics[eval(ico.id)] + '">';
    if (ico.id == "2") {
      document.getElementById("tile1").style.transform = "scaleX(-1)";
    } else {
      document.getElementById("tile1").style.transform = "scaleX(1)";
    }
    let bind = Math.floor(Math.random() * pics.length);
    document.getElementById("tile2").innerHTML =
      '<img src="' + pics[bind] + '">';
    if (bind == 2) {
      document.getElementById("tile2").style.transform = "scaleX(1)";
    } else {
      document.getElementById("tile2").style.transform = "scaleX(-1)";
    }
    if (
      (bind == 0 && ico.id == "1") ||
      (bind == 2 && ico.id == "0") ||
      (bind == 1 && ico.id == "2")
    ) {
      human[1] += 1;
      later(1);
    } else if (
      (bind == 2 && ico.id == "1") ||
      (bind == 1 && ico.id == "0") ||
      (bind == 0 && ico.id == "2")
    ) {
      bot[1] += 1;
      later(2);
    } else {
      later(0);
    }
    human[3].innerHTML = human[1];
    bot[3].innerHTML = bot[1];
    rounds -= 1;
    document.getElementById("rnd").innerHTML = rounds;
  });
});

function later(cnd = null) {
  cass.classList.remove("pop");
  if (cnd == 0) {
    hds[2].classList.remove("pop");
  } else if (cnd == 1) {
    hds[human[4]].classList.remove("pop");
  } else {
    hds[bot[4]].classList.remove("pop");
  }
}

function norm() {
  cass.classList.add("pop");
  for (let index = 0; index < hds.length; index++) {
    const element = hds[index];
    element.classList.add("pop");
    document.getElementById("tile1").innerHTML = "";
    document.getElementById("tile2").innerHTML = "";
  }
  wlt();
}

function wlt() {
  if (rounds == 0) {
    car.classList.remove("pop");
    if (human[1] > bot[1]) {
      hdes[0].classList.remove("pop");
    } else if (human[1] < bot[1]) {
      hdes[1].classList.remove("pop");
    } else {
      hdes[2].classList.remove("pop");
    }
  }
}

function reset() {
  rounds = grounds;
  document.getElementById("rnd").innerHTML = rounds;
  human[1] = 0;
  human[3].innerHTML = "0";
  bot[1] = 0;
  bot[3].innerHTML = "0";
  for (let indx = 0; indx < hdes.length; indx++) {
    const element = hdes[indx];
    element.classList.add("pop");
  }
  car.classList.add("pop");
}

function menu() {
  reset();
  human[2].classList.remove("scr");
  wndw.scrollTop = 0;
  human = [null, 0, null, null, null];
  bot = [
    "a",
    0,
    document.getElementById("pa"),
    document.getElementById("playerA"),
    0,
  ];
  rounds = 0;
  grounds = 0;
}

function dot() {
  car.classList.remove("pop");
}
