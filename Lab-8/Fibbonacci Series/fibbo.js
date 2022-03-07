function cal(){
    x = parseInt(prompt("Enter the value:"));
    a = 0;
    b = 1;
    n = "1<br>";
    for(i=0;i<x;i++){
        c = a+b;
        a = b;
        b = c;
        n = n+c+"<br>";
    }
    document.getElementById("fibbo").innerHTML = n;
}