function darkMode () {
    const modeSwitch = document.getElementById("mode-switch");
    const body = document.body;
    modeSwitch.addEventListener("change", () => {
    document.body.classList.toggle("dark-mode");
    })
    const darkModeEnabled = body.classList.contains("dark-mode");
    document.cookie = "dark-mode=" + darkModeEnabled;
};

function checkDarkModeCookie() {
    const cookies = document.cookie.split(";");
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim();
      if (cookie.startsWith("dark-mode=")) {
        const value = cookie.substring("dark-mode=".length);
        if (value === "true") {
          document.body.classList.add("dark-mode");
        } else {
          document.body.classList.remove("dark-mode");
        }
      }
    }
};