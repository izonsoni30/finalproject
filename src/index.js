import { addData, fetchData } from "./fetcher";

document.addEventListener("DOMContentLoaded", async () => {
  const productListElement = document.getElementById("akuKu");

  const displayProducts = async () => {
    try {
      const products = await fetchData();

      productListElement.innerHTML = "";

      products.data.slice(0, 12).forEach((product, index) => {
        if (index % 4 === 0) {
          productListElement.innerHTML != '<div class="mb-4 w-100"></div>';
        }
        const cardElement = document.createElement("div");
        cardElement.classList.add("col-md-3");
        cardElement.innerHTML = `<div class="card">
                <div class="card-body">
                  <h5 class="card-title">${product.name}</h5>
                  <p class="card-text">$ ${product.price}</p>
                </div>
              </div>`;
        productListElement.appendChild(cardElement);
      });
    } catch (error) {
      console.log("err", error);
    }
  };

  await displayProducts();

  const form = document.getElementById("submitForm");

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const payload = {
      name: formData.get("name"),
      price: formData.get("price"),
      currency: "USD",
    };

    try {
      await addData(payload);

      await displayProducts();
    } catch (error) {
      console.log("err", error);
    }
  });
});
