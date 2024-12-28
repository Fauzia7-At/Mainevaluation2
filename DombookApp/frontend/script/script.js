document.addEventListener("DOMContentLoaded",() => { 
    const loginForm = document.queerySelector("#login-form");
    if (loginForm){
        loginForm.addEventListener("submit",(event) => {
            event.preventDefault();
            const email = document.querySelector("#email").value.trim();
            const password = document.querySelector("#password").value.trim();
            const errorMessage = document.querySelector("#errorMessage").value.trim();
            if(email=== "admin@empher.com" && password === "empher@123"){
                alert("Login as Admin");
                localStorage.setItem("LoginData", JSON.stringify({role: "admin",email}));
                window.location.href = "books.html";

            } else {
                errorMessage.textContent = "Invalid email or password. Please try again.";
            }
        });
    }
    })