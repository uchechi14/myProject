const UserRegister = (event) =>{
    event.preventDefault()

    const email = document.getElementById("registerEmail").value
    const password = document.getElementById("registerPassword").value
    const confirmPassword = document.getElementById("confirmPassword").value


    if (password === confirmPassword) {
        alert("Account Created Succcessfully")
         window.location.href = "Login.html"
    } else {
        alert("Confirm Password")
    }

    const userData = {email, password, confirmPassword}
    localStorage.setItem("usersData", JSON.stringify(userData))

    //  alert("Login Successful")
    // window.location.href = "Login.html"
    console.log(password)
    console.log(email)
}

const UserLogin = (event) =>{

    event.preventDefault()

    const loginEmail = document.getElementById("loginEmail").value
    const loginPassword = document.getElementById("loginPassword").value

    const loginUser = JSON.parse(localStorage.getItem("usersData"))

    if (loginUser && loginUser.email === loginEmail && loginUser.password === loginPassword) {
         alert("Login Successful")
        window.location.href = "index.html"
    }else{
        alert("Invalid email or password")
    }

}


