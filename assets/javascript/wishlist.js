let wl = [];
const wishlist = async (element) => {
  const response = await fetch("./assets/data/items.json");
  let data = await response.json();
  for (let i = 0; i < data.items.length; i++) {
    if (data.items[i].id == element.id) {
      if (localStorage.getItem("wl")) {
        wl = JSON.parse(localStorage.getItem("wl"));
        let m = 0;
        for (let i = 0; i < wl.length; i++) {
          if (element.id == wl[i].id) {
            wl[i].quantity += 1;
            m++;
            alert("Item added to wishlist");
            break;
          }
        }
        if (m == 0) {
          wl.push(data.items[i]);
          data.items[i].quantity += 1;
          alert("Item added to wishlist");
        }
        break;
      } else {
        wl.push(data.items[i]);
        data.items[i].quantity += 1;
        alert("Item added to wishlist");
        break;
      }
    }
  }
  localStorage.setItem("wl", JSON.stringify(wl));
  document.getElementById(
    "wish-heading"
  ).innerHTML = `<i class="fa-solid fa-${wl.length}"></i>`;
  document.getElementById("wish-heading").style.display = "block";
};

const loadwishlist = async () => {
  if (localStorage.getItem("wl")) {
    wl = JSON.parse(localStorage.getItem("wl"));
    console.log(wl)
    let html = "";
    for (let i = 0; i < wl.length; i++) {
      html += `
      <div class="${wl[i].item_class} item">
      <div class="item-image">
        <img src="${wl[i].item_image}" alt="#">
      </div>
      <div class="item-hero ptbs">
        <div class="row-1 ptbs">
          <h2>${wl[i].item_name}</h2>
          <p>
            <i class="fa-light fa-indian-rupee-sign"></i>
            ${wl[i].item_price}
          </p>
        </div>
        <div class="row-2 ptbs">
          <span class="input-btn">
            <input type="number"  placeholder="${wl[i].quantity}"/>
            <button id="${wl[i].id}" onclick="removewl(this)">Remove from wishlist</button>
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
    document.getElementById("wish-block").innerHTML = html;
    document.getElementById("wish-block").style.display = "flex";
    if (html != "") {
      document.getElementById("pagination").style.display = "none";
      document.getElementById("search-block").style.display = "none";
      document.getElementById("cart-block").style.display = "none";
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
    }else {
      alert("wishlist is empty");
      window.location.assign("index.html");
    }
  }else{
    alert("wishlist is empty");
  }
};

const removewl = async (element) => {
  if (localStorage.getItem("wl")) {
    wl = JSON.parse(localStorage.getItem("wl"));
    for (let i = 0; i < wl.length; i++) {
      if (wl[i].id == element.id) {
        wl.splice(i, 1);
        break;
      }
    }
    localStorage.setItem("wl", JSON.stringify(wl));
    loadwishlist();
  }
};
