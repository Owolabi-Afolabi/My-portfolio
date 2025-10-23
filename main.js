document.addEventListener("DOMContentLoaded", () => {
  // Fade-in on scroll
  const sections = document.querySelectorAll("section");
  const sectionObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });
  sections.forEach(section => sectionObserver.observe(section));

  // Skill bar animation with counter
  const skillBars = document.querySelectorAll(".skill__bar span");
  const skillsSection = document.querySelector(".skills");
  if (skillsSection) {
    const skillsObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          skillBars.forEach((bar, i) => {
            const target = parseInt(bar.dataset.width);
            let count = 0;
            const fill = setInterval(() => {
              if (count >= target) {
                clearInterval(fill);
              } else {
                count++;
                bar.style.width = count + "%";
                bar.textContent = count + "%";
              }
            }, 15);
          });
          skillsObserver.unobserve(skillsSection);
        }
      });
    }, { threshold: 0.3 });

    skillsObserver.observe(skillsSection);
  }

  // Mobile nav toggle
  const navToggle = document.getElementById("navToggle");
  const nav = document.getElementById("nav");
  navToggle.addEventListener("click", () => {
    nav.classList.toggle("nav--open");
  });
});
