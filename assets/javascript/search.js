const search = async () => {
  const response = await fetch("./assets/data/items.json");
  const data = await response.json();
  const search = document.getElementById("search-icon").value;
  let html = "";
  data.items.forEach((element) => {
    if (element.item_name.toLowerCase().match(search.toLowerCase())) {
      html += `
            <div class="${element.item_class} item">
        <div class="item-image">
          <img src="${element.item_image}" alt="#">
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
              <button>Add to Cart</button>
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
  });

  document.getElementById('search-block').innerHTML = html;
  if(html!=""){
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
