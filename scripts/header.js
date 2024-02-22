function headerContent(currentPage) {
    document.querySelector("header").innerHTML = `
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
        <nav class="main-nav">
            <ul>
                <li>
                    <a href="index.html" class="${currentPage == "index" ? "current" : ''}">
                        index
                    </a>
                </li>
                <li>
                    <a href="projects.html" class="${currentPage == "projects" ? "current" : ''}">
                        projects
                    </a>
                </li>
                <li>
                    <a href="services.html" class="${currentPage == "services" ? "current" : ''}">
                        services
                    </a>
                </li>
                <li>
                    <a href="contact.html" class="${currentPage == "contact" ? "current" : ''}">
                        contact
                    </a>
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
        <button id="dark-mode-switch">
            <img src="icons/light_mode_black_24dp.svg">
        </button>
    </div>`;

    // After rendering the content of the header
    // Sounds
    const openSound = new Audio(`audio/waterdrop.mp3`);
    const closeSound = new Audio(`audio/waterdrop.mp3`);
    const darkSwitchSound = new Audio(`audio/cricket.mp3`);
    const lightSwitchSound = new Audio(`audio/tweet.mp3`);
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
            themeModeIcon.src = `icons/dark_mode_white_24dp.svg`;
            darkSwitchSound.play()
            sessionStorage.setItem("usingDarkMode", 'y')
        } else {
            themeModeIcon.src = `icons/light_mode_black_24dp.svg`;
            lightSwitchSound.play()
            sessionStorage.setItem("usingDarkMode", '')
        }
    })
    if (sessionStorage.getItem("usingDarkMode") != null) {
        if (sessionStorage.getItem("usingDarkMode") == 'y') darkModeSwitch.click()
    } else if (new Date().getHours() < 6 || new Date().getHours() > 18) darkModeSwitch.click()
    // dark mode when the hour is in the range 6 PM -> 6 AM
}
