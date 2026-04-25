/*=====================================
--- Search input By Lyes: 21/01/2026
================================== ====*/

import products from "./JavaScript/productsData.js";

// mapping produit → page HTML
const productPageMap = {
  "dress": "../pages/products/dresses.html",
  "jeans": "../pages/products/jeans.html",
  "shoes": "../pages/products/shoes.html",
  "bag": "../pages/products/bags.html",
  "coats": "../pages/products/coats.html",
  "jewellery": "../pages/products/jewellery.html"
};

// attendre que l'élément existe dans le DOM
function waitForElement(selector) {
  return new Promise(resolve => {
    const el = document.querySelector(selector);
    if (el) return resolve(el);

    const observer = new MutationObserver(() => {
      const el2 = document.querySelector(selector);
      if (el2) {
        resolve(el2);
        observer.disconnect();
      }
    });

    observer.observe(document.body, { childList: true, subtree: true });
  });
}

// fonction principale pour initier la recherche
async function initSearch() {
  const searchInput = await waitForElement("#search-input");
  if (!searchInput) return;

  searchInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();

      const query = searchInput.value.trim().toLowerCase();
      if (!query) return;

      const foundProduct = products.find(product =>
        product.productName.toLowerCase().includes(query)
      );

      if (foundProduct) {
        const page = productPageMap[foundProduct.productName.toLowerCase()];
        if (page) {
          window.location.href = page;
        } else {
          alert("Page for this product not found 😔");
        }
      } else {
        alert("No product found 😔");
      }
    }
  });
}

document.addEventListener("DOMContentLoaded", initSearch);




/*
import products from "./productsData.js";

// fonction pour attendre que l’élément existe dans le DOM
function waitForElement(selector) {
  return new Promise(resolve => {
    const el = document.querySelector(selector);
    if (el) return resolve(el);

    const observer = new MutationObserver(() => {
      const el2 = document.querySelector(selector);
      if (el2) {
        resolve(el2);
        observer.disconnect();
      }
    });

    observer.observe(document.body, { childList: true, subtree: true });
  });
}

// fonction principale pour initier la recherche
async function initSearch() {
  const searchInput = await waitForElement("#search-input");
  if (!searchInput) return;

  searchInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      const query = searchInput.value.trim().toLowerCase();
      if (!query) return;

      const foundProduct = products.find(product =>
        product.productName.toLowerCase().includes(query)
      );

      if (foundProduct) {
        // Rediriger vers la page produit
        window.location.href = `product.html?id=${foundProduct.id}`;
      } else {
        alert("No product found 😔");
      }
    }
  });
}

document.addEventListener("DOMContentLoaded", initSearch); 

*/
