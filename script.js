// ==============================
// SCROLL PROGRESS BAR
// ==============================

window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY;
  const docHeight =
    document.documentElement.scrollHeight -
    window.innerHeight;

  const progress =
    (scrollTop / docHeight) * 100;

  document.getElementById(
    "progress-bar"
  ).style.width = progress + "%";
});

// ==============================
// NAVBAR SHRINK EFFECT
// ==============================

const navbar =
  document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 80) {
    navbar.style.padding = "18px 8%";
    navbar.style.background =
      "rgba(0,0,0,0.85)";
  } else {
    navbar.style.padding = "24px 8%";
    navbar.style.background =
      "rgba(0,0,0,0.35)";
  }
});

// ==============================
// SIMPLE SCROLL REVEAL
// ==============================

const sections =
  document.querySelectorAll(
    "section"
  );

sections.forEach(section => {
  section.classList.add("reveal");
});

function revealSections() {
  const reveals =
    document.querySelectorAll(
      ".reveal"
    );

  reveals.forEach(item => {
    const windowHeight =
      window.innerHeight;

    const top =
      item.getBoundingClientRect()
        .top;

    if (top < windowHeight - 100) {
      item.classList.add("active");
    }
  });
}

window.addEventListener(
  "scroll",
  revealSections
);

revealSections();

// ==============================
// FLOATING HERO CARDS
// ==============================

const card1 =
  document.querySelector(".card1");

const card2 =
  document.querySelector(".card2");

if (card1 && card2) {
  let position = 0;

  setInterval(() => {
    position += 0.6;

    card1.style.transform =
      `translateY(${Math.sin(position / 12) * 12}px)`;

    card2.style.transform =
      `translateY(${Math.cos(position / 12) * 12}px)`;
  }, 25);
}

// ==============================
// BUTTON HOVER EFFECT
// ==============================

const buttons =
  document.querySelectorAll(
    ".btn-primary, .btn-secondary, .btn-nav"
  );

buttons.forEach(btn => {
  btn.addEventListener(
    "mouseenter",
    () => {
      btn.style.transform =
        "translateY(-4px)";
    }
  );

  btn.addEventListener(
    "mouseleave",
    () => {
      btn.style.transform =
        "translateY(0)";
    }
  );
});

// ==============================
// BMI CALCULATOR
// ==============================

function calculateBMI() {
  const weight =
    document.getElementById(
      "weight"
    ).value;

  const height =
    document.getElementById(
      "height"
    ).value;

  const result =
    document.getElementById(
      "result"
    );

  if (
    weight === "" ||
    height === ""
  ) {
    result.innerHTML =
      "Please enter both values.";
    return;
  }

  const bmi =
    (
      weight /
      Math.pow(height / 100, 2)
    ).toFixed(1);

  let category = "";
  let advice = "";

  if (bmi < 18.5) {
    category = "Underweight";
    advice =
      "Focus on muscle gain and a calorie surplus diet.";
  } else if (bmi < 25) {
    category = "Normal";
    advice =
      "Great shape! Maintain your fitness and strength.";
  } else if (bmi < 30) {
    category = "Overweight";
    advice =
      "A structured fat-loss program is recommended.";
  } else {
    category = "Obese";
    advice =
      "Consult a trainer and begin a transformation program.";
  }

  result.innerHTML = `
      <h2>BMI: ${bmi}</h2>
      <p>${category}</p>
      <small>${advice}</small>
  `;
}

// ==============================
// CONTACT FORM
// ==============================

const contactForm =
  document.querySelector(
    ".contact-form"
  );

if (contactForm) {
  contactForm.addEventListener(
    "submit",
    function (e) {
      e.preventDefault();

      alert(
        "Thank you! We will contact you shortly."
      );

      contactForm.reset();
    }
  );
}

// ==============================
// SMOOTH SCROLL FOR NAV LINKS
// ==============================

document
  .querySelectorAll(
    'a[href^="#"]'
  )
  .forEach(anchor => {
    anchor.addEventListener(
      "click",
      function (e) {
        e.preventDefault();

        const target =
          document.querySelector(
            this.getAttribute(
              "href"
            )
          );

        if (target) {
          target.scrollIntoView({
            behavior: "smooth"
          });
        }
      }
    );
  });