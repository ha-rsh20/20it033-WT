class x {
    static c = 0;
    static r = 0;
    static checked() {
      x.c++;
    }
    static radio(){
      x.r++;
    }
   }
function check(){
    x.checked();
}
function rad(){
    x.radio();
    //console.log(x.r);
}
function error(){
    const fname = document.getElementById('idfname').value;
    const lname = document.getElementById('idlname').value;
    const date = document.getElementById('idbdate').value;
    const email = document.getElementById('idemail').value;
    const phone = document.getElementById('idphone').value;
    const subject = document.getElementById('sub').value;
    let submit_flag = true;

    //document.getElementById('test').classList.add('add-border');
    //console.log('lname:'+lname);
    //console.log('1');
    if(fname == ''){
        document.getElementById('idfname').classList.add('add-border');
        document.getElementById('fnameid').classList.add('error-show');
        submit_flag = false;
    }
    else{
        //console.log('fname');
        document.getElementById('fnameid').classList.remove('error-show');
        document.getElementById('idfname').classList.remove('add-border');
    }
    //console.log('2');
    if(lname == ''){
        //console.log('error in lname!');
        document.getElementById('lnameid').classList.add('error-show');
        document.getElementById('idlname').classList.add('add-border');
        submit_flag = false;
    }
    else{
        //console.log('lname');
        document.getElementById('lnameid').classList.remove('error-show');
        document.getElementById('idlname').classList.remove('add-border');
    }
    //console.log('3');
    if(date == ''){
        document.getElementById('idbdate').classList.add('add-border');
        document.getElementById('bdateid').classList.add('error-show');
        submit_flag = false;
    }
    else{
        document.getElementById('bdateid').classList.remove('error-show');
        document.getElementById('idbdate').classList.remove('add-border');
    }
    //console.log('4');
    if(x.r==0){
        document.getElementById('genid').classList.add('error-show');
        submit_flag = false;
    }
    else{
        document.getElementById('genid').classList.remove('error-show');
    }
    //console.log('5');
    if(email == ''){
        document.getElementById('idemail').classList.add('add-border');
        document.getElementById('emailid').classList.add('error-show');
        submit_flag = false;
    }
    else{
        document.getElementById('emailid').classList.remove('error-show');
        document.getElementById('idemail').classList.remove('add-border');
    }
    //console.log('6');
    if(phone == ''){
        document.getElementById('idphone').classList.add('add-border');
        document.getElementById('phoneid').classList.add('error-show');
        submit_flag = false;
    }
    else{
        document.getElementById('phoneid').classList.remove('error-show');
        document.getElementById('idphone').classList.remove('add-border');
    }
    //console.log('7');
    if(subject == 0){
        document.getElementById('sub').classList.add('add-border');
        document.getElementById('subid').classList.add('error-show');
        submit_flag = false;
    }
    else{
        document.getElementById('subid').classList.remove('error-show');
        document.getElementById('sub').classList.remove('add-border');
    }
    //console.log('8');
    if(x.c%2==0){
        //console.log(x.c%2);
        document.getElementById('idcheck').classList.add('add-border');
        document.getElementById('checkid').classList.add('error-show');
        submit_flag = false;
    }
    else{
        //console.log(x.c%2);
        document.getElementById('checkid').classList.remove('error-show');
        document.getElementById('idcheck').classList.remove('add-border');
    }
    return submit_flag;
}