/* ===== EDIT THIS BLOCK ONLY ===== */
const PROFILE = {
  name: "Yeshi Peldon",
  headline: "Computer Systems & Networking Student | Web Developer",
  typed: ["turning ideas into code", "building responsive websites"],
  intro: "I am a 2nd year Computer Systems and Networking student at Jigme Namgyel Engineering College. I enjoy building responsive websites and configuring computer networks, and I always love to learn new technologies.",
  photo: "image/profile.png",     // your photo for the Home section

  // photos shown one after another in the About section
  aboutPhotos: ["image/profile1.png", "image/profile2.png", "image/profile3.png","image/profile4.png","image/profile5.png","image/profile6.png"],

  about: "I am a 2nd year Computer Systems and Networking student at Jigme Namgyel Engineering College. I am passionate about web development, computer networks and system administration. I enjoy learning new technologies, solving problems and working on real projects that make a difference.",
  facts: [
    ["🎓", "Student", "JNEC, Bhutan"],
    ["❤️", "Interests", "Web Dev, Networking, System Administration"],
    ["🎯", "Goal", "To become a skilled IT professional"],
    ["📍", "Location", "Samdrup Jongkhar, Bhutan"]
  ],
  skills: [
    { icon: "🖥️", title: "Web Development", tags: ["HTML", "CSS", "JavaScript", "Bootstrap"], level: 80, desc: "Building modern and responsive websites." },
    { icon: "💻", title: "Programming", tags: ["Python", "SQL"], level: 70, desc: "Writing clean code and solving problems." },
    { icon: "🌐", title: "Networking", tags: ["Cisco", "Packet Tracer", "BGP"], level: 75, desc: "Configuring and managing computer networks." },
    { icon: "🗄️", title: "System Administration", tags: ["Linux", "Windows Server"], level: 65, desc: "Working with Linux and Windows server environments." }
  ],
  otherSkills: ["Problem solving", "Teamwork", "Communication", "Time management"],
  projects: [
    { title: "Monastery Event Management System", desc: "A web-based system to manage events, attendance, donations and volunteers.", tech: ["HTML", "CSS", "JavaScript", "Bootstrap"], repo: "https://github.com/yeshipeldon/REPO-NAME-1", img: "project1.png", icon: "🏯" },
    { title: "JNEC Events Hub", desc: "A responsive website to showcase and manage college events.", tech: ["HTML", "CSS", "JavaScript", "Bootstrap"], repo: "https://github.com/yeshipeldon/REPO-NAME-2", img: "project2.png", icon: "📅" },
    { title: "IT Helpdesk Ticket System", desc: "A Python Tkinter application to manage IT support tickets with user authentication.", tech: ["Python", "Tkinter", "SQLite"], repo: "https://github.com/yeshipeldon/REPO-NAME-3", img: "project3.png", icon: "🎫" }
  ],
  journey: [
    { icon: "🎓", when: "2024 - Present", title: "Diploma in Computer System and Network", place: "JNEC, Bhutan" },
    { icon: "🏛️", when: "2023", title: "Higher Secondary Education", place: "Samdrup Jongkhar" },
    { icon: "💼", when: "2024", title: "Industry Tour", place: "Tech Park, Thimphu" },
    { icon: "💻", when: "2024 - 2026", title: "Technical Projects", place: "Web Development, Networking, Python" },
    { icon: "⭐", when: "Future", title: "Goal", place: "To become a skilled IT professional", goal: true }
  ],
  contact: { email: "yeshipeldon@example.com", linkedin: "https://www.linkedin.com/in/yeshi-peldon", github: "https://github.com/yeshipeldon" }
};
/* ===== END OF EDIT BLOCK ===== */

function get(id) { return document.getElementById(id); }
const P = PROFILE;
const C = P.contact;

/* ----- Fill the page ----- */
document.title = P.name + " | Portfolio";
get("logo").textContent = P.name;
get("name").textContent = P.name;
get("headline").textContent = P.headline;
get("intro").textContent = P.intro;
get("aboutText").textContent = P.about;
get("footer").textContent = "© " + new Date().getFullYear() + " " + P.name + ". Built with HTML, CSS and JavaScript.";
["photo", "photo2"].forEach(function (id) {
  get(id).src = P.photo;
  get(id).onerror = function () { get(id).style.visibility = "hidden"; };
});

get("socials").innerHTML =
  '<a href="' + C.github + '" target="_blank">🐙 GitHub</a>' +
  '<a href="' + C.linkedin + '" target="_blank">🔗 LinkedIn</a>';

get("facts").innerHTML = P.facts.map(function (f) {
  return '<div class="fact"><span>' + f[0] + '</span><div><b>' + f[1] + '</b><small>' + f[2] + '</small></div></div>';
}).join("");

get("softSkills").innerHTML = P.otherSkills.map(function (s) { return "<li>" + s + "</li>"; }).join("");

get("skillGrid").innerHTML = P.skills.map(function (s) {
  return '<div class="skill"><div class="skill-icon">' + s.icon + '</div><h3>' + s.title + '</h3>' +
    '<ul class="chips">' + s.tags.map(function (t) { return "<li>" + t + "</li>"; }).join("") + '</ul>' +
    '<div class="bar"><i data-width="' + s.level + '"></i></div><p>' + s.desc + '</p></div>';
}).join("");
setTimeout(function () {
  document.querySelectorAll(".bar i").forEach(function (b) { b.style.width = b.dataset.width + "%"; });
}, 300);

