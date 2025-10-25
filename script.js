document.addEventListener("DOMContentLoaded", function() {

    /*  Particle Background */
    if (typeof particlesJS !== 'undefined') {
        particlesJS("particles-js", {
            particles: {
                number: { value: 80, density: { enable: true, value_area: 800 } },
                color: { value: "#ffffff" },
                shape: { type: "circle" },
                opacity: { value: 0.5, random: true },
                size: { value: 3, random: true },
                line_linked: { enable: true, distance: 120, color: "#ffffff", opacity: 0.4, width: 1 },
                move: { enable: true, speed: 2 }
            },
            interactivity: {
                events: { onhover: { enable: true, mode: "repulse" } }
            },
            retina_detect: true
        });
    }

    /*  Navbar Toggle */
    const toggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');
    if (toggle && navLinks) {
        toggle.addEventListener('click', () => navLinks.classList.toggle('active'));
    }

    /*  Name Typing & Title Cycling */
    const name = "Sanampreet Kaur";
    const titles = ["Software Developer", "Web Developer", "Problem Solver"];
    let nameIndex = 0, titleIndex = 0;

    const nameElement = document.querySelector(".animated-name");
    const titleElement = document.querySelector(".animated-titles");
    const paragraph = document.querySelector(".animated-paragraph");

    function typeName() {
        if (nameElement && nameIndex < name.length) {
            nameElement.textContent += name.charAt(nameIndex);
            nameIndex++;
            setTimeout(typeName, 120);
        } else {
            cycleTitles();
            if (paragraph) paragraph.style.opacity = 1;
        }
    }

    function cycleTitles() {
        if (!titleElement) return;
        titleElement.style.opacity = 0;
        setTimeout(() => {
            titleElement.textContent = titles[titleIndex];
            titleElement.style.opacity = 1;
            titleIndex = (titleIndex + 1) % titles.length;
            setTimeout(cycleTitles, 2000);
        }, 300);
    }

    typeName();

    /*  Scroll-triggered Animations for Summary & Education */
    const summaryCard = document.querySelector('.summary-card');
    const eduCards = document.querySelectorAll('.education-card');

    function handleScrollAnimations() {
        const windowHeight = window.innerHeight;

        if (summaryCard) {
            const rect = summaryCard.getBoundingClientRect();
            summaryCard.classList.toggle('active', rect.top < windowHeight - 100 && rect.bottom > 0);
        }

        eduCards.forEach(card => {
            const rect = card.getBoundingClientRect();
            card.classList.toggle('active', rect.top < windowHeight - 100 && rect.bottom > 0);
        });
    }

    window.addEventListener('scroll', handleScrollAnimations);
    window.addEventListener('load', handleScrollAnimations);

    /* Skills Section Animations */
    const skillSection = document.getElementById("skills");
    const skillCards = document.querySelectorAll(".skill-card");
    const skillBars = document.querySelectorAll(".skill-fill");
    const skillTags = document.querySelectorAll(".tag");

    function revealSkills() {
        if (!skillSection) return;
        const triggerBottom = window.innerHeight * 0.85;
        const sectionTop = skillSection.getBoundingClientRect().top;

        if (sectionTop < triggerBottom) {
            skillCards.forEach((card, i) => setTimeout(() => {
                card.style.opacity = "1";
                card.style.transform = "translateY(0)";
            }, i * 200));

            skillBars.forEach((bar, i) => setTimeout(() => {
                bar.style.width = bar.getAttribute("data-width");
            }, i * 200));

            skillTags.forEach((tag, i) => setTimeout(() => {
                tag.style.opacity = "1";
                tag.style.transform = "translateY(0)";
            }, i * 150));

        } else {
            skillCards.forEach(card => { card.style.opacity = "0"; card.style.transform = "translateY(50px)"; });
            skillBars.forEach(bar => bar.style.width = "0%");
            skillTags.forEach(tag => { tag.style.opacity = "0"; tag.style.transform = "translateY(20px)"; });
        }
    }

    window.addEventListener("scroll", revealSkills);
    revealSkills();

    document.querySelector('.contact-form').addEventListener('submit', function(e) { e.preventDefault(); const form = e.target; form.reset(); let msg = document.createElement('div'); msg.className = 'form-message'; msg.textContent = ' Thank you! Your message has been sent successfully.'; form.appendChild(msg); setTimeout(() => msg.style.opacity = '1', 100); 
        setTimeout(() => msg.style.opacity = '0', 5000); });
         }
);