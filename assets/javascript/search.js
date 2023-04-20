const search = async () => {
  const response = await fetch("./assets/data/items.json");
  const data = await response.json();
  // const search = document.getElementById("search-icon").value;
  // let url = location.href
  // url = url.split("?")
  // if( url[0] != "http://127.0.0.1:5501/search.html"){
  //   // location.replace(`http://127.0.0.1:5501/search.html?search=${search}`);
  //   window.location.href = `http://127.0.0.1:5501/search.html?search=${search}`
  // }
  let obj = new URLSearchParams(location.search)
  let search_query = obj.get("search")
  let value = Number(
    document.getElementsByClassName("p-active")[0].getAttribute("value")
  );
  let a = value * 4 - 4;
  let html = "";
  let arr = [];
  data.items.forEach((element) => {
    if (element.item_name.toLowerCase().match(search_query.toLowerCase()) && search_query) {
      arr.push(element);
    }
  });
  setpagination(arr);
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
    if (i < value * 4 && i >= a) {
      html += `
            <div class="${arr[i].item_class} item" onclick="showproduct(${arr[i].id})">
                    <div class="item-image">
                      <img
                        src="${arr[i].item_image}"
                        alt="#"
                      />
                    </div>
                    <div class="i-2">
                      <div class="item-hero ptbs">
                        <div class="row-1 ptbs">
                        <h2>${arr[i].item_name}</h2>
                          <p>
                            <i class="fa-light fa-indian-rupee-sign"></i>
                            ${arr[i].item_price}
                          </p>
                        </div>
                        <div class="item-para ptbs">
                            Lorem ipsum dolor sit amet consecsearch-icontetur adipisicing elit. Aliquid molestiae dicta perferendis voluptatum in, eius aspernatur iusto facere fuga sit rem quo ullam fugiat voluptates dolor facilis qui, earum dolores laborum unde aperiam quae?
                        </div>
                        <div class="row-2 ptbs">
                          <span class="input-btn">
                            <input type="number" />
                            <button onclick="cart(this)" id="${arr[i].id}">
                              Add to Cart
                            </button>
                          </span>
                          <span class="icons">
                            <i
                              class="fa-light fa-heart heart"
                              onclick="wishlist(this)"
                              id="${arr[i].id}"
                            ></i>
                            <i
                              class="fa-thin fa-arrow-right-arrow-left arrow"
                            ></i>
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
                  </div>
            `;
    }
  }
  document.getElementById('search-icon').value = search_query
  document.getElementById("search-block").innerHTML = html;
  if (html != "") {
    document.getElementById("search-block").style.display = "flex";
    document.getElementById("wish-block").style.display = "none";
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
  } else {
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
  }
};

const setpagination = (arr) => {
  let pagination_html = "";
  for (let j = 0; j < arr.length / 4; j++) {
    if (j == 0) {
      pagination_html += `<li class="link p-active" value="${
        j + 1
      }" onclick="pActive(this)">${j + 1}</li>`;
    } else {
      pagination_html += `<li class="link" value="${
        j + 1
      }" onclick="pActive(this)">${j + 1}</li>`;
    }
  }
  if (pagination_html != "") {
    document.getElementById("pagination-list").innerHTML = pagination_html;
    document.getElementById("pagination").style.display = "flex";
  } else {
    document.getElementById("pagination").style.display = "none";
  }
};

const showlist = async () => {
  let elem = document.getElementById("search-block");
  var link = document.createElement("link");
  link.rel = "stylesheet";
  link.type = "text/css";
  link.href = "./assets/list.css";
  elem.appendChild(link);
};

const showgrid = async () => {
  let elem = document.getElementById("search-block");
  if (elem.lastElementChild.classList.contains("item")) {
    return;
  } else {
    elem.removeChild(elem.lastElementChild);
  }
};

// Url change
const url = async()=>{
  const search = document.getElementById("search-icon").value;
  window.location.href = `./search.html?search=${search}`
}

// Search page loading funtion
const load = async()=>{
  search("search-icon")
}
