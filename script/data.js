function removeActiveBtn() {
  const btns = document.getElementsByClassName("active");
  for (let btn of btns) {
    btn.classList.remove("active");
  }
}

const loadCatagories = () => {
  fetch("https://openapi.programming-hero.com/api/peddy/categories")
    .then((res) => res.json())
    .then((data) => showCatagories(data.categories));
};

const loadPets = (id) => {
  const url = `https://openapi.programming-hero.com/api/peddy/category/${id}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      const clickBtn = document.getElementById(`btn-${id}`);
      removeActiveBtn();
      clickBtn.classList.add("active");
      showPets(data.data);
    });
};

function showPets(pets) {
  const petContainer = document.getElementById("pets");
  petContainer.innerHTML = ``;
  for (let pet of pets) {
    const div = document.createElement("div");
    div.innerHTML = `
        <img src="${pet.image}" class="rounded-md">
        <div class="mt-5">
            <h4 class="text-base font-bold">${pet.pet_name}</h4>
            <div>
                <p class="flex gap-2 text-sm font-normal text-[#131313B2]">
                    <img src="../images/breed.svg" class="w-4"> Breed: ${pet.breed}
                </p>
                <p class="flex gap-2 text-sm font-normal text-[#131313B2]">
                    <img src="../images/birth.svg" class="w-4"> Birth: ${pet.date_of_birth}
                </p>
                <p class="flex gap-2 text-sm font-normal text-[#131313B2]">
                    <img src="../images/gender.svg" class="w-4"> Gender: ${pet.gender}
                </p>
                <p class="flex gap-2 text-sm font-normal text-[#131313B2]">
                    <img src="../images/price.svg" class="w-4"> Price: ${pet.price}$
                </p>
            </div>
        </div>
        <hr class="border-gray-200 my-3">
        <div class="flex gap-2">
            <button class="px-3 rounded-lg border border-[#0E7A8126] hover:bg-gray-200"><img src="../images/like.svg"></button> 
            <button class="text-[#0E7A81] text-base font-bold py-2 px-4 border rounded-lg border-[#0E7A8126] hover:bg-[#0E7A81] hover:text-white">Adopt</button> 
            <button class="text-[#0E7A81] text-base font-bold py-2 px-4 border rounded-lg border-[#0E7A8126] hover:bg-[#0E7A81] hover:text-white">Details</button> 
        </div>
    `;
    div.classList.add("p-4", "border", "rounded-lg", "border-gray-200");
    petContainer.append(div);
  }
}

function showCatagories(categories) {
  const catagoryContainer = document.getElementById("categoryContainer");

  categories.forEach((category) => {
    const card = document.createElement("div");
    card.innerHTML = `
            <button id="btn-${category.category}" onclick="loadPets('${category.category}')" class="flex gap-4 rounded-lg border border-[#0E7A8126] p-6 w-full items-center justify-center hover:bg-[#0E7A811A] hover:border-[#0E7A81] transition-all duration-300 ease-in-out">
                <img src="${category.category_icon}" class="w-11">
                <h4 class="font-bold text-xl">${category.category}</h4>
            </button>
        `;

    card.classList.add("w-1/4");

    catagoryContainer.append(card);
  });
}

loadCatagories();
