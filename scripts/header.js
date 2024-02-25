function headerContent(currentPage) {
    document.querySelector("header").innerHTML = `
    <header id="header">
      <h1>
      <a href="index.html">Han's Labs</a>
      </h1>
       <nav class="nav">
          <button class="toggle-menu">
            <span></span>
          </button>
       </nav>

<div id="menu" class="">
       <nav class="main-nav">
            <ul>
                 <li><a
                    href="index.html"
                    class="${currentPage == "index" ? "current" : ''}">
                    index
                </a></li>
                <li><a
                    href="projects.html"
                    class="${currentPage == "projects" ? "current" : ''}">
                    projects
                </a></li>
                <li><a
                    href="services.html"
                    class="${currentPage == "services" ? "current" : ''}">
                    services
                </a></li>
                <li><a
                    href="contacts.html"
                    class="${currentPage == "contacts" ? "current" : ''}">
                    contact
                </a></li>
           </ul>
       </nav>
       <nav class="social-links">
           <ul>
               <li>
                 <a href="https://www.behance.net/HanELT">behance</a>
               </li>
       </nav>
       </div>
    </header>`;
    // breaking links to letters to enable letter animation
    document.querySelectorAll(".main-nav a").forEach(anchor => {
        let newHTML = '';
        const textContent = anchor.textContent.trim();
        for (let c of textContent) {
            newHTML += `
            <span class="${anchor.className}">
                ${c}
            </span>
            `;
        }
        anchor.innerHTML = newHTML;
    })

    // disabling visiting a new page to implement navigaiton link switch animation
    const letterInterval = 40 // ms
    document.querySelectorAll(".main-nav a").forEach(anchor => {
        anchor.onclick = (event) => {
            event.preventDefault();
            document.querySelectorAll(".current").forEach((deadCurrent, i) =>{
                setTimeout(()=>{
                    deadCurrent.className = '';
                }, i*letterInterval)
            })
            anchor.querySelectorAll("span").forEach((span, i) =>{
                setTimeout(()=>{
                    span.className = "current";
                }, i*letterInterval)
            })
            
            setTimeout(()=>{
                location.href = anchor.href;
            }, letterInterval*anchor.querySelectorAll("span").length)
        }
    })
}
