function login()
{
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    if(email === "ahmed@lol.com" && password === "khalaf")
    {
        window.open("../html/home.html");
    }
    else
    {
        document.getElementById('display').innerHTML = "email or password is invalid!!";
        document.getElementById('display').style.color = "red";
    }
}