let pwd1 = document.getElementById("pwd-1")
let pwd2 = document.getElementById("pwd-2")
let pwd3 = document.getElementById("pwd-3")
let pwd4 = document.getElementById("pwd-4")

let pwdEl = document.getElementsByClassName("pwd-copy")
for(let i=0; i<pwdEl.length; i++) {
    pwdEl[i].style.display = "none"
}

function generatePasswordHelper() {
    let len = 12
    let pwdChars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let password = ""
    
    for(let i=0;i<len;i++){
        var pwdRandomNumber = Math.floor(Math.random()*pwdChars.length)
        password += pwdChars.substring(pwdRandomNumber, pwdRandomNumber+1)
    }
    
    return password
}

function generatePassword() {
    pwd1.textContent = generatePasswordHelper()
    pwd2.textContent = generatePasswordHelper()
    pwd3.textContent = generatePasswordHelper()
    pwd4.textContent = generatePasswordHelper()
    document.getElementsByTagName("hr")[0].removeAttribute("hidden")
    for(let i=0; i<pwdEl.length; i++) {
        pwdEl[i].style.display = null
        console.log(pwdEl[i].style.display)
    }    
}

function copyToClipboard(elId) {
    let copyTag = document.getElementById(`${elId}-div`)
    console.log(copyTag)
    let passwordToCopy = document.getElementById(`${elId}`).innerText
    navigator.clipboard.writeText(passwordToCopy).then(function(){
        copyTag.dataset.tooltip = "Copied!"
        setTimeout(function(){
            copyTag.dataset.tooltip = "Copy"
        }, 2500);
        console.log("copied to clipboard!")
    }, function(err) {
        console.error("copy failed!")
    })
}

