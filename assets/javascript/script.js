const blog_data = async () => {
  const response = await fetch("./assets/data/blogs.json");
  let data = await response.json();
  let html = "";
  data.blog.forEach((element) => {
    html += `
        <div class="card">
        <div class="image">
            <img src="${element.img}">
        </div>
        <div class="details">
            <div class="admin">
                <i class="fa-solid fa-user"></i>
                ${element.type}
            </div>
            <div class="msg">
                <i class="fa-solid fa-message-dots"></i>
                ${element.msg}
            </div>
            <div class="views">
                <i class="fa-solid fa-eye"></i>
                ${element.views}
            </div>
        </div>
        <div class="text">
            <h3 class="ptbs">${element["card-heading"]}</h3>
            <p>${element.text}
            </p>
        </div>
        <div class="readmore">
            <a href="#">${element.readmore}</a>
        </div>
    </div>
        `;
  });

  document.getElementById("cards").innerHTML = html;
};

const categories_data = async () => {

  const response = await fetch("./assets/data/items.json");
  let data = await response.json();
  let html = "";
  data.items.forEach((element) => {
    if (element.type == "categories") {
      html += `
        <div class="item i-1">
        <div class="image">
        <img
            src="${element.item_image}"
            alt=""
        />
        </div>
        <div class="row-1">
        <div class="item-name">${element.item_name}</div>
        <div class="item-price">
            <i class="fa-light fa-indian-rupee-sign"></i>
            ${element.item_price}
        </div>
        </div>
        <div class="row-2">
        <span class="input-btn">
            <button onclick="cart(this)" id="${element.id}" >Add to Cart</button>
        </span>
        <span class="icons">
            <i class="fa-light fa-heart heart" onclick="wishlist(this)" id="${element.id}"></i>
            <i class="fa-thin fa-arrow-right-arrow-left arrow"></i>
        </span>
        </div>
    </div>
  `;
    }
  });
  document.getElementById("items").innerHTML = html;
};

const products_data = async () => {
  const response = await fetch("./assets/data/items.json");
  const data = await response.json();
  let html = "";
  data.items.forEach((element) => {
    if (element.type == "products") {
      html += `
        <div class="${element.item_class} item">
        <div class="item-image">
          <img src="${element.item_image}" alt="#">
        </div>
        <div class="item-details ptbs">
          <div class="item-name">${element.item_detail}</div>
          <div class="item-model">${element.item_model}</div>
        </div>
        <div class="item-hero ptbs">
          <div class="row-1 ptbs">
            <h2>${element.item_name}</h2>
            <p>
              <i class="fa-light fa-indian-rupee-sign"></i>
              ${element.item_price}
            </p>
          </div>
          <div class="row-2 ptbs">
            <span class="input-btn">
              <input type="number" />
              <button onclick="cart(this)" id="${element.id}">Add to Cart</button>
            </span>
            <span class="icons">
            <i class="fa-light fa-heart heart" onclick="wishlist(this)" id="${element.id}"></i>
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
  });

  document.getElementById("items-block").innerHTML = html;
};
const buy_data = async () => {
  const response = await fetch("./assets/data/buy.json");
  const data = await response.json();
  let html = "";
  data.buy.forEach((element) => {
    html += `
    <div class=${element.class_type}>
      <img src="${element.item_image}" alt="#">
      <p>${element.text}</p>
    </div>
    `;
  });
  document.getElementById("image-block").innerHTML = html;
};

blog_data();
categories_data();
products_data();
buy_data();
