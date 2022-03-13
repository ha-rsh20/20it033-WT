function cal(){
    x = parseInt(prompt("Enter the value:"));
    a = 0;
    b = 1;
    n = "";
    if(x!=0){
        if(x>=1){
            n = n+"f(1):  0<br>";
        }
        if(x>1){
            n = n+"f(2):  <span>1</span><br>";
        }
    }
    x=x-2;
    for(i=0;i<x;i++){
        prime = 0;
        c = a+b;
        a = b;
        b = c;
        for(j=1;j<=c;j++)
        {
            if(c%j==0){
                prime++;
            }
        }
        if(prime<=2){
            n = n+"f("+(i+3)+"):  <span>"+c+"</span><br>";
        }
        else{
            n = n+"f("+(i+3)+"):  "+c+"<br>";
        }
    }
    document.getElementById("fibbo").innerHTML = n; 
}
