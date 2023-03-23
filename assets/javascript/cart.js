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
            alert("Item added to cart");
            break;
          }
        }
        if (m == 0) {
          cart1.push(data.items[i]);
          data.items[i].quantity += 1;
          alert("Item added to cart");
        }
        break;
      } else {
        cart1.push(data.items[i]);
        data.items[i].quantity += 1;
        alert("Item added to cart");
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

const loadcart = async () => {
  if (localStorage.getItem("cart1")) {
    cart1 = JSON.parse(localStorage.getItem("cart1"));
    let html = "";
    for (let i = 0; i < cart1.length; i++) {
      html += `
      <div class="${cart1[i].item_class} item">
      <div class="item-image">
        <img src="${cart1[i].item_image}" alt="#">
      </div>
      <div class="item-hero ptbs">
        <div class="row-1 ptbs">
          <h2>${cart1[i].item_name}</h2>
          <p>
            <i class="fa-light fa-indian-rupee-sign"></i>
            ${cart1[i].item_price}
          </p>
        </div>
        <div class="row-2 ptbs">
          <span class="input-btn">
            <input type="number"  placeholder="${cart1[i].quantity}"/>
            <button id="${cart1[i].id}" onclick="remove(this)">Remove from Cart</button>
          </span>
          <span class="icons">
            <i class="fa-light fa-heart heart"></i>
            <i class="fa-thin fa-arrow-right-arrow-left arrow"></i>
          </span>
        </div>
      </div>
      <div class="item-footer ptbs">
        <div class="buy-now">
          <a href="#">
            <i class="fa-regular fa-cart-shopping"></i>
            Buy now
          </a>
        </div>
        <div class="question">
          <a href="#">
            <i class="fa-light fa-circle-question"></i>
            Question
          </a>
        </div>
      </div>
    </div>
      `;
    }
    document.getElementById("cart-block").innerHTML = html;
    document.getElementById("cart-block").style.display = "flex";
    if (html != "") {
      document.getElementById("pagination").style.display = "none";
      document.getElementById("search-block").style.display = "none";
      document.getElementById("wish-block").style.display = "none";
      document.getElementById("hero").style.display = "none";
      document.getElementById("grey").style.display = "none";
      document.getElementById("why").style.display = "none";
      document.getElementById("featured1").style.display = "none";
      document.getElementById("featured2").style.display = "none";
      document.getElementById("shop").style.display = "none";
      document.getElementById("gallery").style.display = "none";
      document.getElementById("blog").style.display = "none";
      document.getElementById("people").style.display = "none";
      document.getElementById("viewed").style.display = "none";
      document.getElementById("footer-top").style.display = "none";
    } else {
      alert("Cart is empty");
      window.location.assign("index.html");
    }
  }
  else {
    alert("Cart is empty");
  }
};

const remove = async (element) => {
  if (localStorage.getItem("cart1")) {
    cart1 = JSON.parse(localStorage.getItem("cart1"));
    for (let i = 0; i < cart1.length; i++) {
      if (cart1[i].id == element.id) {
        totalprice = JSON.parse(localStorage.getItem("totalprice"));
        totalprice -= Number(cart1[i].quantity) * Number(cart1[i].item_price);
        cart1.splice(i, 1);
        break;
      }
    }
    localStorage.setItem("cart1", JSON.stringify(cart1));
    document.getElementById(
      "cart-heading"
    ).innerHTML = `<i class="fa-solid fa-${cart1.length}"></i>`;
    document.getElementById(
      "total-items"
    ).innerText = `${cart1.length} item(s)-Rs.${totalprice}`;
    localStorage.setItem("totalprice", JSON.stringify(totalprice));
    loadcart();
  }
};
