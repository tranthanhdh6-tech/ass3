const nameInput = document.getElementById("nameInput");
const roleInput = document.getElementById("roleInput");
const imageInput = document.getElementById("imageInput");
const themeInput = document.getElementById("themeInput");
const preview = document.getElementById("imagePreview");
const cardsContainer = document.getElementById("cardsContainer");

// Live preview image
imageInput.addEventListener("input", () => {
  preview.src = imageInput.value || "https://via.placeholder.com/120";
});

document.getElementById("generateBtn").addEventListener("click", () => {
  const name = nameInput.value.trim();
  const role = roleInput.value.trim() || "No role provided";
  const imageURL = imageInput.value.trim() || "https://via.placeholder.com/120";
  const theme = themeInput.value;

  if (name === "") {
    alert("Please enter a name!");
    return;
  }

  // Create card
  const card = document.createElement("div");
  card.classList.add("profile-card");
  card.style.background = theme;

  card.innerHTML = `
        <img src="${imageURL}"alt="Profile Image">
        <h3>${name}</h3>
        <p>${role}</p>
        <button class="delete-btn">Delete</button>
    `;

  card.querySelector(".delete-btn").addEventListener("click", () => {
    card.remove();
  });

  cardsContainer.appendChild(card);

  // Reset
  nameInput.value = "";
  roleInput.value = "";
  imageInput.value = "";
  preview.src = "https://via.placeholder.com/120";
});

