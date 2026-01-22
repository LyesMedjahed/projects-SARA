
export function initPaymentPopup(target) {
    const payment = document.getElementById("payment");
    const close = document.getElementById("close");

    if (!payment || !close) return;

    let buttons = [];

    // Cas 1 : on passe un sélecteur ".buy-now"
    if (typeof target === "string") {
        buttons = document.querySelectorAll(target);
    }
    // Cas 2 : on passe un bouton HTML
    else if (target instanceof HTMLElement) {
        buttons = [target];
    }
    // Cas 3 : on passe une NodeList
    else if (target instanceof NodeList) {
        buttons = target;
    }

    if (!buttons.length) return;

    buttons.forEach(button => {
        button.addEventListener("click", (e) => {
            e.preventDefault();
            payment.style.display = "flex";
        });
    });

    close.addEventListener("click", () => {
        payment.style.display = "none";
    });
}


