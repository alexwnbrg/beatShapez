class Random {
  constructor() {
    this.useA = !1;
    let A = function (A) {
      let g = parseInt(A.substring(0, 8), 16),
        B = parseInt(A.substring(8, 16), 16),
        D = parseInt(A.substring(16, 24), 16),
        Q = parseInt(A.substring(24, 32), 16);
      return function () {
        D |= 0;
        let A = ((((g |= 0) + (B |= 0)) | 0) + (Q |= 0)) | 0;
        return (
          (Q = (Q + 1) | 0),
          (g = B ^ (B >>> 9)),
          (B = (D + (D << 3)) | 0),
          (D = ((D = (D << 21) | (D >>> 11)) + A) | 0),
          (A >>> 0) / 4294967296
        );
      };
    };
    (this.prngA = new A(tokenData.hash.substring(2, 34))),
      (this.prngB = new A(tokenData.hash.substring(34, 66)));
    for (let g = 0; g < 1e6; g += 2) this.prngA(), this.prngB();
  }
  random_dec() {
    return (this.useA = !this.useA), this.useA ? this.prngA() : this.prngB();
  }
  random_num(A, g) {
    return A + (g - A) * this.random_dec();
  }
  random_int(A, g) {
    return Math.floor(this.random_num(A, g + 1));
  }
  random_bool(A) {
    return this.random_dec() < A;
  }
  random_choice(A) {
    return A[this.random_int(0, A.length - 1)];
  }
}
let R = new Random();

let limiter = new Tone.Limiter(-2).toDestination();

// Define the font link using @import in CSS
const fontLink = `
  @import url('https://fonts.googleapis.com/css2?family=Handjet&family=IBM+Plex+Mono:wght@500&display=swap');
`;

// Create a style element and set its innerHTML to the font link
const styleElement = document.createElement("style");
styleElement.innerHTML = fontLink;

// Append the style element to the document head
document.head.appendChild(styleElement);

let loadingOverlay = document.createElement("div");
loadingOverlay.style.position = "fixed";
loadingOverlay.style.top = "0";
loadingOverlay.style.left = "0";
loadingOverlay.style.width = "100%";
loadingOverlay.style.height = "100%";
loadingOverlay.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
loadingOverlay.style.display = "flex";
loadingOverlay.style.justifyContent = "center";
loadingOverlay.style.alignItems = "center";
loadingOverlay.style.zIndex = "999";
document.body.appendChild(loadingOverlay);

let loadingText = document.createElement("div");
loadingText.innerText = "Loading...";
loadingText.style.color = "#02e1e8";
loadingText.style.fontSize = "7vw";
loadingText.style.fontFamily = "IBM Plex Mono, sans-serif";
loadingText.style.position = "absolute";
loadingText.style.top = "10px";
loadingText.style.left = "10px";
loadingOverlay.appendChild(loadingText);

let canvas = document.createElement("canvas");
document.body.appendChild(canvas);
let ctx = canvas.getContext("2d"),
  sizeRatio = 0.3;
(canvas.width = window.innerWidth), (canvas.height = window.innerHeight);

// declare Arweave gateway links for stems
const externalOneCID =
  tokenData.externalAssetDependencies?.[0]?.cid ||
  "VXHjZWr9S5zeJxVTYB6KBchdl1YWO9rayMPQVajCVts";
const externalTwoCID =
  tokenData.externalAssetDependencies?.[1]?.cid ||
  "GH0xkOLcvY1nFHRP572Avl06LIwjlEN1jQk8_2kqwug";
const externalThreeCID =
  tokenData.externalAssetDependencies?.[2]?.cid ||
  "I4GEsae3uX3uIHNPA9X9j0RJ78rf1PeWRtt4OJkdW0o";
const externalFourCID =
  tokenData.externalAssetDependencies?.[3]?.cid ||
  "ewLFa6BC_Xrsc-ed-p8qQlQaqy7ehQjqw4fZzrowNP0";
