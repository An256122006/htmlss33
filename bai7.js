const products = [
    { id: 1, name: 'Điện thoại Samsung Galaxy A54 <i class="fa-solid fa-phone"></i>', price: 7490000, image: 'https://cdn.tgdd.vn/Products/Images/42/335177/samsung-galaxy-a56-5g-green-thumb-600x600.jpg' },
    { id: 2, name: 'Laptop Dell Inspiron 15 <i class="fa-solid fa-laptop"></i>', price: 15990000, image: 'https://bizweb.dktcdn.net/100/446/400/products/laptop-dell-vostro-3490-1-gia-loc.jpg?v=1699258008053' },
    { id: 3, name: 'Tai nghe AirPods Pro <i class="fa-solid fa-headphones"></i>', price: 4990000, image: 'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/airpods-pro-2-hero-select-202409_FMT_WHH?wid=750&hei=556&fmt=jpeg&qlt=90&.v=1724041668836' },
    { id: 4, name: 'Đồng hồ thông minh Apple Watch <i class="fa-solid fa-clock"></i>', price: 8990000, image: 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MXM23ref_FV99_VW_34FR+watch-case-46-aluminum-jetblack-nc-s10_VW_34FR+watch-face-46-aluminum-jetblack-s10_VW_34FR?wid=752&hei=720&bgc=fafafa&trim=1&fmt=p-jpg&qlt=80&.v=TnVrdDZWRlZzTURKbHFqOGh0dGpVRW5TeWJ6QW43NUFnQ2V4cmRFc1VnYUdWejZ5THhpKzJwRmRDYlhxN2o5aXB2QjR6TEZ4ZThxM3VqYkZobmlXM3RGNnlaeXQ4NGFKQTAzc0NGeHR2aVk0VEhOZEFKYmY1ZHNpalQ3YVhOWk9WVlBjZVFuazArV21YaFcvTVJ5dzR2eDMxaWg4TFhITTVrUW41Z084dENpYmZuSTdFUnErS0g3SWYxazQrNDdyRzE3K0tORmZaUy9vOVdqTEp2dmJNL3gwYlE3R0w4Z1RCbG9qQTd1MjYyL1owaE5aVCt2Ri82aDRacTg0bXlaZA' },
    { id: 5, name: 'Máy ảnh Canon EOS M50 <i class="fa-solid fa-camera"></i>', price: 12490000, image: 'https://cdn.vjshop.vn/may-anh/mirrorless/canon/canon-eos-r50/black-18-45/canon-eos-r50-lens-18-45mm-500x500.jpg' },
    { id: 6, name: 'Loa Bluetooth JBL Flip 5 <i class="fa-solid fa-volume-xmark"></i>', price: 2190000, image: 'https://bizweb.dktcdn.net/100/445/498/products/jbl-go-4-3-4-left-black-48178-x1.jpg?v=1732646465910' },
    { id: 7, name: 'Bàn phím cơ Logitech G Pro <i class="fa-solid fa-keyboard"></i>', price: 2490000, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1MvD76Mt-Ne0IC2DPMMsTZpG05xDxJOzkqw&s' },
    { id: 8, name: 'Chuột không dây Logitech MX Master <i class="fa-solid fa-computer-mouse"></i>', price: 1890000, image: 'https://product.hstatic.net/200000722513/product/h_mx_master_3_wireless__graphite_.jpg_1e5491e35f754dcc90b90582a9c3be95_ca0c63ca59de4ed1b4d46fcc5c81c1ed.png' }
];
let div = document.getElementById("up");
let bn = document.getElementById("btn");
let divs = document.getElementById("row2");
let hide = document.getElementById("p");
let hideprice = document.getElementById("price1");
let showprice = document.getElementById("price2");
function up() {
    div.innerHTML = "";
    products.forEach(function (element) {
        div.innerHTML += `<div class="row1"><img src="${element.image}" alt="">
                <h3>${element.name}</h3>
                <div id="money">${element.price.toLocaleString('vi-VN')} VND</div>
                <div><button class="buy" onclick="upcart(${element.id})">them san pham</button></div></div>`;
    });
};
up();
let cart = [];
function updateCart() {
    hide.style.display = "none";
    divs.innerHTML = "";
    cart.forEach(element => {
        divs.innerHTML += `<div class="rowcart">
            <div>${element.name}</div>
            <div>
                <button class="tru" onclick="tru(${element.id})">-</button>
                ${element.quantity}
                <button class="tru" onclick="cong(${element.id})">+</button>
                <button class="xoa" onclick="removeItem(${element.id})">x</button>
            </div>
        </div>`;
    });
    tongtien();
}
function upcart(id) {
    let cartindex = cart.findIndex(b => b.id === id);
    if (cartindex !== -1) {
        cart[cartindex].quantity += 1;
    } else {
        cart.push({ ...products[id - 1], quantity: 1 });
    }
    updateCart();
};
function tru(id) {
    let cartindex = cart.findIndex(b => b.id === id);
    if (cart[cartindex].quantity > 1) {
        cart[cartindex].quantity--;
    }
    updateCart();
};
function cong(id) {
    let cartindex = cart.findIndex(b => b.id === id);
    cart[cartindex].quantity++;
    updateCart();
};
function removeItem(id) {
    cart = cart.filter(element => element.id !== id);
    updateCart();
    if (cart.length == 0) {
        hide.style.display = "flex";
    }
};
function tongtien() {
    hideprice.style.display = "none";
    let sum = 0;
    cart.forEach(function (element) {
        return sum += element.price * element.quantity;
    });
    showprice.innerHTML = `Tong tien:${sum.toLocaleString('vi-VN')} VND`;
};
bn.onclick=function(){
    if(cart.length>0){
        alert("thanh toan thanh cong");
    }else{
        alert("gio hang trong");
    }
};