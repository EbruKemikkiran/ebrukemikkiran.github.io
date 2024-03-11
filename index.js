document.addEventListener('DOMContentLoaded', () => {
    const rootElement = document.getElementById('root');

    const App = () => {
        return `
            <div>
            
            </div>
        `;
    };

    rootElement.innerHTML = App();
});




  // Banner component
  function renderBanner() {
    const bannerElement = document.getElementById("banner");
    bannerElement.innerHTML = `
    <nav class="navbar-brand">
    <div class="container">
      <span class="navbar-text">
        <img href="" src="assets/img/logo.png" alt="Logo" style="width: 30%; width="40" height="40" class="d-inline-block align-top">
     

      
            <div class="ms-auto social-icon">
              <a href="https://www.linkedin.com/in/ebru-kemikkiran-90b86ab2" target="blank"><img src="assets/img/linkedin.png" alt="LinkedIn"></a>
              <a href="https://twitter.com/EKemikkirann" target="blank"><img src="assets/img/twitter.png" alt="Twitter"></a>
              <a href="https://github.com/EbruKemikkiran" target="blank"><img src="assets/img/github.png" alt="GitHub"></a>
            </div>
                
            
            <button class="btn btn-secondary dropdown-toggle vvd" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
       
            <span>Let's Connect</span></button>

            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <li><a class="dropdown-item" href="#projects">Projects</a></li>
            <li><a class="dropdown-item" href="#footer">Contacts</a></li>
            </ul>
          </span>

    </div>
    </nav>
        <section class="banner" id="home">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-xs-12 col-md-6 col-xl-7 animate__animated animate__fadeIn">
                        <span class="tagline">Welcome to my Portfolio</span>
                        <h1>Hi! I'm Ebru</h1>
                        <p>I am a founder Pepper Tech Studio, a software studio in London. I am a MSc degree Software Engineer specializing in backend with .NET experience. Let's your business idea well cook with creative development.</p>
                        <button class="button"><a href="#footer" style="display: block;"><span>Get a Quote</a></span></button>
                    </div>
                    <div class="col-xs-12 col-md-6 col-xl-5 animate__animated animate__zoomIn">
                        <img src="assets/img/header-img.png" alt="Header Img">
                    </div>
                </div>
            </div>
        </section>
        <section class="project" id="projects">
        <div class="container">
            <div class="row">
                <div class="col">
                    <h2>Projects</h2>
                    <p>I have experience in backend module projects developed with .NET. I also have fullstack .NET API and Blazor projects some of them built with HTML5, CSS, and JavaScript. You can take a look at some prototypes of these projects on my GitHub repositories. Additionally, I am currently developing hybrid web and mobile applications with .NET MAUI.Please stay in touch with me to check out my private repositories on GitHub.</p>

                    <div id="projects-tabs">
                    <ul class="nav nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                        <li class="nav-item">
                        <a class="nav-link active" id="first-tab" data-bs-toggle="pill" href="#first" role="tab" aria-controls="first" aria-selected="true"><img src="assets/img/softwarecode.png" alt="Img" style="width: 40%; filter: brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(100%) hue-rotate(0deg) brightness(100%) contrast(100%);"></a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" id="second-tab" data-bs-toggle="pill" href="#second" role="tab" aria-controls="second" aria-selected="false"><img src="assets/img/webdevelopment.png" alt="Img" style="width: 40%; filter: brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(100%) hue-rotate(0deg) brightness(100%) contrast(100%);"></a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" id="third-tab" data-bs-toggle="pill" href="#third" role="tab" aria-controls="third" aria-selected="false"><img src="assets/img/consultant.png" alt="Img" style="width: 40%; filter: brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(100%) hue-rotate(0deg) brightness(100%) contrast(100%);"></a>
                        </li>
                    </ul>
                    <div class="tab-content" id="pills-tabContent">
                        
                    <div class="tab-pane fade" id="first" role="tabpanel" aria-labelledby="first-tab">
                    <h2>Software Development</h2>
                    <p>Experience in backend module projects developed with .NET. Also I have projects with .NET API. You can take a look at some prototypes of these projects on my GitHub repositories. Additionally, I am currently developing hybrid web and mobile applications with .NET MAUI.</p>
                    <div class="proj-imgbx">
                    <a href="https://github.com/EbruKemikkiran" target="_blank"><img src="assets/img/project-img5.jpg" alt="title" /></a>
                    </div>
                </div>
                
                <div class="tab-pane fade" id="second" role="tabpanel" aria-labelledby="second-tab">
                    <h2>Web Development</h2>
                    <p>Experience in full stack projects built with HTML5, CSS, and JavaScript, PHP, and .NET Blazor. You can take a look at some prototypes of these projects on my GitHub repositories as well.</p>
                    <div class="proj-imgbx">
                        <a href="https://github.com/EbruKemikkiran" target="_blank"><img src="assets/img/project-img1.jpg" alt="title" /><a/>
                    </div>
                </div>
                        
                <div class="tab-pane fade" id="third" role="tabpanel" aria-labelledby="third-tab">
                <h2>Technology Consulting</h2>
                <p>Coaching: I've Created and Continue to Develop Solutions, Offering Technology Consulting, Support, and Updates to Guide You Through Your Digital Journey Successfully.</p>
                <div class="proj-imgbx">
                    <img src="assets/img/project-img6.jpg" alt="title" />
                </div>
                </div>
                
            </div>
        </div>
    </div>
</div>
</div>
<img class="background-image-right" src="colorSharp2.jpg"></img>
</section>
<section class="skill" id="skills">
            <div class="container">
              <div class="row">
                <div class="col-12">
                  <div class="skill-bx wow zoomIn">
                    <h2>Skills</h2>
                    <p>As a backend software engineer, I work with .NET Framework and .NET API. I develop modern, simple websites and full-stack web applications using .NET Blazor, HTML, CSS, and JavaScript, tailored to my clients' requirements and consultant their techonolgy requirements. I have a proficiency in SQL and database management.</p>
          
                    <div id="skill-slider" class="owl-carousel owl-theme skill-slider">

                      <div class="item">
                      <h5>Software Development</h5>
                        <img src="assets/img/meter1.png" alt="Image" />  
                      </div>

                      <div class="item">
                      <h5>Web Development</h5>
                      <img src="assets/img/meter2.png" alt="Image" />
                      </div>

                      <div class="item">
                      <h5>Technology Consultant</h5>
                        <img src="assets/img/meter3.png" alt="Image" />
                      </div>
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="background-image-left"><img src="assets/img/color-sharp2.jpg" alt="Image" /></div>
          </section>
          <section>
  <footer class="footer">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-12 col-sm-6 text-center">
        <span class="footer-text">
        <img href="" src="assets/img/logo.png" alt="Logo" style="width: 50%; width="40" height="40" class=" align-bottom">
        </div>


        
          <div class="ms-auto footer-icon">
            <a href="mailto:kemikkiranebru@hotmail.com">
              <img src="assets/img/email.png" alt="Email" class="icon" style="width: 80%; filter: brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(100%) hue-rotate(0deg) brightness(100%) contrast(100%);">
            </a>
            <a href="https://wa.me/+447379952444">
              <img src="assets/img/whatsapp.png" alt="Whatsapp" class="icon" style="width: 80%; filter: brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(100%) hue-rotate(0deg) brightness(100%) contrast(100%);">
            </a>
          </div>
        
        </span>
        <p class="col-12 col-sm-6 text-center text-sm-end">Copyright 2022. All Rights Reserved by Ebru Kemikkiran</p>
      </div>
    </div>
  </footer>
</section>



    `;


const customContainerStyle = `
.container {
    margin-top: 5px; /* İstediğiniz margin değerini buradan ayarlayabilirsiniz */
}
`;

    // Stili ekleyerek özelleştirilmiş container'ın margin değerini ayarlayın
    const styleElement = document.createElement("style");
    styleElement.innerHTML = customContainerStyle;
    bannerElement.appendChild(styleElement);





  }




  
  // Contact component
  function renderContact() {
    const contactElement = document.getElementById("contact");
    contactElement.innerHTML = `
      <div>
        <!-- Your contact form or information here -->
      </div>
    `;
  }
  
  // Footer component
  function renderFooter() {
    const footerElement = document.getElementById("footer");
    footerElement.innerHTML = `
      <footer>
        <!-- Your footer content here -->
      </footer>
    `;
  }
  
  // Render all components
  function renderApp() {
    //renderNavBar();
    renderBanner();
    renderSkills();
    renderProjects();
    renderContact();
    renderFooter();
  }
  
  // Call renderApp function to render all components
  renderApp();
  