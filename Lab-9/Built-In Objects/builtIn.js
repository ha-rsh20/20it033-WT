function number(){
    num = parseInt(prompt("Enter number"));
    //document.getElementById('numberid').classList.add('show');
    document.getElementById('id1').innerHTML = num;
}
function string(){
    var st = String(prompt("Enter String"));
    //document.getElementById('stringid').classList.add('show');
    document.getElementById('id2').innerHTML = st.toLocaleUpperCase();
}
function date(){
    var d = new Date();
    //document.getElementById('dateid').classList.add('show');
    document.getElementById('id3').innerHTML = d.toLocaleString();
}
function math(){
    n = parseInt(prompt("Enter number"));
    //document.getElementById('mathid').classList.add('show');
    document.getElementById('id4').innerHTML = Math.pow(n,2);
}
function array(){
    var fruits = [ "apple", "orange", "mango"];
    n = parseInt(prompt("Enter number"));
    //document.getElementById('arrayid').classList.add('show');
    if(n>0){
        if(n%4==0){
            n/=4;
        }
        else{
            n%=4;
        }
        document.getElementById('id5').innerHTML = fruits[n-1];
    }
}