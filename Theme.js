const darkBtn = document.querySelector(".dark-theme")

 lightBtn = document.querySelector(".light-theme")

 bodyEl = document.querySelector("body")
 darkTheme = localStorage.getItem("darkTheme")

darkBtn.addEventListener("click", ()=> {
    toggleDarkTheme()
})
lightBtn.addEventListener("click", ()=> {
    toggleLightTheme()

})
 const toggleDarkTheme = () => {
    localStorage.setItem("darkTheme", true);
    bodyEl.setAttribute("data-theme-dark", "dark")
    bodyEl.removeAttribute("data-theme-light")
    lightBtn.style.display = "block"
    darkBtn.style.display = "none"
 }
 const toggleLightTheme = () => {
    localStorage.removeItem("darkTheme");
    bodyEl.setAttribute("data-theme-light", "light")
    bodyEl.removeAttribute("data-theme-dark")
    lightBtn.style.display = "none"
    darkBtn.style.display = "block"
 }
 const toggleSavedTheme = () => {
    darkTheme? toggleDarkTheme() : toggleLightTheme()
 }
toggleSavedTheme();