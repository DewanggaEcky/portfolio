/* BACKGROUND HEADER */
const scrollHeader = () => {
  const header = document.getElementById("main-header");
  this.scrollY >= 50
    ? header.classList.add("bg-header")
    : header.classList.remove("bg-header");
};
window.addEventListener("scroll", scrollHeader);

/*  SCROLL SECTION ACTIVE LINK */
const sections = document.querySelectorAll("section[id]");

const scrollActive = () => {
  const scrollDown = window.scrollY;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute("id"),
      sectionsClass = document.querySelector(
        ".nav__menu a[href*=" + sectionId + "]"
      );

    if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
      sectionsClass.classList.add("active-link");
    } else {
      sectionsClass.classList.remove("active-link");
    }
  });
};
window.addEventListener("scroll", scrollActive);

/*  TEXT ANIMATION  */
const texts = [
  "Web Developer",
  "UI / UX Designer",
  "Frontend Developer",
  "Full Stack Developer",
];
const typingSpeed = 150; // Kecepatan mengetik (ms)
const erasingSpeed = 100; // Kecepatan menghapus (ms)
const delayBetweenWords = 1500; // Waktu jeda antar kata (ms)

let textIndex = 0; // Indeks teks saat ini
let charIndex = 0; // Indeks karakter saat ini
const dynamicText = document.getElementById("dynamic-text");

function typeText() {
  if (charIndex < texts[textIndex].length) {
    dynamicText.textContent += texts[textIndex].charAt(charIndex);
    charIndex++;
    setTimeout(typeText, typingSpeed);
  } else {
    setTimeout(eraseText, delayBetweenWords); // Tunggu sebelum mulai menghapus
  }
}

function eraseText() {
  if (charIndex > 0) {
    dynamicText.textContent = texts[textIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(eraseText, erasingSpeed);
  } else {
    textIndex = (textIndex + 1) % texts.length; // Pindah ke teks berikutnya
    setTimeout(typeText, typingSpeed);
  }
}
typeText();
