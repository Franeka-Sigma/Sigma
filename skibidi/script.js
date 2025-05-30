
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("sigma");
    if (form) {
        let diw = null;
        let diw2 = null;
        
    
        form.addEventListener("submit", function (event) {
            event.preventDefault();
            const main = document.querySelector("#main1");
            let email = document.querySelector("#email").value;
            let haslo = document.querySelector("#haslo").value;
            
            
            if (!diw || !diw2) {
                diw = document.createElement("div");
                diw.style.background = "linear-gradient(to right, #ffffff, #000000)";
                diw.style.width = "20%";
                diw.style.height = "1rem";
                diw.style.float = "left";
                diw.innerHTML = `Email: ${email}`;
                main.appendChild(diw);

                diw2 = document.createElement("div");
                diw2.style.background = "linear-gradient(to left, #ffffff, #000000)";
                diw2.style.width = "80%";
                diw2.style.height = "1rem";
                diw2.style.float = "left";
                diw2.style.color = "#ffffff";
                diw2.innerHTML = `Hasło: ${haslo}`;
                main.appendChild(diw2);
            };
        });
    };
});