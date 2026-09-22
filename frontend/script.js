const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

if (contactForm) {

    contactForm.addEventListener("submit", async function (event) {

        event.preventDefault();

        const nameInput = document.getElementById("name");
        const emailInput = document.getElementById("email");
        const messageInput = document.getElementById("message");

        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        const message = messageInput.value.trim();

        formMessage.style.display = "block";

        if (name === "" || email === "" || message === "") {

            formMessage.textContent = "Please fill all the fields.";
            formMessage.style.color = "red";

            return;
        }

        formMessage.textContent = "Sending...";
        formMessage.style.color = "white";

        try {

            const response = await fetch(
                "http://localhost:5050/api/contact",
                {
                    method: "POST",

                    headers: {
                        "Content-Type": "application/json"
                    },

                    body: JSON.stringify({
                        name: name,
                        email: email,
                        message: message
                    })
                }
            );

            const data = await response.json();

            if (response.ok) {

                formMessage.textContent =
                    "✓ Message sent successfully!";

                formMessage.style.display = "block";
                formMessage.style.color = "lightgreen";

                contactForm.reset();

            } else {

                formMessage.textContent =
                    "✕ " + (data.message || "Message could not be sent.");

                formMessage.style.display = "block";
                formMessage.style.color = "red";
            }

        } catch (error) {

            console.error("Contact Form Error:", error);

            formMessage.textContent =
                "✕ Unable to connect to the backend.";

            formMessage.style.display = "block";
            formMessage.style.color = "red";
        }

    });

}