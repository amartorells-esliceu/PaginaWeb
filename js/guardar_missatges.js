document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Evita l'enviament del formulari per defecte

    // Obtenim els valors del formulari
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Creem un objecte amb el missatge
    const newMessage = {
        name: name,
        email: email,
        message: message,
        timestamp: new Date().toLocaleString() // Data i hora actual
    };

    // Recuperem missatges antics de LocalStorage
    const messages = JSON.parse(localStorage.getItem("missatges")) || [];

    // Afegim el nou missatge
    messages.push(newMessage);

    // Guardem els missatges actualitzats a LocalStorage
    localStorage.setItem("missatges", JSON.stringify(messages));

    alert("El missatge s'ha guardat correctament!");

    // Neteja el formulari
    document.getElementById("contact-form").reset();
});