const externalFiveCID =
  tokenData.externalAssetDependencies?.[4]?.cid ||
  "_rHhufGaspOFK5SxCdbLMpcoEVScEaUv0R0OpkROuUc";
const externalSixCID =
  tokenData.externalAssetDependencies?.[5]?.cid ||
  "zNTU8zpvTo-0p2XYsqdbaUR-3zc3De0fo8MnubN0NII";
const externalSevenCID =
  tokenData.externalAssetDependencies?.[6]?.cid ||
  "bTHoujJe9z0PMS8fI7xLpwaMRQvFnhj0blRf25-BX3E";
const externalEightCID =
  tokenData.externalAssetDependencies?.[7]?.cid ||
  "t1Jq53QzozwmpI5pSyA3pRaT_S-jai1usiEynGeQc98";
const externalNineCID =
  tokenData.externalAssetDependencies?.[8]?.cid ||
  "NsX0HDBzr0xRWwdYh5g3Clr9ikSHiVTxGiye4zmlc74";
const externalTenCID =
  tokenData.externalAssetDependencies?.[9]?.cid ||
  "CA0IWhuhsFc8HVkMX8eW7Om5-j5uHFRWRF6Xu9WA9Fc";
const externalElevenCID =
  tokenData.externalAssetDependencies?.[10]?.cid ||
  "aWytmvdk5do0AHb6qXPmw5Ahx3jlHYqa5TafDODfwA8";
const externalTwelveCID =
  tokenData.externalAssetDependencies?.[11]?.cid ||
  "-nPYH5i-eJWKnbAgY25LBYZct6vl8WluxRB_eR4Md_c";
const externalThirteenCID =
  tokenData.externalAssetDependencies?.[12]?.cid ||
  "VCyclSlIcQqHLuG5jhxfTjAb_O-9pXydMP0D7SdZ4dE";
const externalFourteenCID =
  tokenData.externalAssetDependencies?.[13]?.cid ||
  "xtdPdk6ExhbLQVBR39mwnRLc6b4x72MmOTL4hs-0MiA";
const externalFifteenCID =
  tokenData.externalAssetDependencies?.[14]?.cid ||
  "hmtnEa4gmyS2XmUTDyoS1Fq0GN2FTv7nWF_09q9ry40";
const externalSixteenCID =
  tokenData.externalAssetDependencies?.[15]?.cid ||
  "khW0_54FzCGdQeROyNZf9eXo2v2GPDju1H2rEG3zRYg";
const externalSeventeenCID =
  tokenData.externalAssetDependencies?.[16]?.cid ||
  "1MDusSB9r4r8M2z_pJObLmnlccQH5ZiPL2gwbuwLmIc";
const externalEighteenCID =
  tokenData.externalAssetDependencies?.[17]?.cid ||
  "-bqtMXT3Ea9diPL35bQVuhH4SL4hL20dWQWEFmphvjk";
const externalNineteenCID =
  tokenData.externalAssetDependencies?.[18]?.cid ||
  "tPQomSVEqDnktsMhXTsEARK2oqzcq4b3fa_gUAz1emM";
const externalTwentyCID =
  tokenData.externalAssetDependencies?.[19]?.cid ||
  "yxB4Qg0AoXGxrEbBpNkgl3kbS2AWN0qrWoLiUIQmKCA";
const externalTwentyOneCID =
  tokenData.externalAssetDependencies?.[20]?.cid ||
  "iREU4Tm7cLs_MzJ03xl9nZXECl4TkWBvnO8MTV7BJN8";
const externalTwentyTwoCID =
  tokenData.externalAssetDependencies?.[21]?.cid ||
  "vBxGzs71ycNZPR8Z--PKozA9KLzHcWqUoT85gsTn7rM";
const externalTwentyThreeCID =
  tokenData.externalAssetDependencies?.[22]?.cid ||
  "S742CP0IwlXo72wjZKnNxMOle_fbi4URpVqADd8lwsE";
