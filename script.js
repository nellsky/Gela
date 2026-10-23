function checkPassword() {
    
    let password = document.getElementById("password").value;
    
    let correctPassword = "102907";
    
    if (password === correctPassword) {
        
        document.getElementById("loginScreen")
            .classList.add("hidden");
        
        document.getElementById("birthdayScreen")
            .classList.remove("hidden");
        
    } else {
        
        document.getElementById("error").innerHTML =
            "Oops! wrong ka po 🥹";
        
    }
}


function playVoice() {
    const voice = document.getElementById("voiceMessage");
    
    voice.play().catch(function(error) {
        console.log("Audio error:", error);
    });
}