function checkpassword()
{
    var password = document.getElementById('password').value;
    var cpassword = document.getElementById('cpassword').value;

    if(password != cpassword)
    {
      document.getElementById('display').innerHTML = "email or password is invalid!!";
      document.getElementById('display').style.color = "red";
    }
}