get("projectGrid").innerHTML = P.projects.map(function (p) {
  return '<article class="card"><div class="thumb"><img src="' + p.img + '" alt="" onerror="this.remove()">' + p.icon + '</div>' +
    '<div class="card-body"><h3>' + p.title + '</h3><p>' + p.desc + '</p>' +
    '<ul class="chips">' + p.tech.map(function (t) { return "<li>" + t + "</li>"; }).join("") + '</ul>' +
    '<a href="' + p.repo + '" target="_blank">🐙 View on GitHub →</a></div></article>';
}).join("");

get("timeline").innerHTML = P.journey.map(function (j) {
  return '<div class="step' + (j.goal ? " goal" : "") + '"><div class="dot">' + j.icon + '</div>' +
    '<div><b>' + j.when + '</b><b>' + j.title + '</b><small>' + j.place + '</small></div></div>';
}).join("");

get("contactCards").innerHTML =
  '<a class="c-card" href="mailto:' + C.email + '"><span>✉️</span><div><b>Email</b><small>' + C.email + '</small></div></a>' +
  '<a class="c-card" href="' + C.linkedin + '" target="_blank"><span>🔗</span><div><b>LinkedIn</b><small>' + C.linkedin.replace("https://www.", "") + '</small></div></a>' +
  '<a class="c-card" href="' + C.github + '" target="_blank"><span>🐙</span><div><b>GitHub</b><small>' + C.github.replace("https://", "") + '</small></div></a>';

/* ----- Theme toggle (remembers the choice) ----- */
function setTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  get("themeBtn").textContent = theme === "dark" ? "☀️" : "🌙";
  try { localStorage.setItem("theme", theme); } catch (e) {}
}
let saved = null;
try { saved = localStorage.getItem("theme"); } catch (e) {}
setTheme(saved === "dark" ? "dark" : "light");
get("themeBtn").onclick = function () {
  setTheme(document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark");
};

/* ----- Mobile menu ----- */
get("menuBtn").onclick = function () { get("menu").classList.toggle("open"); };
get("menu").onclick = function (e) { if (e.target.tagName === "A") get("menu").classList.remove("open"); };

/* ----- Typing effect ----- */
let wordNo = 0, letters = 0, deleting = false;
function typeEffect() {
  const word = P.typed[wordNo];
  letters += deleting ? -1 : 1;
  get("typed").textContent = word.substring(0, letters);
  let delay = deleting ? 40 : 80;
  if (!deleting && letters === word.length) { deleting = true; delay = 1400; }
  else if (deleting && letters === 0) { deleting = false; wordNo = (wordNo + 1) % P.typed.length; }
  setTimeout(typeEffect, delay);
}
typeEffect();

/* ----- Scroll: active menu link and back-to-top button ----- */
const menuLinks = document.querySelectorAll("nav > a:not(.btn)");
window.addEventListener("scroll", function () {
  const y = document.documentElement.scrollTop;
  get("toTop").classList.toggle("show", y > 500);
  menuLinks.forEach(function (link) {
    const sec = document.querySelector(link.hash);
    link.classList.toggle("active", y >= sec.offsetTop - 120 && y < sec.offsetTop + sec.offsetHeight - 120);
  });
});
get("toTop").onclick = function () { window.scrollTo({ top: 0, behavior: "smooth" }); };

/* ----- Contact form: checks the fields, then opens the email app ----- */
get("contactForm").onsubmit = function (e) {
  e.preventDefault();
  const name = get("fName").value.trim();
  const email = get("fEmail").value.trim();
  const message = get("fMsg").value.trim();
  const out = get("formMsg");
  if (name === "" || message === "" || !/^\S+@\S+\.\S+$/.test(email)) {
    out.className = "error bad";
    out.textContent = "Enter your name, a valid email and a message.";
    return;
  }
  out.className = "error ok";
  out.textContent = "Thanks! Your email app is opening to send the message.";
  location.href = "mailto:" + C.email + "?subject=" + encodeURIComponent("Portfolio message from " + name) +
    "&body=" + encodeURIComponent(message + "\n\n" + name + " (" + email + ")");
  e.target.reset();
};

/* ----- About photo slideshow: changes the picture again and again ----- */
if (P.aboutPhotos.length > 1) {

  // Start with the first slideshow photo
  get("photo2").src = P.aboutPhotos[0];

  // Load all photos first so there is no blank flash
  P.aboutPhotos.forEach(function (file) {
    new Image().src = file;
  });

  let photoNo = 0;

  setInterval(function () {
    const img = get("photo2");

    // fade out
    img.style.opacity = 0;

    setTimeout(function () {
      // next photo (back to the first after the last)
      photoNo = (photoNo + 1) % P.aboutPhotos.length;
      img.style.visibility = "visible";
      img.src = P.aboutPhotos[photoNo];
      // fade in
      img.style.opacity = 1;
    }, 500);

  }, 3500);   // change every 3.5 seconds
}