document.getElementById("generateBtn").addEventListener("click", function () {
  const name = document.getElementById("nameInput").value.trim();
  const role = document.getElementById("roleInput").value.trim();
  const imageURL = document.getElementById("imageInput").value.trim();

  // Check missing name
  if (name === "") {
    alert("Please enter a name for the profile card.");
    return;
  }

  // Create card container
  const card = document.createElement("div");
  card.classList.add("profile-card");

  // Build card HTML
  card.innerHTML = `
        <img src="${imageURL}" alt="Profile">
        <h3>${name}</h3>
        <p>${role}</p>
        <button class="delete-btn">Delete Card</button>
    `;

  // Add delete function
  card.querySelector(".delete-btn").addEventListener("click", function () {
    card.remove();
  });

  // Append to container
  document.getElementById("cardsContainer").appendChild(card);

  // Reset inputs
  document.getElementById("nameInput").value = "";
  document.getElementById("roleInput").value = "";
  document.getElementById("imageInput").value = "";
});
