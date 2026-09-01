const mainInvItems = document.querySelectorAll(".main-inv-item");

function invShower() {
    mainInvItems.forEach(item => {
        item.addEventListener("click", () => {
            const innerInv = item.querySelector(".inner-inv");

            if (innerInv) {
                if (innerInv.style.display === "block") {
                    innerInv.style.display = "none";
                } else {
                    innerInv.style.display = "block";
                }
            }
        });
    });
}

invShower();
