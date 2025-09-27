function getUser(){
    const user = document.querySelector("#user")
    const emailLocal = localStorage.getItem("user")
    user.innerText = emailLocal
}
getUser()

function logout(){
    const buttonLogout = document.querySelector("#logout")
    buttonLogout.addEventListener("click",()=>{
        localStorage.removeItem("user")
        const user = document.querySelector("#user")
        user.innerText = ""
    })
    // buttonLogout.addEventListener("click",()=>{
       
    //     localStorage.clear()
    //        const email = document.querySelector("#email")
    //        email.innerText = ""
    // })
}
logout()