const games = [
  {
    name: "Space Runner",
    icon: "🚀",
    description: "Dodge obstacles and survive as long as you can."
  },
  {
    name: "Block Puzzle",
    icon: "🧩",
    description: "Fit the blocks together and clear the board."
  },
  {
    name: "Speed Racer",
    icon: "🏎️",
    description: "Race to the finish and beat your best time."
  },
  {
    name: "Pixel Adventure",
    icon: "👾",
    description: "Explore a tiny pixel world full of surprises."
  },
  {
    name: "Target Master",
    icon: "🎯",
    description: "Test your aim and hit the targets."
  },
  {
    name: "Ninja Jump",
    icon: "🥷",
    description: "Jump over obstacles and keep moving."
  }
];

const grid = document.getElementById("gameGrid");
const search = document.getElementById("search");
const empty = document.getElementById("empty");
const modal = document.getElementById("gameModal");
const closeModal = document.getElementById("closeModal");
const modalTitle = document.getElementById("modalTitle");
const modalIcon = document.getElementById("modalIcon");
const modalText = document.getElementById("modalText");

function renderGames(filter = "") {
  const matches = games.filter(game =>
    game.name.toLowerCase().includes(filter.toLowerCase())
  );

  grid.innerHTML = "";

  matches.forEach(game => {
    const card = document.createElement("article");
    card.className = "card";
    card.innerHTML = `
      <div class="thumbnail">${game.icon}</div>
      <div class="card-body">
        <h3>${game.name}</h3>
        <p>${game.description}</p>
        <button class="play">Play</button>
      </div>
    `;

    card.querySelector(".play").addEventListener("click", () => openGame(game));
    grid.appendChild(card);
  });

  empty.hidden = matches.length !== 0;
}

function openGame(game) {
  modalTitle.textContent = game.name;
  modalIcon.textContent = game.icon;
  modalText.textContent = game.description;
  modal.hidden = false;
}

function closeGame() {
  modal.hidden = true;
}

search.addEventListener("input", () => renderGames(search.value));
closeModal.addEventListener("click", closeGame);

modal.addEventListener("click", event => {
  if (event.target === modal) closeGame();
});

document.addEventListener("keydown", event => {
  if (event.key === "Escape") closeGame();
});

renderGames();
