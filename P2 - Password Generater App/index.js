let pwd1 = document.getElementById("pwd-1")
let pwd2 = document.getElementById("pwd-2")
let pwd3 = document.getElementById("pwd-3")
let pwd4 = document.getElementById("pwd-4")

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
}

// let copyText = document.querySelector(".copy-text")
// console.log(copyText)

function copyToClipboard(elId) {
    let passwordToCopy = document.getElementById(`${elId}`).innerText 
    navigator.clipboard.writeText(passwordToCopy).then(function(){ 
        console.log("copied to clipboard!")
    }, function(err) {
        console.error("copy failed!")
    })
}

