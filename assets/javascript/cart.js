let cart1 = [];
const cart = async (element) => {
  let totalprice = 0;
  const response = await fetch("./assets/data/items.json");
  let data = await response.json();
  for (let i = 0; i < data.items.length; i++) {
    if (data.items[i].id == element.id) {
      if (localStorage.getItem("cart1")) {
        cart1 = JSON.parse(localStorage.getItem("cart1"));
        let m = 0;
        for (let i = 0; i < cart1.length; i++) {
          if (element.id == cart1[i].id) {
            cart1[i].quantity += 1;
            m++;
            break;
          }
        }
        if (m == 0) {
          cart1.push(data.items[i]);
          data.items[i].quantity += 1;
        }
        break;
      } else {
        cart1.push(data.items[i]);
        data.items[i].quantity += 1;
        break;
      }
    }
  }

  for (let i = 0; i < cart1.length; i++) {
    totalprice += Number(cart1[i].quantity) * Number(cart1[i].item_price);
  }
  localStorage.setItem("cart1", JSON.stringify(cart1));
  localStorage.setItem("totalprice", JSON.stringify(totalprice));
  document.getElementById(
    "cart-heading"
  ).innerHTML = `<i class="fa-solid fa-${cart1.length}"></i>`;
  document.getElementById(
    "total-items"
  ).innerText = `${cart1.length} item(s)-Rs.${totalprice}`;
  document.getElementById("cart-heading").style.display = "block";
};