const externalTwentyFourCID =
  tokenData.externalAssetDependencies?.[23]?.cid ||
  "Vdqhlq-Wn4UI4r8Qac4TLZvZYIQFpiS0WdlW6dI3xZo";
const externalTwentyFiveCID =
  tokenData.externalAssetDependencies?.[24]?.cid ||
  "YsX_BsOgLvbwi4VYUJhBdftiq2LC4DYV3TUOVZPwZ5Y";
const externalTwentySixCID =
  tokenData.externalAssetDependencies?.[25]?.cid ||
  "9PElU9RC-F6ahDb3miT7Mso_XmGO7JwS44VDswvaURs";

const preferredArweaveGateway = tokenData.preferredArweaveGateway;

const gateway = "https://arweave.net";

// Stems
let stems = {
  lead: [
    { name: "UFO", url: gateway + "/" + externalOneCID },
    { name: "Generated", url: gateway + "/" + externalTwoCID },
    { name: "None", url: gateway + "/" + externalThreeCID },
    { name: "Shredder McShreddy", url: gateway + "/" + externalFourCID },
  ],
  drums: [
    { name: "Kicking 8", url: gateway + "/" + externalFiveCID },
    { name: "Sustained", url: gateway + "/" + externalSixCID },
    { name: "Vinyl", url: gateway + "/" + externalSevenCID },
    { name: "DNB", url: gateway + "/" + externalEightCID },
    { name: "Trap'd", url: gateway + "/" + externalNineCID },
  ],
  pad: [
    { name: "Warp Me Wobble", url: gateway + "/" + externalTenCID },
    { name: "Reverse Twinkles", url: gateway + "/" + externalElevenCID },
    { name: "Rhodes", url: gateway + "/" + externalTwelveCID },
    { name: "Piano", url: gateway + "/" + externalThirteenCID },
  ],
  accent: [
    { name: "Takeoff", url: gateway + "/" + externalFourteenCID },
    { name: "bleepsNbloops", url: gateway + "/" + externalFifteenCID },
    { name: "SatBeams", url: gateway + "/" + externalSixteenCID },
    { name: "Long Way Up", url: gateway + "/" + externalSeventeenCID },
  ],
  percussion: [
    { name: "Glitchy", url: gateway + "/" + externalEighteenCID },
    { name: "Rimmed Hat", url: gateway + "/" + externalNineteenCID },
    { name: "Water Rims", url: gateway + "/" + externalTwentyCID },
    { name: "None", url: gateway + "/" + externalTwentyOneCID },
  ],
  dummy: [
    { name: "Dummy1", url: gateway + "/" + externalTwentyTwoCID },
    { name: "Dummy2", url: gateway + "/" + externalTwentyThreeCID },
    { name: "Dummy3", url: gateway + "/" + externalTwentyFourCID },
    { name: "Dummy4", url: gateway + "/" + externalTwentyFiveCID },
    { name: "Dummy6", url: gateway + "/" + externalTwentySixCID },
  ],
};

canvas.addEventListener("mousedown", () => {
  if (!allStemsLoaded) {
    // If stems are not loaded yet, do nothing on click
    return;
  }

  if (!isMouseDown) {
    // Start the players
    players.player("lead").start();
    players.player("drums").start();
    players.player("pad").start();
    players.player("accent").start();
    players.player("percussion").start();
    dummyPlayer.start();

    isMouseDown = true;
  } else {
    // Stop the players
    players.player("lead").stop();
    players.player("drums").stop();
    players.player("pad").stop();
    players.player("accent").stop();
    players.player("percussion").stop();
    dummyPlayer.stop();

    isMouseDown = false;
  }
});

// Select a random stem from each category
let drumIndex = R.random_int(0, stems.drums.length - 1);
let selectedDrumStem = stems.drums[drumIndex];

