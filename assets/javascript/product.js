const showproduct = async(id) =>{
    localStorage.setItem(`product`, id);
    window.location.assign("./product.html")
}

const fetchproduct = async() =>{
    const response = await fetch("./assets/data/items.json");
    const data = await response.json();
    data.items.forEach((element) => {
        if(element.id==localStorage.getItem('product')){
            console.log("Helllo")
            document.getElementById("main-image").innerHTML = `<img src="${element.item_image}" alt="#">`
            document.getElementById('cut-price').innerHTML =
            `<i class="fa-solid fa-indian-rupee-sign"></i>
            ${element.discount_price}
            `
            document.getElementById('actual-price').innerHTML =
            `<i class="fa-solid fa-indian-rupee-sign"></i>
            ${element.item_price}
            `
            document.getElementById('product-heading').innerHTML = `${element.item_name}`
            let imgData = document.getElementsByClassName('side-img');
            for(let i=0; i<imgData.length;i++){
                imgData[i].innerHTML = `<img src="${element.item_image}" alt="#">`
            }
        }
    });
}

