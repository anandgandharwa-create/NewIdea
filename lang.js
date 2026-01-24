const words = {
  hi: {
    title: "ज़ीरो क्वांटम फ़्रीक्वेंसी",
    desc: "यह ऐप चेतना और ऊर्जा पर आधारित है"
  },
  en: {
    title: "Zero Quantum Frequency",
    desc: "This app is based on consciousness and energy"
  }
};

function setLang(lang) {
  localStorage.setItem("lang", lang);
  document.documentElement.lang = lang;

  document.querySelectorAll("[data-key]").forEach(el => {
    const key = el.getAttribute("data-key");
    if (words[lang][key]) {
      el.innerHTML = words[lang][key];
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  setLang(localStorage.getItem("lang") || "hi");
});
