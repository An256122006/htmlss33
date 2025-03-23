let inputs= document.getElementById("text");
let bn = document.getElementById("btn");
let div = document.getElementById("body");
bn.onclick = function(){
    let inputvalue = inputs.value;
    let index = inputvalue.length;
    div.textContent = `${index} ky tu`;
}