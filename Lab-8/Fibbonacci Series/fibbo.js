function cal(){
    x = parseInt(prompt("Enter the value:"));
    a = 0;
    b = 1;
    n = "";
    if(x!=0){
        if(x>=1){
            n = n+"f(1):0<br>";
        }
        if(x>1){
            n = n+"f(2):1<br>";
        }
    }
    x=x-2;
    for(i=0;i<x;i++){
        c = a+b;
        a = b;
        b = c;
        n = n+"f("+(i+3)+"):"+c+"<br>";
    }
    document.getElementById("fibbo").innerHTML = n;
}
