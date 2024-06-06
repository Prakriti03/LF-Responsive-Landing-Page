const btn = document.getElementById("mode-btn");
var darkMode = localStorage.getItem("darkMode");
const parentListEl = document.querySelector(".header__nav-item");
const downloadBtn = document.getElementById("download-btn");

const enableLightMode = () => {
  btn.src = "Images/emoji.png";
  downloadBtn.src = "Images/download.png";
  document.body.classList.add("light-theme");
  localStorage.setItem("darkMode", "enabled");
};

const disableLightMode = () => {
  btn.src = "Images/emoji-light.png";
  downloadBtn.src = "Images/download_dark.png";
  document.body.classList.remove("light-theme");
  localStorage.setItem("darkMode", null);
};

if (darkMode === "enabled") {
  enableLightMode();
} else {
  disableLightMode();
}

btn.addEventListener("click", () => {
  darkMode = localStorage.getItem("darkMode");
  if (darkMode !== "enabled") {
    enableLightMode();
  } else {
    disableLightMode();
  }
});
