function doSum(){
    x = parseInt(prompt("Enter value first:"));
    y = parseInt(prompt("Enter value second:"));
    sum = x+y;
    document.getElementById("v1").innerHTML = x;   
    document.getElementById("v2").innerHTML = y;   
    document.getElementById("sum").innerHTML = sum;   
}
