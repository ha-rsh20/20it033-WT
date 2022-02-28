function print(){
    x = parseInt(prompt("Enter the value:"));
    let n = "";
    for(i=1;i<=x;i++){
        n = n+i+"<br>"
    }
    document.getElementById("txt").innerHTML = n;
}