// Check if the selected drum stem includes percussion
let drumStemsWithPercussion = ["DNB", "Trap'd"];
let selectedPercussionStem;
if (drumStemsWithPercussion.includes(selectedDrumStem.name)) {
  selectedPercussionStem = stems.percussion.find(
    (stem) => stem.name === "None"
  );
} else {
  // If the selected drum stem does not include percussion, select a random percussion stem
  // Exclude the "None" stem from the selection
  let percussionOptions = stems.percussion.filter(
    (stem) => stem.name !== "None"
  );
  selectedPercussionStem =
    percussionOptions[R.random_int(0, percussionOptions.length - 1)];
}

let selectedStems = {
  lead: stems.lead[R.random_int(0, stems.lead.length - 1)],
  drums: selectedDrumStem,
  dummy: stems.dummy[drumIndex],
  pad: stems.pad[R.random_int(0, stems.pad.length - 1)],
  accent: stems.accent[R.random_int(0, stems.accent.length - 1)],
  percussion: selectedPercussionStem,
};

console.log(selectedStems);

// Preload the selected stems
let players = new Tone.Players({
  lead: selectedStems.lead.url,
  drums: selectedStems.drums.url,
  pad: selectedStems.pad.url,
  accent: selectedStems.accent.url,
  percussion: selectedStems.percussion.url,
}).connect(limiter);

players.player("lead").loop = true;
players.player("drums").loop = true;
players.player("pad").loop = true;
players.player("accent").loop = true;
players.player("percussion").loop = true;

Tone.loaded().then(() => {
  allStemsLoaded = true;
  console.log("Stems are loaded");

  loadingOverlay.style.display = "none";
});

// Create a separate audio context for the "dummy" player
let dummyContext = new Tone.Context();

// Create an analyser node in the separate context
let analyser = dummyContext.createAnalyser();
analyser.fftSize = 2048; // Set the FFT size

let dummyPlayer = new Tone.Player({
  url: selectedStems.dummy.url,
  loop: true,
  context: dummyContext, // Use the separate context
});

// Connect the "dummy" player to the analyser
dummyPlayer.connect(analyser);

let isMouseDown = false;

let lastBeat = Date.now(),
  color = 0,
  rotation = [0, Math.PI / 4, Math.PI / 2],
  targetRotation = [...rotation],
  sides = [R.random_int(5, 6), R.random_int(3, 6), R.random_int(5, 6)],
  beatLength = 6e4 / 90,
  backgroundColor = "#02001C",
  colors = [
    "#f708f7",
    "#02e1e8",
    "#A915FF",
    "#FFFFFF",
    "#EFC300",
    "#FF5C5C",
    "#009AFF",
  ];

shapeColors = [
  colors[R.random_int(0, colors.length - 1)],
  colors[R.random_int(0, colors.length - 1)],
  colors[R.random_int(0, colors.length - 1)],
];

function resizeCanvas() {
  (canvas.width = window.innerWidth), (canvas.height = window.innerHeight);
  let A = Math.min(canvas.width, canvas.height) * sizeRatio;
  for (let g of ((targetSize = [
    ...(size = [
      1.5 * A * (canvas.width / canvas.height),
      1.3 * A * (canvas.width / canvas.height),
      1 * A * (canvas.width / canvas.height),
    ]),
  ]),
  stars))
    (g.x = Math.random() * canvas.width), (g.y = Math.random() * canvas.height);
}
let rotationDirection = [
    R.random_dec() > 0.5 ? 1 : -1,
    R.random_dec() > 0.5 ? 1 : -1,
    R.random_dec() > 0.5 ? 1 : -1,
  ],
  previousAvgFreq = 0,
  threshold = 0.01;
function lerp(A, g, B) {
  return (1 - B) * A + B * g;
}

