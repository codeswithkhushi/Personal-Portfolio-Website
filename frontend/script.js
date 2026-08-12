const form = document.querySelector("#contactForm");
const message = document.querySelector("#formMessage");

if (form) {

    form.addEventListener("submit", async function(e) {

        e.preventDefault();

        const name = document.querySelector("#name").value;
        const email = document.querySelector("#email").value;
        const text = document.querySelector("#message").value;

        try {

           const response = await fetch("https://backend-up08.onrender.com/api/contact", {

                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({
                    name: name,
                    email: email,
                    message: text
                })

            });

            const data = await response.json();

            if (response.ok) {

                message.style.color = "green";
                message.innerHTML = "Thank you! Your message has been sent.";

                form.reset();

            } else {

                message.style.color = "red";
                message.innerHTML = data.message;

            }

        } catch (error) {

            message.style.color = "red";
            message.innerHTML = "Server is not running.";

            console.log(error);
        }

    });

}
// Load Projects from Backend

const projectsContainer = document.querySelector("#projectsContainer");

async function loadProjects() {

    try {

      const response = await fetch("https://backend-up08.onrender.com/api/projects");

        const projects = await response.json();

        projectsContainer.innerHTML = "";

        projects.forEach(project => {

            const projectCard = document.createElement("div");

            projectCard.className = "project-card";

            projectCard.innerHTML = `
                <h3>${project.title}</h3>

                <p>
                    ${project.description}
                </p>

                <p>
                    <b>Technology:</b> HTML, CSS, JavaScript, Python
                </p>
            `;

            projectsContainer.appendChild(projectCard);

        });

    } catch (error) {

        console.log("Error loading projects:", error);

        projectsContainer.innerHTML =
            "<p>Unable to load projects.</p>";

    }

}

loadProjects();