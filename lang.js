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

  document.querySelectorAll("[data-key]").forEach(el => {
    el.innerText = words[lang][el.getAttribute("data-key")];
  });
}

document.addEventListener("DOMContentLoaded", () => {
  setLang(localStorage.getItem("lang") || "hi");
});
