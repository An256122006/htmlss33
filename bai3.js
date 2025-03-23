let dish = [
    { id: 1, name: 'Rau sạch', category: 'Đồ ăn' },
    { id: 2, name: 'Thịt lợn', category: 'Đồ ăn' },
    { id: 3, name: 'Pepsi không calo', category: 'Nước' },
    { id: 4, name: 'Cocacola', category: 'Nước' },
    { id: 5, name: 'Cờ lê', category: 'Dụng cụ' },
    { id: 6, name: 'Tuy vít', category: 'Dụng cụ' },
];
let div = document.getElementById("body");
let input = document.getElementById("product");
let bn = document.getElementById("btn");
function up() {
    div.innerHTML = "";
    dish.forEach(function (element) {
        div.innerHTML += `<li><b>ten do an:</b> ${element.name} - <b>danh muc:</b> ${element.category}</li>`;
    });
};
up();
bn.onclick = function () {
    let inputvalue = input.value;
    let dishs = dish.filter(element => element.category == inputvalue);
    div.innerHTML = "";
    if (inputvalue == "choose") {
        dish.forEach(function (element) {
            div.innerHTML += `<li><b>ten do an:</b> ${element.name} - <b>danh muc:</b> ${element.category}</li>`;
        });
    } else {
        dishs.forEach(function (element) {
            div.innerHTML += `<li><b>ten do an:</b> ${element.name} - <b>danh muc:</b> ${element.category}</li>`;
        });
    }
}