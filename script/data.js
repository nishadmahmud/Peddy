const loadCatagories = () => {
  fetch("https://openapi.programming-hero.com/api/peddy/categories")
    .then((res) => res.json())
    .then((data) => showCatagories(data.categories));
};

const loadPets = () => {};

function showCatagories(categories) {
  const catagoryContainer = document.getElementById("categoryContainer");

  categories.forEach((category) => {
    console.log(category);
    const card = document.createElement("div");
    card.innerHTML = `
            <img src="${category.category_icon}" class="w-11">
            <h4 class="font-bold text-xl">${category.category}</h4>
        `;

    card.classList.add(
      "flex",
      "gap-4",
      "rounded-lg",
      "border",
      "border-[#0E7A8126]",
      "p-6",
      "w-1/4",
      "items-center",
      "justify-center",
      `${category.category}`,
      "hover:bg-[#0E7A811A]",
      "hover:border-[#0E7A81]"
    );

    catagoryContainer.append(card);
  });
}

loadCatagories();
