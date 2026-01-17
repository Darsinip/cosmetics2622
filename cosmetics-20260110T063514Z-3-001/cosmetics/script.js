const cart = JSON.parse(localStorage.getItem("cart")) || [];

    function addToCart(product) {
      cart.push(product);
      localStorage.setItem("cart", JSON.stringify(cart));
      alert(`${product.name} added to cart!`);
      renderCart();
    }

    function renderCart() {
      const cartContainer = document.getElementById("cart-items");
      cartContainer.innerHTML = "";
      if (cart.length === 0) {
        cartContainer.innerHTML = "<p>Your cart is empty 😢</p>";
        return;
      }

      cart.forEach((item, index) => {
        const div = document.createElement("div");
        div.className = "cart-item";
        div.innerHTML = `
          <strong>${item.name}</strong><br>
          Price: ${item.price} <button data-index="${index}" class="remove-btn">Remove</button>
        `;
        cartContainer.appendChild(div);
      });

      document.querySelectorAll(".remove-btn").forEach(btn => {
        btn.addEventListener("click", () => {
          const idx = parseInt(btn.getAttribute("data-index"));
          cart.splice(idx, 1);
          localStorage.setItem("cart", JSON.stringify(cart));
          renderCart();
        });
      });
    }

    document.addEventListener("DOMContentLoaded", () => {
      document.querySelectorAll(".add-cart").forEach((btn, i) => {
        btn.addEventListener("click", () => {
          const card = btn.closest(".product-card");
          const product = {
            id: card.dataset.id,
            name: card.querySelector(".product-title").innerText.trim(),
            price: card.querySelector(".new").innerText.trim(),
          };
          addToCart(product);
        });
      });

      renderCart();
    });