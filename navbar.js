class pageHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <header id="navbar_header">
        <h1 class='logo'><a href="index.html" id="navbar__logo">Avocado Coding Class</a></h1>
        <input type="checkbox" id='nav-toggle' class="nav-toggle">
        <nav>
            <ul class="navbar__menu">
                <li><a href="#about_container" class="menubar__links" id="about_page">about</a></li>
                <li><a href="#team_member_container" class="menubar__links" id="team_page">team</a></li>
                <li><a href="#courses_container" class="menubar__links" id="courses_page">courses</a></li>
                <li><a href="#projects" class="menubar__links" id="projects_page">projects</a></li>
                <li><a href="signup.html" class="menubar__links" id ="signup_button" target="_blank">Sign Up</a></li>
            </ul>
        </nav>
        <label for='nav-toggle' class='nav-toggle-label' id="mobile-menu">
            <span></span>
        </label>
    </header>
        `
    }
}
customElements.define('page-header', pageHeader);
