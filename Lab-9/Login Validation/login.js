function error(){
    const email = document.getElementById('typeEmailX').value;
    const pass = document.getElementById('typePasswordX').value;
    let submit_flag = true;

    //document.getElementById('test').classList.add('add-border');
    //console.log('email:'+email+',pass:'+pass);
    if(email == ''){
        document.getElementById('div-email').classList.add('add-border');
        document.getElementById('id_email').classList.add('error-show');
        submit_flag = false;
    }
    else{
        document.getElementById('id_email').classList.remove('error-show');
        document.getElementById('div-email').classList.remove('add-border');
    }
    if(pass == ''){
        document.getElementById('id_pass').classList.add('error-show');
        document.getElementById('div-pass').classList.add('add-border');
        submit_flag = false;
    }
    else{
        document.getElementById('id_pass').classList.remove('error-show');
        document.getElementById('div-pass').classList.remove('add-border');
    }
    return submit_flag;
}