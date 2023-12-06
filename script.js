const aboutBtn = document.getElementById("aboutBtn");
const resumeBtn = document.getElementById("resumeBtn");
const contactBtn = document.getElementById("contactBtn");
const homeBtn = document.getElementById("active");

const homePage = document.getElementById("homePage");
const aboutPage = document.getElementById("aboutPage");
const contactPage = document.getElementById("contactPage");
const resumePage = document.getElementById("resumePage");

function about() {
  aboutPage.style.display = "flex";
  homePage.style.display = "none";
  contactPage.style.display = "none";
  resumePage.style.display = "none";

  aboutBtn.style.fontSize = "1.8rem";
  aboutBtn.style.fontWeight = "800";
  aboutBtn.style.textTransform = "uppercase";
  aboutBtn.style.textDecoration = "underline";
  aboutBtn.style.color = "black";
  aboutBtn.style.backgroundColor = "white";
  aboutBtn.style.padding = "10px";
  aboutBtn.style.borderRadius = "10px";

  homeBtn.style.color = "#000";
  homeBtn.style.textTransform = "lowercase";
  homeBtn.style.textDecoration = "none";
  homeBtn.style.fontWeight = "400";
  homeBtn.style.fontSize = "1.1rem";

  contactBtn.style.color = "#fff";
  contactBtn.style.textTransform = "lowercase";
  contactBtn.style.textDecoration = "none";
  contactBtn.style.fontWeight = "400";
  contactBtn.style.fontSize = "1.1rem";

  resumeBtn.style.color = "#fff";
  resumeBtn.style.backgroundColor = "transparent";
  resumeBtn.style.textTransform = "lowercase";
  resumeBtn.style.textDecoration = "none";
  resumeBtn.style.fontWeight = "400";
  resumeBtn.style.fontSize = "1.1rem";
}

function resume() {
  resumePage.style.display = "flex";
  aboutPage.style.display = "none";
  homePage.style.display = "none";
  contactPage.style.display = "none";

  resumeBtn.style.fontSize = "1.8rem";
  resumeBtn.style.fontWeight = "800";
  resumeBtn.style.textTransform = "uppercase";
  resumeBtn.style.textDecoration = "underline";
  resumeBtn.style.color = "black";
  resumeBtn.style.backgroundColor = "white";
  resumeBtn.style.padding = "10px";
  resumeBtn.style.borderRadius = "10px";

  homeBtn.style.color = "#000";
  homeBtn.style.textTransform = "lowercase";
  homeBtn.style.textDecoration = "none";
  homeBtn.style.fontWeight = "400";
  homeBtn.style.fontSize = "1.1rem";

  contactBtn.style.color = "#fff";
  contactBtn.style.backgroundColor = "transparent";
  contactBtn.style.textTransform = "lowercase";
  contactBtn.style.textDecoration = "none";
  contactBtn.style.fontWeight = "400";
  contactBtn.style.fontSize = "1.1rem";

  aboutBtn.style.color = "#fff";
  aboutBtn.style.backgroundColor = "transparent";
  aboutBtn.style.textTransform = "lowercase";
  aboutBtn.style.textDecoration = "none";
  aboutBtn.style.fontWeight = "400";
  aboutBtn.style.fontSize = "1.1rem";
}

function contact() {
  contactPage.style.display = "flex";
  aboutPage.style.display = "none";
  homePage.style.display = "none";
  resumePage.style.display = "none";

  contactBtn.style.fontSize = "1.8rem";
  contactBtn.style.fontWeight = "800";
  contactBtn.style.textTransform = "uppercase";
  contactBtn.style.textDecoration = "underline";
  contactBtn.style.color = "black";
  contactBtn.style.backgroundColor = "white";
  contactBtn.style.padding = "10px";
  contactBtn.style.borderRadius = "10px";
  

  homeBtn.style.color = "#000";
  homeBtn.style.textTransform = "lowercase";
  homeBtn.style.textDecoration = "none";
  homeBtn.style.fontWeight = "400";
  homeBtn.style.fontSize = "1.1rem";

  aboutBtn.style.color = "#fff";
  aboutBtn.style.backgroundColor = "transparent";
  aboutBtn.style.textTransform = "lowercase";
  aboutBtn.style.textDecoration = "none";
  aboutBtn.style.fontWeight = "400";
  aboutBtn.style.fontSize = "1.1rem";

  resumeBtn.style.color = "#fff";
  resumeBtn.style.textTransform = "lowercase";
  resumeBtn.style.textDecoration = "none";
  resumeBtn.style.fontWeight = "400";
  resumeBtn.style.fontSize = "1.1rem";
  resumeBtn.style.backgroundColor = "transparent";
}

aboutBtn.addEventListener("click", about);
resumeBtn.addEventListener("click", resume);
contactBtn.addEventListener("click", contact);
homeBtn.addEventListener("click", () => {
  location.reload();
});
