function start(){
    x = parseInt(prompt("Enter number"));
    document.getElementById("num").innerHTML = x;
    if(x%2==0){
        document.getElementById("num").className = "even"; 
    }
    else{
        document.getElementById("num").className = "odd";
    }
}