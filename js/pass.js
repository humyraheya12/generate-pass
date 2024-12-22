function generatePassword(length = 12){
    if (length < 12) {
        throw new Error("Password length must be at least 12 characters.");
    }
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";
    let password = "";
    for(i = 0; i < length; i++){
        const randomIndex = Math.floor(Math.random() * chars.length);
        password += chars[randomIndex];
    }
    return password;
    
}

function copyToClipboard(text){
    navigator.clipboard.writeText(text).then(() => {
        alert("Password copied to clipboard!")
    }).catch(err =>{
        console.log("Failed to copy: ", err)
    })
}

document.getElementById("generateBtn").addEventListener("click",()=> {
    const passwordField = document.getElementById("password");
    const newPassword = generatePassword();
    passwordField.value = newPassword;
})
document.getElementById("copyBtn").addEventListener("click", () => {
    const passwordField = document.getElementById("password");
    if(passwordField.value){
        copyToClipboard(passwordField.value)
    }
    else{
        alert("Generate a password first!")
    }
})
