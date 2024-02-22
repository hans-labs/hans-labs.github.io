function headerContent(currentPage) {
    document.querySelector("header").innerHTML = `
    <header id="header">
    <h1>
        <a href="index.html">
            Han's Labs
        </a>
    </h1>
    <nav class="nav">
        <button class="toggle-menu">
            <span></span>
        </button>
    </nav>

    <div id="menu" class="">
       
        <button id="dark-mode-switch">
            <img src="assets/dark_icon.svg">
        </button>
        
        <nav class="main-nav">
            <ul>
                <li>
                    <a href="index.html" class="${currentPage == "index" ? "current" : ''}">Index</a>
                </li>
                <li>
                    <a href="projects.html" class="${currentPage == "projects" ? "current" : ''}">projects</a>
                </li>
                <li>
                    <a href="services.html" class="${currentPage == "services" ? "current" : ''}">services</a>
                </li>
                <li>
                    <a href="contacts.html" class="${currentPage == "contacts" ? "current" : ''}">contact</a>
                </li>
            </ul>
        </nav>
        
        <nav class="social-links">
            <ul>
                <li>
                    <a href="https://www.behance.net/HanELT">behance</a>
                </li>
            </ul>
        </nav>
    </div>
    </header>`;

    // After rendering the content of the header
    // Sounds
    const openSound = new Audio(`assets/waterdrop.mp3`);
    const closeSound = new Audio(`assets/waterdrop.mp3`);
    const darkSwitchSound = new Audio(`assets/waterdrop.mp3`);
    const lightSwitchSound = new Audio(`assets/waterdrop.mp3`);
    // DOM
    const hamburger = document.querySelector('.toggle-menu')
    const menu = document.getElementById('menu');
    const darkModeSwitch = document.getElementById("dark-mode-switch");
    const themeModeIcon = darkModeSwitch.querySelector("img");

    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle('active');
        menu.classList.toggle('open');

        if (menu.classList.contains('open')) {
            openSound.play();
        } else {
            closeSound.play();
        }
    });
    darkModeSwitch.addEventListener("click", () => {
        document.body.classList.toggle('dark-mode');
        if (document.body.classList.contains("dark-mode")) {
            themeModeIcon.src = 'assets/light_icon.svg`;
            darkSwitchSound.play()
            sessionStorage.setItem("usingDarkMode", 'y')
        } else {
            themeModeIcon.src = `assets/dark_icon.svg`;
            lightSwitchSound.play()
            sessionStorage.setItem("usingDarkMode", '')
        }
    })
    if (sessionStorage.getItem("usingDarkMode") != null) {
        if (sessionStorage.getItem("usingDarkMode") == 'y') darkModeSwitch.click()
    } else if (new Date().getHours() < 6 || new Date().getHours() > 18) darkModeSwitch.click()
    // dark mode when the hour is in the range 6 PM -> 6 AM
}
