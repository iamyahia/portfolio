document.addEventListener("DOMContentLoaded", function () {
  const cursor = document.querySelector(".cursor");
  const hoverElements = document.querySelectorAll(
    ".name, .title, .social-link, .construction-badge, .coming-soon"
  );

  document.addEventListener("mousemove", (e) => {
    cursor.style.left = e.pageX + "px";
    cursor.style.top = e.pageY + "px";
  });

  hoverElements.forEach((el) => {
    el.addEventListener("mouseenter", () => {
      cursor.classList.add("hovered");
    });

    el.addEventListener("mouseleave", () => {
      cursor.classList.remove("hovered");
    });
  });

  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  }, observerOptions);

  const animatedElements = document.querySelectorAll(
    ".hero-section, .connect-section, .footer"
  );

  animatedElements.forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(30px)";
    el.style.transition = "opacity 0.8s ease, transform 0.8s ease";
    observer.observe(el);
  });

  const descriptionElements = document.querySelectorAll(".description");

  function typeWriter(element, text, speed = 50) {
    let i = 0;
    element.innerHTML = "";

    function type() {
      if (i < text.length) {
        element.innerHTML += text.charAt(i);
        i++;
        setTimeout(type, speed);
      }
    }

    type();
  }

  setTimeout(() => {
    if (descriptionElements[0]) {
      const originalText = descriptionElements[0].textContent;
      typeWriter(descriptionElements[0], originalText, 30);
    }
  }, 1000);

  const socialLinks = document.querySelectorAll(".social-link");
  socialLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      const ripple = document.createElement("span");
      const rect = this.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;

      ripple.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        left: ${x}px;
        top: ${y}px;
        background: rgba(73, 255, 172, 0.3);
        border-radius: 50%;
        transform: scale(0);
        animation: ripple 0.6s linear;
        pointer-events: none;
      `;

      this.style.position = "relative";
      this.style.overflow = "hidden";
      this.appendChild(ripple);

      setTimeout(() => {
        ripple.remove();
      }, 600);
    });
  });

  const style = document.createElement("style");
  style.textContent = `
    @keyframes ripple {
      to {
        transform: scale(4);
        opacity: 0;
      }
    }
  `;
  document.head.appendChild(style);

  document.addEventListener("mousemove", (e) => {
    const mouseX = e.clientX / window.innerWidth;
    const mouseY = e.clientY / window.innerHeight;

    document.body.style.background = `
      linear-gradient(
        ${135 + mouseX * 10}deg, 
        hsl(${mouseX * 360}, 20%, ${5 + mouseY * 5}%) 0%, 
        hsl(${mouseY * 360}, 15%, ${10 + mouseX * 5}%) 100%
      )
    `;
  });

  window.addEventListener("load", () => {
    document.body.style.opacity = "1";
    document.body.style.transform = "scale(1)";
  });

  document.body.style.opacity = "0";
  document.body.style.transform = "scale(0.95)";
  document.body.style.transition = "opacity 0.8s ease, transform 0.8s ease";
});
