const search = async (elem) => {
  const response = await fetch("./assets/data/items.json");
  const data = await response.json();
  const search = document.getElementById("search-icon").value;
  console.log(search);
  let value = Number(
    document.getElementsByClassName("p-active")[0].getAttribute("value")
  );
  let a = value * 4 - 4;
  let html = "";
  let arr = [];
  data.items.forEach((element) => {
    if (element.item_name.toLowerCase().match(search.toLowerCase()) && search) {
      arr.push(element);
    }
  });
  if(elem.id == "search-icon"){
    setpagination(arr);
  }
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
    if (i < value * 4 && i >= a) {
      html += `
      <div class="${arr[i].item_class} item">
      <div class="item-image">
        <img src="${arr[i].item_image}" alt="#">
      </div>
      <div class="item-hero ptbs">
        <div class="row-1 ptbs">
          <h2>${arr[i].item_name}</h2>
          <p>
            <i class="fa-light fa-indian-rupee-sign"></i>
            ${arr[i].item_price}
          </p>
        </div>
        <div class="row-2 ptbs">
          <span class="input-btn">
            <input type="number" />
            <button onclick="cart(this)" id="${arr[i].id}" >Add to Cart</button>
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
  }
  
  document.getElementById("search-block").innerHTML = html;
  if (html != "") {
    console.log("filled")
    document.getElementById("search-block").style.display = "flex";
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
    console.log("empty")
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

const setpagination = (arr) =>{
  let pagination_html = ""
  for (let j = 0; j < (arr.length/4); j++) {
    if(j == 0){
      pagination_html += `<li class="link p-active" value="${j+1}" onclick="pActive(this)">${j+1}</li>`;
    }
    else{
      pagination_html += `<li class="link" value="${j+1}" onclick="pActive(this)">${j+1}</li>`;
    }
  }
  if(pagination_html != ""){
    document.getElementById("pagination-list").innerHTML = pagination_html
    document.getElementById("pagination").style.display = "flex";
  }
  else{
    document.getElementById("pagination").style.display = "none";
  }
}