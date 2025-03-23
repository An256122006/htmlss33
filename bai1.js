let inputs=document.getElementById("input");
let bn=document.getElementById("btn");
bn.onclick=function(){
    if(inputs.type=="text"){
        inputs.type="password";
    }else{
        inputs.type="text";
    }
}