class pageFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <footer id="avocado_coding_footer">
        <nav id="footer_nav">
            <ul>
                <li><a href="#about_container" class="menubar__links" id="about_page">Partnership</a></li>
                <li><a href="teams.html" class="menubar__links" id="team_page">Contact</a></li>
                <li><a href="courses.html" class="menubar__links" id="courses_page">courses</a></li>
                <li><a href="#projects" class="menubar__links" id="projects_page">projects</a></li>
            </ul>
        </nav>
    </footer>
        `
    }
}
customElements.define('page-footer', pageFooter);
