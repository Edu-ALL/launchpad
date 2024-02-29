// NAVBAR SECTION
const mobileMenuBtn = document.getElementById("mobile-menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

mobileMenuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

// HOME HERO SECTION
const paperPlane = document.querySelector(".paper-plane");
const launchpad = document.getElementById("launchpad");
const heroSection = document.getElementById("hero-section");
const navigation = document.getElementById("navigation");
const logoSet = document.getElementById("logo-set");

console.log("papaer " + paperPlane);

paperPlane.addEventListener("click", () => {
  document.body.classList.remove("overflow-hidden");
  launchpad.classList.remove("translate-y-[90%]");
  launchpad.classList.add("translate-y-0");
  logoSet.classList.add("hidden");
  navigation.classList.remove("hidden");
  setTimeout(() => {
    heroSection.classList.remove("bg-banner");
  }, 2300);
});

function toggleModal() {
  document.getElementById("modal").classList.toggle("hidden");
}

// LAUNCHPAD SECTION
const lpImgAttributeData = [
  {
    className: "lp-img-loc",
    bottom: "75%",
  },
  {
    className: "lp-img-1",
    scale: 1.2,
    x: 90,
    y: 140,
  },
  {
    className: "lp-img-2",
    scale: 1.3,
    x: -580,
    y: 140,
  },
  {
    className: "lp-img-3",
    scale: 0.9,
    x: 0,
    y: -300,
  },
  {
    className: "lp-img-4",
    scale: 1.4,
    x: -480,
    y: 150,
  },
  {
    className: "lp-img-5",
    scale: 1.3,
    x: 75,
    y: 140,
  },
  {
    className: "lp-img-6",
    scale: 1.15,
    x: -430,
    y: -40,
  },
  {
    className: "lp-img-7",
    scale: 2.5,
    x: -325,
    y: 110,
  },
  {
    className: "lp-img-8",
    scale: 1.2,
    x: 100,
    y: -25,
  },
  {
    className: "lp-img-9",
    scale: 1.2,
    x: 490,
    y: 70,
  },
  {
    className: "lp-img-logo",
    opacity: 0,
    duration: 0.1,
  },
  {
    className: "lp-img-wh",
    y: -30,
    opacity: 1,
    duration: 0.5,
  },
];

lpImgAttributeData.forEach((data) => {
  gsap.to(`.${data.className}`, {
    scale: data.scale ?? 1,
    x: data.x ?? 0,
    y: data.y ?? 0,
    opacity: data.opacity ?? 1,
    bottom: data.bottom ?? 0,
    duration: data.duration ?? 0.7,
    ease: "none",
    scrollTrigger: {
      trigger: "#hero-section",
      toggleActions: "play reverse play reverse",
      start: "bottom 90%",
      end: "bottom 40%",
    },
  });
});
