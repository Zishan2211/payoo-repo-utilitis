document.getElementById('login-btn').addEventListener('click',function(event){
    event.preventDefault();

    const inputEmail = document.getElementById('input-email').value;
    const inputPass = document.getElementById('input-pass').value;

    if(inputPass === '11'){
        alert("you are login successfuly");
        window.location.href = "/home.html"
    }
    else{
        alert('worng email or password please try again');
    }
})