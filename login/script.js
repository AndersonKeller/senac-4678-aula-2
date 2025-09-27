const form = document.querySelector("form")


form.addEventListener("submit",(event)=>{
    
    event.preventDefault()
    //console.log(window)
    
    // const email = document.querySelector("#email").value
    // const password = document.querySelector("#password").value
    
    // console.log(password,"password")
    // if(email != "" && password != ""){
    //    //alert("login efetuado com sucesso!")
    //     localStorage.setItem("user",email)
    //     window.location.href = "/"
    // }else{
    //     alert("login inválido")
    // }
})



form.addEventListener("submit",(event)=>{
     event.preventDefault()
     const email = document.getElementById("email")
     console.log(email.value,"email")
     const password = document.querySelector("#password")
     console.log(password.value)
     if(email.value != "" && password.value != ""){
        //window.localStorage.setItem("user",email.value)
         localStorage.setItem("user",email.value)
         window.location.href = "/"
     }else{
        alert("login inválido")
     }
})

