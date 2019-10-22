const buttons = document.querySelectorAll(".button");

// const backgroundButton = document.querySelector(".addBackground");

button.forEach(function(button) {
  button.addEventListener("click", () => {
    const paragraph = document.createElement("p");

    paragraph.classList.add("newParagraph");

    paragraph.textContent = "My new paragraph!";

    document.body.append(paragraph);
  });
});