let stars = [];
for (let i = 0; i < 1000; i++) {
  let g = {
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    size: 3.5 * Math.random() + 0.5,
    color: Math.random() > 0.5 ? "0,255,255" : "255,0,255",
    opacity: Math.random(),
    targetOpacity: Math.random(),
    vx: (Math.random() - 0.5) * 0.09,
    vy: (Math.random() - 0.5) * 0.09,
    timer: 0,
    interval: Math.floor(200 * Math.random() + 400),
  };
  stars.push(g);
}
function generateStars() {
  stars = [];
  let A = ["#f708f7", "#02e1e8"];
  for (let g = 0; g < 1000; g++) {
    let B = {
      x: R.random_num(0, canvas.width),
      y: R.random_num(0, canvas.height),
      radius: R.random_num(0.2, 2.5),
      color: R.random_choice(A),
      opacity: 0,
    };
    stars.push(B);
  }
}
function drawStars() {
  for (let A of stars)
    (A.x += A.vx),
      (A.y += A.vy),
      A.x < 0 && (A.x = canvas.width),
      A.x > canvas.width && (A.x = 0),
      A.y < 0 && (A.y = canvas.height),
      A.y > canvas.height && (A.y = 0),
      A.timer++,
      A.timer >= A.interval &&
        (A.opacity < 0.01
          ? (A.targetOpacity = Math.random())
          : (A.targetOpacity = 0),
        (A.timer = 0)),
      (A.opacity += (A.targetOpacity - A.opacity) * 0.01),
      (ctx.fillStyle = `rgba(${A.color},${A.opacity})`),
      ctx.fillRect(A.x, A.y, A.size, A.size);
}

const hashColor = colors[R.random_int(0, colors.length - 1)];
let currentColorIndex = R.random_int(0, colors.length - 1);
let currentColor = colors[currentColorIndex];

function drawShape() {
  let A = new Uint8Array(analyser.frequencyBinCount);
  analyser.getByteFrequencyData(A);
  let g = A.reduce((A, g) => A + g, 0) / A.length;

  // Calculate the maximum allowable size based on the canvas dimensions
  let maxSize = 0.99 * Math.min(canvas.width, canvas.height);

  const canvasWidth = canvas.width;
  const maxShapeSize = canvasWidth * 0.6;
  const minShapeSize = canvasWidth * 0.3;

  if (g - previousAvgFreq > threshold) {
    for (let B = 0; B < size.length; B++) {
      let D = g * (B + 1) * R.random_dec() * 0.45;
      let newSize = R.random_bool(0.5) ? size[B] + D : size[B] - D;
      newSize = Math.min(Math.max(newSize, minShapeSize), maxShapeSize);
      targetSize[B] = newSize;
      targetRotation[B] += ((rotationDirection[B] * g) / 360) * R.random_dec();
    }
  }

  for (let Q = 0; Q < size.length; Q++) {
    // Interpolate the size and rotation smoothly to the target values
    size[Q] = lerp(size[Q], targetSize[Q], 0.02);
    rotation[Q] = lerp(rotation[Q], targetRotation[Q], 0.02);
  }

  previousAvgFreq = g;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = backgroundColor;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  drawStars();

  ctx.strokeStyle = hashColor;

  for (var C = 0; C < 4; C++) {
    for (var M = 0; M < size.length; M++) {
      ctx.save();
      ctx.translate(canvas.width / 2, canvas.height / 2);
      ctx.rotate(rotation[M] + (C * Math.PI) / 2);
      ctx.beginPath();
      for (var V = 0; V <= sides[M]; V++) {
        var f = V * ((2 * Math.PI) / sides[M]);
        var q = size[M] * Math.cos(f);
        var z = size[M] * Math.sin(f);
        if (V === 0) {
          ctx.moveTo(q, z);
        } else {
          ctx.lineTo(q, z);
        }
      }
      ctx.closePath();

      ctx.lineWidth = 2.8 * (canvas.width / 400);

      ctx.strokeStyle = shapeColors[M];
      ctx.stroke();
      ctx.restore();
    }
  }

  requestAnimationFrame(drawShape);
}

window.addEventListener("resize", () => {
  resizeCanvas();
}),
  resizeCanvas(),
  drawShape();
