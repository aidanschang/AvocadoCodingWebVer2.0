class pageHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <header id="navbar_header">
            <h1 class='logo'><a href="index.html" id="navbar__logo">Avocado Coding</a></h1>
            <input type="checkbox" id='nav-toggle' class="nav-toggle">
            <nav id="menu_nav">
                <ul class="navbar__menu">
                    <li><a href="index.html" class="menubar__links" id="about_page">about</a></li>
                    <li><a href="teams.html" class="menubar__links" id="team_page">team</a></li>
                    <li><a href="courses.html" class="menubar__links" id="courses_page">courses</a></li>
                    <li><a href="projects.html" class="menubar__links" id="projects_page">projects</a></li>
                    <li><a href="signup.html" class="menubar__links" id ="signup_button" >Sign Up</a></li>
                </ul>
            </nav>
            <label for='nav-toggle' class='nav-toggle-label' id="mobile-menu">
                <div id="nav-btn">    
                    <span></span>
                </div>
            </label>
        </header>
        `
    }
}
customElements.define('page-header', pageHeader);
