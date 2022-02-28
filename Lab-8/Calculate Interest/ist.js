function cal(){
    x = parseInt(prompt("Enter value of principal:"));
    y = parseInt(prompt("Enter value of rate:"));
    z = parseInt(prompt("Enter value of time:"));
    i = (x*y*z)/100;
    document.getElementById("p").innerHTML = x;
    document.getElementById("r").innerHTML = y;
    document.getElementById("t").innerHTML = z;
    document.getElementById("i").innerHTML = i;
}